import { ExpressAdapter } from "./http/adapter/express-adapter"
import { Router } from "./http/router/router"

const client = new ExpressAdapter()
const port =  3000
client.listen(port)
const router = new Router(client)
router.init()
console.log('SERVER ON PORT', `${port}`)