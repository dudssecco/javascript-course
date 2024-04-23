function CriaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador
    }
}

const duplica = CriaMultiplicador(2)
const triplica = CriaMultiplicador(3)
const quadriplica = CriaMultiplicador(4)

console.log(
    duplica(2), 
    triplica(2), 
    quadriplica(2) 
)