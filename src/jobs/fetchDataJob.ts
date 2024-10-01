import client from '../config/redisConfig.ts'
import { fetchData } from '../services/apiClient.ts'
import { setCache } from '../services/cacheService.ts'
import { ObjectKeys } from '../types.ts'

const runJob = async () => {
  try {
    const data = await fetchData()
    const propertiesToCache = Object.values(ObjectKeys)

    await Promise.all(
      propertiesToCache.map(async (prop) => {
        try {
          await setCache(ObjectKeys[prop], data[prop])
          await client.set(ObjectKeys.updatedAt, data.updatedAt)
        } catch (cacheError) {
          console.error('Failed to set cache:', cacheError)
        }
      })
    )
  } catch (error) {
    console.error('Failed to fetch data or set cache:', error)
  }
}

export const runAtInterval = async (intervalMinutes: number) => {
  await runJob()

  setInterval(async () => {
    console.log('Starting scheduled job...')
    try {
      await runJob()
    } catch (error) {
      console.error('Error during scheduled job execution:', error)
    }
    console.log('Finished scheduled job...')
  }, intervalMinutes * 60 * 1000)
}
