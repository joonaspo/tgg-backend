import { gql } from 'graphql-request'

export const GET_DATA = gql`
  query {
    primaries: items(
      categoryNames: [
        AssaultRifle
        AssaultCarbine
        Machinegun
        SMG
        Shotgun
        SniperRifle
        MarksmanRifle
      ]
      name: "Default"
    ) {
      name
      image512pxLink
      shortName
    }
    secondaries: items(categoryNames: [Handgun, Revolver], name: "Default") {
      name
      image512pxLink
      shortName
    }
    headwear: items(categoryNames: Headwear) {
      name
      image512pxLink
      blocksHeadphones
      shortName
    }
    bodyarmors: items(categoryNames: Armor, name: "Default") {
      name
      image512pxLink
      shortName
    }
    headphones: items(categoryNames: Headphones) {
      name
      image512pxLink
      shortName
    }
    chestrigs: items(categoryNames: ChestRig) {
      name
      image512pxLink
      shortName
    }
    maps {
      name
    }
  }
`
