/* Filter -> Sempre irá retornar um Array com a mesma quantidade de elementos ou menos. */

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

/*
function callbackFilter(valor, indice, array){
    if(valor > 10){
        return true
    } else {
        return false
    }
}

function callbackFilter(valor, indice, array){
    return valor > 10;
}
*/

const numerosFiltrados = numeros.filter(valor => valor > 10)
console.log(numerosFiltrados)

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// Retorne as pessoas q tem 5 letras no nome ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com 'a'
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Eduardo', idade: 21},
    {nome: 'Leticia', idade: 20},
    {nome: 'Wallace', idade: 55},
    {nome: 'Mari', idade: 32},
    {nome: 'Bruna', idade: 77}
]

const pessoasFiltroNome = pessoas.filter(obj => obj.nome.length >= 5)
console.log(pessoasFiltroNome)

const pessoasFiltroIdade = pessoas.filter(obj => obj.idade > 50)
console.log(pessoasFiltroIdade)

const pessoasFiltroTerminaNome = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))
console.log(pessoasFiltroTerminaNome)