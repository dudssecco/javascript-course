exports.enviarForm = (req, res) => {
    res.render('index.ejs')
}

exports.receberForm = (req, res) => {
    res.send('Formulário Enviado com Sucesso!')
}