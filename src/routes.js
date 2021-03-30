import path from 'path'
import express from 'express'
const app = express()


const routes = (app) => {
  app.use(express.static(path.join(__dirname, 'public')))
  app.get('/api', (req, res) => {
    res.send('Application Working')
  })
}

export default routes
