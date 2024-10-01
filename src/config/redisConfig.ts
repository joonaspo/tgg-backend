import { Redis } from 'ioredis'
import { config } from './config'

const port = Number(config.REDIS_PORT)

const client = new Redis({
  host: process.env.REDIS_HOST || '127.0.0.1',
  port: port || 6379,
})

export default client
