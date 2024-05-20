const HomeModel = require('../models/HomeModel')

// HomeModel.create({
//     titulo: 'Titulo de teste',
//     descricao: 'Descricao de teste'
// })
// .then(dados => console.log(dados))
// .catch(err => console.log(err))

exports.carregaPaginaHome = (req, res) => {
    res.render('index.ejs', {
        titulo: 'Este será o título da página',
        numeros: [0,1,2,3,4,5,6,7,8,9]  
    })
    return
}

exports.recebeForm = (req, res) => {
    res.send(req.body)
}