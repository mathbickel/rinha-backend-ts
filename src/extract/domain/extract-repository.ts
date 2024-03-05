import { Extract } from "./extract";

export interface ExtractRepository {
    get(id: number): Promise<Extract>
}