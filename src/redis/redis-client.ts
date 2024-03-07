
import { setMaxListeners } from "events";
import { Redis } from "ioredis";
import { RepositoryClient } from "../common/repositories/repository-client";

export class RedisClient implements RepositoryClient {
    async getConnection<Redis>(): Promise<Redis> {
        try {
            setMaxListeners(100)
            const isSecure = 'true' === process.env.REDIS_SECURE || false
            const password = process.env.REDIS_PASSWORD ? `:${process.env.REDIS_PASSWORD}@` : ''
            const host = process.env.REDIS_HOST || ''
            const port = Number(process.env.REDIS_PORT)
            const protocol = isSecure ? 'rediss' : 'redis'
            const connectionStr = `${protocol}://${password}${host}:${port}`
            const redis = new Redis(connectionStr)
            process.on('SIGTERM', () => redis.quit())
            return  redis as Redis
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}