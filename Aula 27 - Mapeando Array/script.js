// Dobre os números

const numeros = [5, 50, 80, 1, 2, 3, 5, 12, 15, 22, 36, 78]

const numerosDobro = numeros.map(valor => valor * 2)
console.log(numerosDobro)
    

// Retorne apenas uma string com o nome da pessoa:
// Remove apenas a chave nome do objeto:
// Adicione uma chave id em cada objeto:

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Eduardo', idade: 21},
    {nome: 'Leticia', idade: 20},
    {nome: 'Wallace', idade: 55},
    {nome: 'Mari', idade: 32},
    {nome: 'Bruna', idade: 77}
]

const pessoasString = pessoas.map(obj => obj.nome)
console.log(pessoasString)

const idades = pessoas.map(obj => ({idade: obj.idade}))
console.log(idades)

const id = pessoas.map((obj, indice) => {
    const newObj = {...obj}
    newObj.id = indice + 1
    return newObj
})
console.log(id)