import client from '../config/redisConfig.js'

export const setCache = async (key: string, value: unknown) => {
  try {
    if (Array.isArray(value)) {
      await client.set(key, JSON.stringify(value))
      console.log('Cached data for key:', key)
    }
  } catch (error) {
    console.error('Error caching data', error)
  }
}
