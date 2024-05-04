const multiplica = require('./mod')
console.log(multiplica(2, 4))

console.log(__filename)     //  Pasta Atual
console.log(__dirname)      //  Arquivo Atual

const path = require('path')
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'))