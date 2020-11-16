const mongoose = require('mongoose')

const PessoaSchema = new mongoose.Schema({
    name: String,
    email: String,
    interesses: [String],
    avatar_url: String,
    bio: String,
})

module.exports = mongoose.model('Pessoa', PessoaSchema) 