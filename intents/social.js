let { sendTextResponse } = require('../helpers')
let responses = require('../responses/social')

module.exports = {
    'saudacaoIntent': (WebhookRequest) => {

        return sendTextResponse(responses.saudacaoIntent)
    }
}