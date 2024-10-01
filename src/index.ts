import app from './app.ts'
import { config } from './config/config.ts'
import { runAtInterval } from './jobs/fetchDataJob.ts'

const port = config.PORT
app.listen(port, async () => {
  console.log(`Running on port ${port}`)
  try {
    runAtInterval(10)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})
