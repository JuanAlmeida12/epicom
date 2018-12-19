const config = require('config')
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./middlewares/cors')

const PORT = config.get('server_port')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(PORT, function() {
    console.log(`Server running at port: ${PORT}`)
})

module.exports = server