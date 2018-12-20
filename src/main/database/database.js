// Require mongoose module
const mongoose = require('mongoose')

// Require global configs
const config = require('config')

mongoose.Promise = global.Promise

module.exports = mongoose.connect(config.get('database.host'),{ useNewUrlParser: true })