exports.carregaPaginaHome = (req, res) => {
    res.render('index.ejs')
    return
}

exports.recebeForm = (req, res) => {
    res.send(req.body)
}