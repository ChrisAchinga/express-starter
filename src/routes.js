const routes = (app) => {
  app.get('/', (req, res) => {
    res.send('Application Working')
  })
}

export default routes
