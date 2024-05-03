class DispositivoEletronico{
    constructor(nome){
        this.nome = nome
        this.ligado = false
    }

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} já está ligado.`)
            return
        }
        this.ligado = true
        return
    }

    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} já está desligado.`)
            return
        }
        this.ligado = false
        return
    }
}

class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome)
        this.cor = cor
        this.modelo = modelo
    }
}

const s1 = new Smartphone('Iphone', 'Preto', 'X')
console.log(s1)