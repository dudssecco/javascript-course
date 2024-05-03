const numAleatorio = (min, max) => Math.floor(Math.random() * (max - min) + min)
const geraMaiuscula = () => String.fromCharCode(numAleatorio(65, 91))
const geraMinuscula = () => String.fromCharCode(numAleatorio(97, 123))
const geraNumero = () => String.fromCharCode(numAleatorio(48, 58))
const simbulos = ',.;:/?]}~^[{=+-_)(*&¨%$#@!|<>'
const geraSimbulo = () => simbulos[numAleatorio(0, simbulos.length)]

export default function geraSenha(qnt, maiusculas, minusculas, numeros, simbulos){
    const senhaArray = []
    qnt = Number(qnt)

    for(let i = 0; i < qnt; i++){
        maiusculas && senhaArray.push(geraMaiuscula())
        minusculas && senhaArray.push(geraMinuscula())
        numeros && senhaArray.push(geraNumero())
        simbulos && senhaArray.push(geraSimbulo())
    }

    return senhaArray.join('').slice(0, qnt)
}