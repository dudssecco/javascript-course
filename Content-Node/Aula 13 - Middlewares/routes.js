const express = require('express')
const route = express.Router()

const homeController = require('./src/controllers/homeController')


// Rotas da Home
route.get('/', homeController.carregaPaginaHome)
route.post('/', homeController.recebeForm)

module.exports = route