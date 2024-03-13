import { Extract } from "./extract";

export interface ExtractRepository {
    set(data: Extract): Promise<void>
    get(id: number): Promise<Extract>
}