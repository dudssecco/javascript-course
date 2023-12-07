function Produto(nome, preco, estoque){
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true,    // Mostra a chave
        value: estoque,      // Valor da chave
        writable: false,     // Pode alterar o valor
        configurable: false  // Configuravel a propriedade
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true,   
            value: nome,     
            writable: true,     
            configurable: true 
        },
        preco: {
            enumerable: true,   
            value: preco,     
            writable: true,     
            configurable: true 
        },
    })
}

const p1 = new Produto('Camieta', 20, 3)
console.log(p1)
console.log(Object.keys(p1))