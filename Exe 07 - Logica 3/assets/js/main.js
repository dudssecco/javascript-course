const verificarDiv = (num) => {

    if(num > 0 && num <= 100){

        const verificarNaN = isNaN(num) ? console.log('Não é um número') : console.log(num)
        
        if(num % 3 === 0 && num % 5 === 0){
            console.log('FizzBuzz')
        } else if(num % 5 === 0){
            console.log('Buzz')
        } else if(num % 3 === 0){
            console.log('Fizz')
        } else {
            console.log(num)
        }
    }
}

verificarDiv(60)