import { HttpClient } from "../http-client/http-client";

export class Router {
    constructor(protected httpClient: HttpClient){}

    async init(): Promise<void> {
        this.httpClient.on('get', '/',async (params:string, body: unknown) => {
            return "ok"
        })
    }
}