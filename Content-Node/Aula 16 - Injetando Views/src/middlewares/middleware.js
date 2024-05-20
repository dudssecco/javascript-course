module.exports = (req, res, next) => {
    res.locals.varLocal = 'Este é o valor da variavel local'
    next()
}