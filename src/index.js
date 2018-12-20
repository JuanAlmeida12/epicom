const server = require('./main/server')
require('./main/database/database')
require('./main/router')(server)