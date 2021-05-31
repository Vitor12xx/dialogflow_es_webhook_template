module.exports = {
    sendTextResponse(response) {

        let textResponses = response.text.map(elem => {
            return {
                text: {
                    text: [
                        elem
                    ]
                }
            }
        })

        return {
            fulfillment_messages: [
               ...textResponses 
            ]
        }
    }

}
