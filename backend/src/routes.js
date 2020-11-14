const { Router, request, response } = require('express') //importando apenas o modulo de roteamento do express { Router }

const routes = Router()

routes.post('/users', (request, response) => {
    console.log(request.body)
    return response.json({ message: 'Hello World' })
})

module.exports = routes