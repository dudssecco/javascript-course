const produto = {
    nome: 'Camiseta',
    preco: 2
}

// Realizar a copia de um Objeto
const copia = {
    ...produto
} 

copia.nome = 'Copo'
console.log(copia)


const copia2 = Object.assign({}, produto)
console.log(copia2)

// Ver as propriedades do objeto > chave
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')) 

// Retorna as chaves do objeto
console.log(Object.keys(produto))

// Retorna os valores do objeto
console.log(Object.values(produto))

// Retorna as chaves e os valores do objeto
console.log(Object.entries(produto))
