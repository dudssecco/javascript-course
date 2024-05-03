function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('Caneca', 100)
console.log(p1)
p1.desconto(10)
console.log(p1)
p1.aumento(10)
console.log(p1)

const p2 = {
    nome: 'Camiseta',
    preco: 50
};

Object.setPrototypeOf(p2, Produto.prototype)
p2.aumento(10)
console.log(p2)

const p3 = Object.create(Produto.prototype)
console.log(p3)
p3.nome = 'Copo'
p3.preco = 25
console.log(p3)
p3.aumento(100)
console.log(p3)

