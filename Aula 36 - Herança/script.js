// Produto -> aumento e desconto
// Camiseta -> Cor / Caneca -> Material

function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = (valor) => this.preco += valor
Produto.prototype.desconto = (valor)=> this.preco -= valor

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco)
    this.cor = cor
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco)
    this.material = material

    Object.defineProperties(this, {
        estoque: {
            enumerable: true,
            configurable: false,
            get: () => {
                return estoque
            },
            set: (valor) => {
                if(typeof valor !== 'number'){
                    throw new TypeError('Valor Inválido')
                }
                estoque = valor
            }
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca


const camiseta = new Camiseta('Camisa Regata', 10, 'Vermelha')
const caneca = new Caneca('Caneca', 40, 'Vidro')

caneca.estoque = 100

console.log(camiseta)
console.log(caneca)
    
