// Some todos os números do array: (Reduce)
// Reduce recebe (acumulador, valor, indice, array)

const numeros = [5, 50, 80, 1, 2, 3, 5, 12, 15, 22, 36, 78]

const soma = numeros.reduce((acumulador, valor) => acumulador + valor, 0)
console.log(soma)

    

// Retorne a pessoa mais velha:

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Eduardo', idade: 21},
    {nome: 'Leticia', idade: 20},
    {nome: 'Wallace', idade: 55},
    {nome: 'Mari', idade: 32},
    {nome: 'Bruna', idade: 77}
]

const pessoaVelha = pessoas.reduce(function(acumulador, obj){
    if(acumulador.idade > obj.idade) return acumulador
    return obj
})

console.log(pessoaVelha)