function numAleatorio(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string'){
            reject(false)
            return
        }

        setTimeout(() => {
            resolve(msg)
            return
        }, tempo)
    })
}

const promisses = [
    'Primeiro Valor',
    esperaAi('Promisse 1', 3000),
    esperaAi('Promisse 2', 500),
    esperaAi('Promisse 3', 1000),
    'Outro Valor'
]

// Promise.all -> Retorna todos os valores em ordem
// Promise.race -> Retorna o primeiro valor a terminar
// Promise.resolve -> Retorna a promisse resolvida (.then())
// Promise.reject -> Retorna a promisse rejeitada (.catch())

Promise.all(promisses)
.then((valor) => {
    console.log(valor)
})
.catch((erro) => {
    console.log(erro)
})