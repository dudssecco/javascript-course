const path = require('path')
const axios = require('axios')

const mod = require('./mod')
console.log(mod.falaNome(mod.nome, mod.sobrenome))

const Pessoa = require('./mod').Pessoa
const p1 = new Pessoa('duds')
console.log(p1)