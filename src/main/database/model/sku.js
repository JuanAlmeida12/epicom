const mongoose = require('mongoose')

const skuSchema = new mongoose.Schema({
    idSku: Number,
    price: Number,
    currency: String,
    units: Number
})

module.exports = mongoose.model('SKU', skuSchema)