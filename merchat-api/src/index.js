import Koa from 'koa'
import koaRouter from 'koa-router'
import koaBody from 'koa-bodyparser'

import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa'
import Schema from './schema'


const app = new Koa()
app.use(koaBody())
const router = new koaRouter()

router.post('/api/graphql', graphqlKoa({ schema: Schema }))
router.get('/api/graphiql', graphiqlKoa({ endpointURL: '/api/graphql' }))

router.get('/', ctx => ctx.body = `
  <h1>The API</h1>
  <p>The merchant api<p>
`)

app.use(router.routes())
app.use(router.allowedMethods())

const port = process.env.PORT || 3000
app.listen(port)
console.log('Listening on port', port)