const { Router, request, response } = require('express') //importando apenas o modulo de roteamento do express { Router }

//Controllers
const PessoaController = require('./controllers/PessoaController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

//Rotas
routes.post('/pessoas', PessoaController.store) //cria
routes.get('/pessoas', PessoaController.index) //lista
routes.get('/search', SearchController.index) //busca

module.exports = routes