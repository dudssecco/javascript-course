const nome = 'Duds'
const obg = { nome }
const novoObj = { ...obg }
console.log(novoObj)

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }
}