const express = require('express')

module.exports = (server) => {

    // API Routes
    const router = express.Router()
    server.use('/api/v1', router)

    // SKU Routes
    require('./api/skuAPI')(router)
    
}