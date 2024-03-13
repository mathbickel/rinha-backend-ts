import { BootstrapStart } from "./common/bootstrap/bootstrapStart"
import { ExpressAdapter } from "./http/adapter/express-adapter"
import { Router } from "./http/router/router"

async function startBootstrap() {
    return await new BootstrapStart().getStarted()
}

const client = new ExpressAdapter()
const port =  3000
client.listen(port)
const router = new Router(client)
router.init()
console.log('SERVER ON PORT', `${port}`)