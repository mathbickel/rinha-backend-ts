import { BootstrapStart } from "../../common/bootstrap/bootstrapStart";
import { HttpClient } from "../http-client/http-client";
import { HttpRequest } from "../types";

export class Router {
    constructor(protected httpClient: HttpClient) {
        async function startBootstrap() {
            return await new BootstrapStart().getStarted()
        }   
    }

    async init(): Promise<void> 
    {
        this.httpClient.on('get', '/clientes/:id/extrato', async (req: HttpRequest) => {
            // return await new ExtractRepositoryRedis().get(+req.id)
        })

        this.httpClient.on('post', '/transacoes', async (req: string, body: unknown) => {
            return "ok!!!"
        })
    }
}