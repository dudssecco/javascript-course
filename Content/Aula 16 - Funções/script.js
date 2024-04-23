// Declaração de Função
function DigaOi(){
    console.log('Oi')
}

DigaOi()

// Function Expression
const souUmDado = function(){
    console.log('Sou uma função')
}

souUmDado()

// Arrow Function
const arrowFunction = () => {
    console.log('Sou uma arrow function')
}

arrowFunction()

// Dentro de um objeto
const obj = {
    falar: function(){
        console.log('Estou falando')
    },
    ouvir(){
        console.log('Estou ouvindo')
    }
}

obj.falar()
obj.ouvir()