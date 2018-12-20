// Require module to HTTP requests
const axios = require('axios')

// Require Global Configs
const config = require('config')

// Require Epicom configs 
const epicomConfigs = config.get('epicom')

// Transform username and password in base64 token
const base64Login = Buffer.from(`${epicomConfigs.key}:${epicomConfigs.token}`).toString('base64')

// Add Auth token in headers
axios.defaults.headers.common['Authorization'] = `Basic ${base64Login}`

/**
 * Get a SKU by id
 * @param {Number} gistId 
 * @param {Number} commentId 
 */
const getSku = (productId, skuID) => {
    return axios.get(`${epicomConfigs.URL}/marketplace/produtos/${productId}/skus/${skuID}`)
}

module.exports = { getSku }