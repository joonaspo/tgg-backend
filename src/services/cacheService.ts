import client from '../config/redisConfig'
export const setCache = async (key: string, value: unknown) => {
  if (Array.isArray(value)) {
    await client.set(key, JSON.stringify(value))
  }
}
