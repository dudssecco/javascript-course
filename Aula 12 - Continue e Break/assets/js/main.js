const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]

for (let numero of numbers){

    if (numero === 5){
        console.log('Pulado')
        continue;
    }

    if (numero === 8){
        break
    }

    console.log(numero)
}