const Pessoa = require('../models/Pessoa')

module.exports = {
    async index(request, response){

        const {latitude, longitude, interesses} = request.query

        const interessesArray = interesses.split(',').map(interesses => interesses.trim())

        const pessoas = await Pessoa.find({
            interesses: {
                $in: interessesArray, //$in, $near = mongo operators
            },                        //https://docs.mongodb.com/manual/reference/operator/
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000,
                },
            },
        })

        
        return response.json({ pessoas })
    }
}