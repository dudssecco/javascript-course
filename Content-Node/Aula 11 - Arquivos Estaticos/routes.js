const express = require('express')
const route = express.Router()

const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')


// Rotas da Home
route.get('/', homeController.enviarForm)
route.post('/', homeController.receberForm)

//Rotas de Contato
route.get('/contato', contatoController.enviarContato)


module.exports = route