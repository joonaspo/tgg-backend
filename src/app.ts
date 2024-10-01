import express from 'express'
import itemsRouter from './routes/items.ts'
import 'express-async-errors'
const app = express()

app.use(express.json())
app.use('/api', itemsRouter)

export default app
