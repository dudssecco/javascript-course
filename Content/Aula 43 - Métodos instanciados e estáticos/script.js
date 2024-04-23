class ControleRemoto{
    constructor(tv){
        this.tv = tv
        this.volume = 0
    }

    // Métodos de Instancia
    aumentarVolume(){
        if(this.volume < 100) this.volume += 2
    }

    diminuirVolume(){
        if(this.volume > 0) this.volume -= 2 
    }

    // Métodos Staticos -> Executa para todos os controles remotos.
    // Não tem acesso aos dados da instancia.
    static trocarPilha(){
        console.log('Pilhas trocadas')
    }
}

const c1 = new ControleRemoto('LG')
console.log(c1)
ControleRemoto.trocarPilha()