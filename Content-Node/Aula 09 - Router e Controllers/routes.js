const express = require('express')
const route = express.Router()

const homeController = require('./controllers/homeController')
const contatoController = require('./controllers/contatoController')


// Rotas da Home
route.get('/', homeController.enviarForm)
route.post('/', homeController.receberForm)

//Rotas de Contato
route.get('/contato', contatoController.enviarContato)


module.exports = route