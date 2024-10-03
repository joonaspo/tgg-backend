import { GET_DATA } from './queries.js'
import {
  getValidStandard,
  getValidChestrigs,
  getValidHeadphones,
  getValidMaps,
  getValidSecondaries,
} from './helpers.js'
import { config } from '../config/config.js'
import { DataObject } from '../types.js'

import { GraphQLClient } from 'graphql-request'

const endpoint = config.GRAPHQL_URL as string

const client = new GraphQLClient(endpoint)

export const fetchData = async () => {
  const date = new Date()
  const data = await client.request<DataObject>(GET_DATA)
  const dataObject = {
    primaries: getValidStandard(data.primaries),
    secondaries: getValidSecondaries(data.secondaries),
    maps: getValidMaps(data.maps),
    bodyarmors: getValidStandard(data.bodyarmors),
    chestrigs: getValidChestrigs(data.chestrigs),
    headwear: getValidStandard(data.headwear),
    headphones: getValidHeadphones(data.headphones),
    updatedAt: date.toString(),
  }

  return dataObject
}
