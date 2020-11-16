const { Router, request, response } = require('express') //importando apenas o modulo de roteamento do express { Router }
const Pessoa = require('./models/Pessoa')

const routes = Router()

routes.post('/pessoas', async (request, response) => {
    //console.log(request.body)


    const { name, email, interesses, bio } = request.body
    console.log(name, email, bio, interesses)

    const interessesArray = interesses.split(',').map(interesses => interesses.trim())

    const pessoas = await Pessoa.create({
        //sort sintax
        name,
        email,
        bio,
        interesses: interessesArray,
    })

    return response.json(pessoas)
})

module.exports = routes