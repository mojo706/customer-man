const bodyParser = require('body-parser')
const customerRouter = require('./customerRouter')()

module.exports = app => {
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  app.use('/api/customers', customerRouter)
}
