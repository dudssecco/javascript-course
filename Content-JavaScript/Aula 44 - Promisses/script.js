function numAleatorio(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error('Valor Invalido'))
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

esperaAi('Frase 1', numAleatorio(1, 5))
.then((resposta) => {
    console.log(resposta)
    return esperaAi('Frase 2', numAleatorio(1, 5))
}).then((resposta) => {
    console.log(resposta)
    return esperaAi('Frase 3', numAleatorio(1, 5))
}).then((resposta) => {
    console.log(resposta)
})
.catch((error) => {
    console.log(error)
   })


