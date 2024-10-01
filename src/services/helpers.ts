import { ChestRigObject, ItemObject, MapObject, RigTypes } from '../types.ts'

export const randomIndexFromArray = (
  array: MapObject[] | ItemObject[] | ChestRigObject[]
) => {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

export const getValidMaps = (maps: MapObject[]): MapObject[] => {
  const data = maps.filter((map) => {
    return map.name !== 'Night Factory' && map.name !== 'Ground Zero 21+'
  })
  return data
}

export const getValidStandard = (items: ItemObject[]): ItemObject[] => {
  const data = items.map((item) => {
    return {
      ...item,
      shortName: item.shortName.replace('Default', '').trim(),
      name: item.name.replace('Default', '').trim(),
    }
  })
  return data
}

export const getValidHeadphones = (hphones: ItemObject[]): ItemObject[] => {
  const validHphones = hphones.filter((hp) => !hp.name.includes('TW EXFIL'))
  const data = validHphones.map((hs) => {
    return {
      ...hs,
      shortName: hs.shortName.replace('Default', '').trim(),
      name: hs.name.replace('Default', '').trim(),
    }
  })
  return data
}

export const getValidChestrigs = (
  chestrigs: ItemObject[]
): ChestRigObject[] => {
  const filterRegularRigs = chestrigs.filter(
    (item) => !/plate carrier|armored rig/i.test(item.name)
  )
  const chestRigs = filterRegularRigs.map((rig) => {
    return {
      ...rig,
      shortName: rig.shortName.replace('Default', '').trim(),
      name: rig.name.replace('Default', '').trim(),
      type: RigTypes.chest,
    }
  })

  const filterArmoredRigs = chestrigs.filter((item) =>
    /plate carrier|armored rig/i.test(item.name)
  )

  const armoredRigs = filterArmoredRigs.map((rig) => {
    return {
      ...rig,
      shortName: rig.shortName.replace('Default', '').trim(),
      name: rig.name.replace('Default', '').trim(),
      type: RigTypes.armored,
    }
  })
  return [...chestRigs, ...armoredRigs]
}
export const getValidSecondaries = (items: ItemObject[]): ItemObject[] => {
  const filterSecondaries = items.filter(
    (item) => !/grenade launcher|shotgun/i.test(item.name)
  )
  const data = filterSecondaries.map((item) => {
    return {
      ...item,
      shortName: item.shortName.replace('Default', '').trim(),
      name: item.name.replace('Default', '').trim(),
    }
  })
  return data
}
