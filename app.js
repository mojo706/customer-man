const express = require('express')
const http = require('http')

const setupApp = require('./src')

const app = express()

setupApp(app)

const server = http.createServer(app)

const port = process.env.PORT || 7777

server.listen(port, () => {
  console.log(`Server running on port ${port}`) // eslint-disable-line no-console
})

module.exports = server
