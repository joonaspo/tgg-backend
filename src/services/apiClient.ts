import { GraphQLClient } from 'graphql-request'
import { GET_DATA } from './queries'
import { config } from '../config/config'
import { DataObject } from '../types'
import {
  getValidStandard,
  getValidChestrigs,
  getValidHeadphones,
  getValidMaps,
  getValidSecondaries,
} from './helpers'

const endpoint = config.GRAPHQL_URL

const client = new GraphQLClient(endpoint as string)
export const fetchData = async () => {
  const data = await client.request<DataObject>(GET_DATA)
  const dataObject = {
    primaries: getValidStandard(data.primaries),
    secondaries: getValidSecondaries(data.secondaries),
    maps: getValidMaps(data.maps),
    bodyarmors: getValidStandard(data.bodyarmors),
    chestrigs: getValidChestrigs(data.chestrigs),
    headwear: getValidStandard(data.headwear),
    headphones: getValidHeadphones(data.headphones),
  }

  return dataObject
}
