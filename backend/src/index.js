const { request } = require('express');
const express = require('express') //importando o express
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://Oliver:35269751@cluster0.t5lo2.mongodb.net/apifind?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.json())
app.use(routes)

app.listen(3333)