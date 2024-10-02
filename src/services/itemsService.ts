import client from '../config/redisConfig.js'
import { ChestRigObject, ItemObject, MapObject, ObjectKeys } from '../types.js'
import { randomIndexFromArray } from './helpers.js'

export const getRandomMap = async () => {
  try {
    const maps = await client.get('maps')

    if (maps) {
      const mapsArray = JSON.parse(maps) as MapObject[]
      const map = randomIndexFromArray(mapsArray) as MapObject
      return map
    }
  } catch (error) {
    throw new Error(`Error getting a random map: ${error}!`)
  }
}

export const getRandomChestrig = async () => {
  try {
    const chestRigs = await client.get('chestrigs')
    let chestRigsArray: ChestRigObject[] = []
    if (chestRigs) {
      chestRigsArray = JSON.parse(chestRigs)
    }
    const randomChestRig = randomIndexFromArray(
      chestRigsArray
    ) as ChestRigObject
    return randomChestRig
  } catch (error) {
    throw new Error(`Error getting a random chest rig: ${error}!`)
  }
}

export const getRandomStandardItem = async (key: ObjectKeys) => {
  try {
    const itemsData = await client.get(key)
    let itemsArray: ItemObject[] = []
    if (itemsData) {
      itemsArray = JSON.parse(itemsData)
    }
    const randomItem = randomIndexFromArray(itemsArray) as ItemObject
    return randomItem
  } catch (error) {
    throw new Error(`Error getting a random ${key}: ${error}!`)
  }
}

export const getUpdatedAtDate = async () => {
  try {
    const data = await client.get(ObjectKeys.updatedAt)
    return data
  } catch (error) {
    throw new Error(`Error getting updated at -date: ${error}!`)
  }
}
