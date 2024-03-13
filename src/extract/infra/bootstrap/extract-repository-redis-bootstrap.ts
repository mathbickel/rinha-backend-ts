import { container } from "tsyringe";
import { Bootstrap } from "../../../common/bootstrap/bootstrap";
import { DotEnvBootstrap } from "../../../common/dot-env/dot-env-bootstrap";
import { RedisClient } from "../../../redis/redis-client";
import { ExtractRepositoryRedisEnum } from "../enum/extract-repository-redis-enum";

export class ExtractRepositoryRedisBootstrap implements Bootstrap {
    async handler(): Promise<void> {
        new DotEnvBootstrap().handler()

        container.register(ExtractRepositoryRedisEnum.REDIS_CLIENT, RedisClient)
    }
}