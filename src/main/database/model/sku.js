const mongoose = require('mongoose')

/**
 * SKU Schema
 */
const skuSchema = new mongoose.Schema({
    // SKU name
    nome: String,
    // SKU reduced name
    nomeReduzido: String,
    // SKU ID
    id: { type: Number, required: true, index: true, unique: true},
    // SKU associated product
    produtoId: Number,
    // SKU Code
    codigo: String,
    // SKU model
    modelo: String,
    ean: String,
    // SKU URL
    url: String,
    // SKU out of line
    foraDeLinha: Boolean,
    // SKU price
    preco: Number,
    // SKU price discount
    precoDe: Number,
    // SKU availability
    disponivel: Boolean,
    // SKU stock units
    estoque: Number,
    // SKU dimensions
    dimensoes: {
        altura: Number,
        largura: Number,
        comprimento: Number,
        peso: Number
    },
    // SKU Images
    imagens: [{ type: String }],
    //SKU Groups
    grupos: [{ type: String }],
    // SKU Status
    ativo: Boolean
})

module.exports = mongoose.model('SKU', skuSchema)