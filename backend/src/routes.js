const { Router, request, response } = require('express') //importando apenas o modulo de roteamento do express { Router }

//Controllers
const PessoaController = require('./controllers/PessoaController')

const routes = Router()

routes.post('/pessoas', PessoaController.store)
routes.get('/pessoas', PessoaController.index)
module.exports = routes