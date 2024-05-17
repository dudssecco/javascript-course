require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const routes = require('./routes')
const meuMiddleware = require('./src/middlewares/middleware')


mongoose.connect(process.env.CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Conectado')
    app.emit('Pronto')
})
.catch(err => console.log(err))

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(meuMiddleware)
app.use(routes)

app.on('Pronto', () =>{
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000')
        console.log('Servidor executando na porta: 3000')
    })
})

