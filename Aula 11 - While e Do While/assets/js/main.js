function random(min, max){
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

const max = 50
const min = 1
let rand = random(min, max)

while(rand !== 10){
    rand = random(min, max)
    console.log(rand)
}

console.log('##########')

let rand2 = 10

do{
    rand2 = random(min, max)
    console.log(rand2)
} while(rand2 !== 10)
