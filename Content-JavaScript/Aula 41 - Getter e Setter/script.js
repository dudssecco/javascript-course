// Protegendo Variavel
const velocidade = Symbol('velocidade')

class Carro{
    constructor(nome){
        this.nome = nome
        this[velocidade] = 0
    }

    get velocidade(){
        return this[velocidade]
    }

    set velocidade(valor){
        if(typeof valor !== 'number') return
        if(valor >= 100 || valor <= 0) return
        this[velocidade] = valor
    }

    acelerar(){
        if(this[velocidade] < 99) this[velocidade]++
        return
    }

    freiar(){
        if(this[velocidade] > 0) this[velocidade]--
        return
    }
}

const c1 = new Carro('Citroen')

c1.velocidade = 2000
console.log(c1.velocidade)