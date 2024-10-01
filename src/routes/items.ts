import express from 'express'
import {
  getRandomChestrig,
  getRandomMap,
  getRandomWeapon,
} from '../services/itemsService'
import { ObjectKeys } from '../types'
const itemsRouter = express.Router()

itemsRouter.get('/getRandomItems', async (req, res) => {
  try {
    const data = await getRandomMap()
    await getRandomChestrig()
    await getRandomWeapon(ObjectKeys.primaries)
    await getRandomWeapon(ObjectKeys.secondaries)
    console.log(data)
    res.status(200).json({ data: data })
  } catch (error) {}
})

export default itemsRouter
