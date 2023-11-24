const nomes = ['Maria', 'João', 'Duds', 'Lets', 'Wallace']

// nomes.splice(indice, delete, (elementos para adicionar separados por virgula))
// Number.MAX_VALUE = maior número da linguagem de programação

// push - add no final do array
nomes.splice(nomes.length, 0, 'Luiz')

// pop - remove no final do array
nomes.splice(-1, 1)

// unshift - add no inicio do array
nomes.splice(0, 0, 'Guilherme')

// shift - remove no inicio do array
nomes.splice(0, 1)

// add aos removidos o q foi deletado
const removidos = nomes.splice(0, 0)

console.log(nomes, removidos)
console.log(Number.MAX_VALUE)