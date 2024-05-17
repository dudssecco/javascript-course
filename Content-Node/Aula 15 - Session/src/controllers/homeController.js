const HomeModel = require('../models/HomeModel')

HomeModel.create({
    titulo: 'Titulo de teste',
    descricao: 'Descricao de teste'
})
.then(dados => console.log(dados))
.catch(err => console.log(err))

exports.carregaPaginaHome = (req, res) => {
    res.render('index.ejs')
    return
}

exports.recebeForm = (req, res) => {
    res.send(req.body)
}