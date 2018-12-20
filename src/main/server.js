// Require Global configs
const config = require('config')

// Require Body Parser module
const bodyParser = require('body-parser')

// Require Express module
const express = require('express')

// Server instance
const server = express()

// Cors Rules
const allowCors = require('./middlewares/cors')

// Server Port
const PORT = config.get('server_port')

// Server Configs
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(PORT, function() {
    console.log(`Server running at port: ${PORT}`)
})

module.exports = server