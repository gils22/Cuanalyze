import { Hono } from 'hono'

import checkProductHealth from './check-product-health'
import saveCheck from './save-check'
import historyApi from './history'
import recommendation from './recommendation'

const app = new Hono()
const cuanalyze = new Hono()

cuanalyze.route('/check-product-health', checkProductHealth)
cuanalyze.route('/save-check', saveCheck)
cuanalyze.route('/history', historyApi)
cuanalyze.route('/recommendation', recommendation)

app.get('/', (c) => c.text('CUAN-ANALYZE API is running'))

app.route('/cuanalyze', cuanalyze)

export default app
