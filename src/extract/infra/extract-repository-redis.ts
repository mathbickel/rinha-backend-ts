import { HttpRequest } from "../../http/types";
import { Extract } from "../domain/extract";
import { ExtractRepository } from "../domain/extract-repository";

export class ExtractRepositoryRedis implements ExtractRepository {
    constructor(protected req: HttpRequest){}

    async get(): Promise<Extract> {
      console.log(this.req)
      const teste = {
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
      return teste
    }
}