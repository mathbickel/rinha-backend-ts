import { Extract } from "./extract";

export interface ExtractService {
    getExtract(id: number): Promise<Extract>
}