import { ExtractRepositoryRedisBootstrap } from "../../extract/infra/bootstrap/extract-repository-redis-bootstrap";
import { DotEnvBootstrap } from "../dot-env/dot-env-bootstrap";

export class BootstrapStart {
    async getStarted(): Promise<void> {
        await new DotEnvBootstrap().handler()
        await new ExtractRepositoryRedisBootstrap().handler()
    }
}