const Pessoa = require('../models/Pessoa')
const { index } = require('../models/utils/PointSchema')

//Métodos index, show, store, update, destroy

module.exports = {
    async index(request, response){
        const pessoas = await Pessoa.find() //filtro

        return response.json(pessoas)
    },

    async store(request, response) {
        //console.log(request.body)
        
        const { name, email, interesses, bio, longitude, latitude } = request.body
            //console.log(name, email, bio, interesses, latidude, longitude)

        let pessoas = await Pessoa.findOne({email})

        if (!pessoas) {
            
            const interessesArray = interesses.split(',').map(interesses => interesses.trim())
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }    
        
            pessoas = await Pessoa.create({
                //sort sintax
                name,
                email,
                bio,
                interesses: interessesArray,
                location
            })
        }

    
        return response.json(pessoas)
    }
}