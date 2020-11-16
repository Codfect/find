const mongoose = require('mongoose')
const PointSchema = require('./utils/PointSchema')

const PessoaSchema = new mongoose.Schema({
    name: String,
    email: String,
    interesses: [String],
    //avatar_url: String,
    bio: String,
    location: {
        type: PointSchema,
        index: '2dsphere' //eixo X e Y
    }
})

module.exports = mongoose.model('Pessoa', PessoaSchema) 