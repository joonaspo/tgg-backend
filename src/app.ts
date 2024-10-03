import express from 'express'
import itemsRouter from './routes/items.js'
import 'express-async-errors'
import { runAtInterval } from './jobs/fetchDataJob.js'
import client from './config/redisConfig.js'
const app = express()
import cors from 'cors'
client.connect(() => console.log('Redis connected'))

try {
  runAtInterval(60)
} catch (error) {
  console.error('Error fetching data:', error)
}
app.use(cors())
app.use(express.json())
app.use('/api', itemsRouter)

export default app
