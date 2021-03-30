import express from 'express'
import routes from './src/routes'

const app = express()
const PORT = process.env.PORT | 3000

routes(app)

app.listen(PORT, () => console.log(`app running on port ${PORT}`))
