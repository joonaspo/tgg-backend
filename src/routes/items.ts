import express from 'express'
import {
  getRandomChestrig,
  getRandomMap,
  getRandomStandardItem,
  getUpdatedAtDate,
} from '../services/itemsService.ts'
import { ItemObject, ObjectKeys, RigTypes } from '../types.ts'
const itemsRouter = express.Router()

itemsRouter.get('/getRandomItems', async (_req, res) => {
  try {
    // Randomizes a map
    const map = await getRandomMap()

    // Randomizes a chest rig and if condition is true also a body armor
    const chestRig = await getRandomChestrig()
    let bodyArmor: ItemObject | null = null
    if (chestRig.type === RigTypes.chest) {
      bodyArmor = await getRandomStandardItem(ObjectKeys.bodyarmors)
    }

    // Randomizes headwear and if condition is false also a headset
    const headwear = await getRandomStandardItem(ObjectKeys.headwear)
    let headphones: ItemObject | null = null
    if (headwear.blocksHeadphones === false) {
      headphones = await getRandomStandardItem(ObjectKeys.headphones)
    }
    // Randomizes both weapons
    const primary = await getRandomStandardItem(ObjectKeys.primaries)
    const secondary = await getRandomStandardItem(ObjectKeys.secondaries)

    const updatedAt = await getUpdatedAtDate()

    const data = {
      map,
      chestRig,
      primary,
      secondary,
      bodyArmor,
      headphones,
      headwear,
      updatedAt,
    }
    res.status(200).json({ data: data })
  } catch (error) {
    res.status(500).json({ error: error })
  }
})

export default itemsRouter
