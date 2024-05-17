require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const routes = require('./routes')
const meuMiddleware = require('./src/middlewares/middleware')
const session = require('express-session')
const mongoStore = require('connect-mongo')
const flash = require('connect-flash')



mongoose.connect(process.env.CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Conectado')
    app.emit('Pronto')
})
.catch(err => console.log(err))

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, 'public')))

const sessionOptions = session({
    secret: 'sagdf78fgh789qyh78hfe89puhjfdp9as8yshadf9fa', 
    store: MongoStore.create({ mongoUrl: process.env.CONNECTION }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(meuMiddleware)
app.use(routes)
app.use(sessionOptions)
app.use(flash)

app.on('Pronto', () =>{
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000')
        console.log('Servidor executando na porta: 3000')
    })
})

