import { ExtractRepositoryRedis } from "../../extract/infra/extract-repository-redis";
import { HttpClient } from "../http-client/http-client";
import { HttpRequest } from "../types";

export class Router {
    constructor(protected httpClient: HttpClient){}

    async init(): Promise<void> 
    {
        this.httpClient.on('get', '/clientes/:id/extrato', async (req: HttpRequest) => {
            return await new ExtractRepositoryRedis().get(10)
        })

        this.httpClient.on('post', '/transacoes', async (req: string, body: unknown) => {
            return "ok!!!"
        })
    }
}