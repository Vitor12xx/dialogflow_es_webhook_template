let router = require('express').Router()
let intents = require('../intents')

router.post('/', async (req, res) => {
    let intentName = req.body.queryResult.intent.displayName

    let response = intents[intentName](req.body)
    
    if(response != undefined) {
        res.status(200).json(response)
    } else {
        res.status(400).json({
            fullfillment_text: "Erro no servidor Webhook."
        })
    }
})

router.get('/', (req, res) => {

    res.status(200).json({status: 'OK', message: "Tudo bem por aqui, servidor no ar!."})
})

module.exports = router
