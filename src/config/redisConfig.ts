import { Redis } from 'ioredis'
import { config } from './config.js'

const port = Number(config.REDIS_PORT)

const client = new Redis({
  username: config.REDIS_USER,
  host: config.REDIS_HOST || '127.0.0.1',
  password: config.REDIS_PASSWORD,
  port: port || 6379,
  tls: { rejectUnauthorized: true },
})



export default client
