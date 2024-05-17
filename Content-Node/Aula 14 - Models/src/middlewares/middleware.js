module.exports = (req, res, next) => {
    if(req.body.cliente){
        console.log(`Vi que você enviou '${req.body.cliente}'`)
    }
    next()
}