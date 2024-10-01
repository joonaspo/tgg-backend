import { fetchData } from '../services/apiClient'
import { setCache } from '../services/cacheService'
import { ObjectKeys } from '../types'

export const startJob = async () => {
  const data = await fetchData()
  const propertiesToCache = Object.values(ObjectKeys)
  await Promise.all(
    propertiesToCache.map(async (prop) => {
      await setCache(ObjectKeys[prop], data[prop])
    })
  )
}
