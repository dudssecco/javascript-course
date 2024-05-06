const express = require('express')
const app = express()

// http://facebook.com/profiles/(url-parametro)?(query-strings)&(query-strings)

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send(
        `<form action ="/" method = "POST">
        Nome: <input type="text" name="nome">
        <button>Enviar Form</button>
        </form>`
    )
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`O que você me enviou foi ${req.body.nome}.`)
})

app.get('/testes/:idUsuario?', (req, res) => {  //? Faz o parametro ser opcional
    console.log(req.params)
    console.log(req.query)
    res.send(req.params.idUsuario)
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta: 3000')
})