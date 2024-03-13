import { Redis } from "ioredis";
import { inject, injectable } from "tsyringe";
import { RedisClient } from "../../redis/redis-client";
import { Extract } from "../domain/extract";
import { ExtractRepository } from "../domain/extract-repository";
import { ExtractRepositoryRedisEnum } from "./enum/extract-repository-redis-enum";
@injectable()
export class ExtractRepositoryRedis implements ExtractRepository {
  private conn: Redis

  constructor(@inject(ExtractRepositoryRedisEnum.REDIS_CONNECTION) private RedisClient: RedisClient){}

  async set(data: Extract): Promise<void> 
  {
    this.conn = await this.RedisClient.getConnection()
  }
  
  async get(id: number): Promise<Extract> 
  {
    return result
  }
}

export const result = {
  "saldo": {
    "total": -9098,
    "data_extrato": "2024-01-17T02:34:41.217753Z",
    "limite": 100000
  },
  "ultimas_transacoes": [
    {
      "valor": 10,
      "tipo": "c",
      "descricao": "descricao",
      "realizada_em": "2024-01-17T02:34:38.543030Z"
    },
    {
      "valor": 90000,
      "tipo": "d",
      "descricao": "descricao",
      "realizada_em": "2024-01-17T02:34:38.543030Z"
    }
  ]
}