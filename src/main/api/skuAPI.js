const SKU = require('../database/model/sku')

const skuApi = router => {
    router.get('/sku', (req, res) => {
        const minPrice = req.query.minPrice || Number.MIN_VALUE
        const maxPrice = req.query.minPrice  || Number.MAX_VALUE
        SKU.find({ $and: [{ price: { $gte: minPrice } }, { price: { $lte: maxPrice } }] }, (err, docs) => {
            if(!!err) {
                return res.status(err.status).json(err.message)
            }

            return res.status(200).json(docs)
        })
    })

    router.get('/sku/:id', (req, res) => {
        const idSku = req.params.id

        SKU.find({ idSku }, (err, docs) => {
            if(!!err) {
                return res.status(err.status).json(err.message)
            }

            return res.status(200).json(docs)
        })
    })
}