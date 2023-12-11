// Utilizando Classes
class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar(){
        return console.log(`${this.nome} está falando.`)
    }
    
}

const p1 = new Pessoa('Leticia', 'Martins')
console.log(p1)


// Utilizando Função Construtora

function Pessoa2(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}

Pessoa2.prototype.falar = function(){
    return console.log(`${this.nome} está falando`)
}

const p2 = new Pessoa2('Eduardo', 'Secco')
console.log(p2)