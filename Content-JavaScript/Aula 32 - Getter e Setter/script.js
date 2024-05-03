function Produto(nome, preco, estoque){
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true,    // Mostra a chave
        configurable: false, // Configuravel a propriedade
        get: function() {
            return estoque
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('Valor Inválido')
            }
            estoque = valor
        }
    })

}

const p1 = new Produto('Camieta', 20, 3)
console.log(p1)
p1.estoque = 500
console.log(p1.estoque)