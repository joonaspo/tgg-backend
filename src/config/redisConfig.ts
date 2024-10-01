import { Redis } from 'ioredis'
import { config } from './config.ts'

const port = Number(config.REDIS_PORT)
const host = config.REDIS_HOST
const client = new Redis({
  host: host || '127.0.0.1',
  port: port || 6379,
})

export default client
