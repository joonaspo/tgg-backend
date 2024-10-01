import app from './src/app.ts'
import { config } from './src/config/config.ts'
import { runAtInterval } from './src/jobs/fetchDataJob.ts'

const port = config.PORT
app.listen(port, async () => {
  console.log(`Running on port ${port}`)
  try {
    runAtInterval(10)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})
