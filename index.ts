import app from './src/app'
import { fetchData } from './src/services/apiClient'
import { config } from './src/config/config'
import { startJob } from './src/jobs/fetchDataJob'

const port = config.PORT
app.listen(port, async () => {
  console.log(`Running on port ${port}`)
  try {
    startJob()
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})
