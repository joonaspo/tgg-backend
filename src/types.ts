export interface MapObject {
  name: string
}

export interface ItemObject {
  name: string
  image512pxLink: string //^https:\/\/assets\.tarkov\.dev\/[a-f0-9]{24}-\d+\.webp$
  shortName: string
  blocksHeadphones?: boolean
}

export enum RigTypes {
  armored = 'Armored',
  chest = 'Chest',
}

export enum ObjectKeys {
  primaries = 'primaries',
  secondaries = 'secondaries',
  headwear = 'headwear',
  bodyarmors = 'bodyarmors',
  headphones = 'headphones',
  chestrigs = 'chestrigs',
  maps = 'maps',
}

export interface DataObject {
  primaries: ItemObject[]
  secondaries: ItemObject[]
  headwear: ItemObject[]
  headphones: ItemObject[]
  bodyarmors: ItemObject[]
  chestrigs: ItemObject[]
  maps: MapObject[]
}

export interface ChestRigObject extends ItemObject {
  type: RigTypes
}
