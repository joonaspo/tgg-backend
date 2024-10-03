# **Random Raid Generator - Backend**

![](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)![](https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white)![](https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white)![Expess.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)![REST API](https://img.shields.io/badge/REST%20API-blue?style=for-the-badge&logo=rest)

## About

This is a simple GraphQL API to Redis to REST API backend.

For the frontend, see https://github.com/joonaspo/tarkov-gear-generator.

### How it works

The data required is fetched from a GraphQL API at set intervals of 60 minutes and saved into a Redis database. Because the actual **game** has set limitations to what items can be worn together, the app's randomization logic prioritizes for example a headwear over headphones.

In practice this means a headwear item is randomized first, and depending on that items blocksHeadphones: boolean property, random headphones are randomized, or not.
The same logic is applied to a chest rig with its type: "Chest" | "Armored" property. As with headwear, with certain chest rigs, no separate body armor can be worn.

Redis stack is also hosted on Render, just like the backend and the frontend.
