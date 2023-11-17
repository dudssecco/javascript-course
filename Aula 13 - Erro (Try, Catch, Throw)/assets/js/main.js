
function Soma(x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('Os valores precisam ser números.')
    }
    return x + y
}

try{
    console.log(Soma(1, 2))
    console.log(Soma('1', 2))
} catch(err){
    console.log('Alguma coisa mais amigavel para o usuário')
}