import { Application } from 'oak'
import * as rpc from 'ts-rpc/server.ts'

const app = new Application()

app.use((ctx) => {
  ctx.response.body = 'Hello World!'
})

await app.listen({ port: 8000 })
