// Require Ramda lib
const ramda = require('ramda')

// Require SKU model 
const SKU = require('../database/model/sku')

// Require Epicom services
const Epicom = require('../services/epicom')

/**
 * Build Sku routes
 * @param {Router} router 
 */
const skuApi = router => {
    /**
     * GET SKUs
     */
    router.get('/sku', (req, res) => {
        const minPrice = req.query.minPrice || Number.MIN_VALUE
        const maxPrice = req.query.maxPrice  || Number.MAX_VALUE
        SKU.find({ $and: [{ preco: { $gte: minPrice } }, { preco: { $lte: maxPrice } }] }, (err, docs) => {
            handleResult(res, err, docs)
        })
    })

    /**
     * GET single SKU by id
     */
    router.get('/sku/:id', (req, res) => {
        const { id } = req.params

        SKU.find({ id }, (err, docs) => {
            handleResult(res, err, docs)
        })
    })

    /**
     * POST New SKU
     */
    router.post('/sku', (req, res) => {
        const { sku } = req.body

        const newSku = new SKU({ ...sku })

        newSku.save(err => {
            handleResult(res, err, newSku)
        })
    })

    /**
     * PUT Update a existing SKU
     */
    router.put('/sku/:id', (req, res) => {
        const { sku } = req.body
        const { id } = req.params

        SKU.updateOne({ id }, { ...sku }, (err, doc) => {
            handleResult(res, err, doc)
        })
    })

    /**
     * DELETE Existing SKU
     */
    router.delete('/sku/:id', (req, res) => {
        const { id } = req.params

        SKU.deleteOne({ id }, (err, doc) => {
            handleResult(res, err, doc)
        })
    })
    
    /**
     * Receive notifications
     */
    router.post('/sku/notification', (req, res) => {

        const callback = notification => {
            const { parametros: { idProduto, idSku }, tipo } = notification
            switch(tipo){
                case "criacao_sku":
                    Epicom.getSku(idProduto, idSku)
                    .then(response => {
                        const newSku = new SKU({ ...response.data })
                        newSku.save(err => {
                            if (err) console.log(err)
                        })
                    })
                    .catch(err => {
                        console.log(err)
                    })
                    break
            }
        }


        
        const { forEach } = ramda
        const notifications = req.body
        
        forEach(callback, notifications)

        res.status(200).send()
    })
}

/**
 * Handle the response
 * @param {Response} res 
 * @param {Error} err 
 * @param {object} docs 
 */
const handleResult = (res, err, docs) => {
    if(!!err) {
        return res.status(400).json(err.message)
    }

    return res.status(200).json(docs)
}

module.exports = skuApi