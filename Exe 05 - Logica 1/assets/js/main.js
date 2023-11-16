function Maior(num1, num2){

    if(num1 !== num2){
    let result = num1 > num2 ? num1 : num2
    console.log(result)
    } else{
        console.log('Números iguais.')
    }
}

Maior(101, 101);