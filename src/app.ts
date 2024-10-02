import express from 'express'
import itemsRouter from './routes/items.js'
import 'express-async-errors'
import { runAtInterval } from './jobs/fetchDataJob.js'
const app = express()

try {
  runAtInterval(60)
} catch (error) {
  console.error('Error fetching data:', error)
}

app.use(express.json())
app.use('/api', itemsRouter)

export default app
