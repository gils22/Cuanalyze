import { Hono } from 'hono'
import { cors } from 'hono/cors'
import routes from './routes/index'

const app = new Hono()

app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'DELETE', 'OPTIONS'], 
  allowHeaders: ['Content-Type'],
}))

app.route('/', routes)

export default app
