import dotenv from 'dotenv'
import { Bootstrap } from '../bootstrap/bootstrap'

export class DotEnvBootstrap implements Bootstrap {
    async handler(): Promise<void> {
        dotenv.config()
    }
}
