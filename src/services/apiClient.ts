import { GraphQLClient } from 'graphql-request'
import { GET_DATA } from './queries.ts'
import { config } from '../config/config.ts'
import { DataObject } from '../types.ts'
import {
  getValidStandard,
  getValidChestrigs,
  getValidHeadphones,
  getValidMaps,
  getValidSecondaries,
} from './helpers.ts'
import { format } from 'date-fns'

const endpoint = config.GRAPHQL_URL

const GQLClient = new GraphQLClient(endpoint as string)
export const fetchData = async () => {
  const data = await GQLClient.request<DataObject>(GET_DATA)
  const dataObject = {
    primaries: getValidStandard(data.primaries),
    secondaries: getValidSecondaries(data.secondaries),
    maps: getValidMaps(data.maps),
    bodyarmors: getValidStandard(data.bodyarmors),
    chestrigs: getValidChestrigs(data.chestrigs),
    headwear: getValidStandard(data.headwear),
    headphones: getValidHeadphones(data.headphones),
    updatedAt: format(new Date(), 'HH-mm-ss-dd-MM-yyyy'),
  }

  return dataObject
}
