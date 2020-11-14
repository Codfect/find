const express = require('express') //importando o express

const app = express()

app.use(express.json())

app.post('/users', (request, response) => {
    console.log(request.body)

    return response.json({ messege: "Hello World!" })
})

app.listen(3333)