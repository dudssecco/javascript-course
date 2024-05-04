const nome = 'duds'
const sobrenome = 'secco'
const falaNome = (nome, sobrenome) => {
    return nome + " " + sobrenome
}

class Pessoa{
    constructor(nome){
        this.nome = nome
    }
}

exports.nome = nome
exports.sobrenome = sobrenome
exports.falaNome = falaNome
exports.Pessoa = Pessoa
