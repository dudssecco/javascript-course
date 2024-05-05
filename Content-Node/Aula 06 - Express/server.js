const express = require('express')
const app = express()

/*
        Criar   Ler   Atualizar  Apagar
CRUD -> CREATE, READ, UPDATE,    DELETE
        POST    GET   PUT        DELETE
*/

/*
http://meusite.com/ -> GET -> Entregue a página '/'
http://meusite.com/sobre -> GET -> Entregue a página '/sobre'
http://meusite.com/contato -> GET -> Entregue a página '/contato'
*/

// Geralmente utilizamos portas não utilizadas como: 3000
// Iniciar no terminar: node (nome do arquivo) => node server.js

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato!')
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta: 3000')
})