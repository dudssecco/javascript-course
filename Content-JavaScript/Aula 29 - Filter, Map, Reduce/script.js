// Retorne a soma do dobro de todos os pares
// Filter -> Pares
// Map -> Dobrar valores
// Reduce -> Somar tudo

const numeros = [5, 50, 80, 1, 2, 3, 5, 12, 15, 22, 36, 78]

const somaDobroPares = numeros.filter(obj => {
    return obj % 2 === 0
}).map(obj => {
    return obj * 2
}).reduce((ac, obj) => {
    return ac + obj
}, 0)


console.log(somaDobroPares)
