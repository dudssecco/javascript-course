function MeuEscopo(){

    const peso = document.querySelector('#idpeso');
    const altura = document.querySelector('#idaltura');
    const button = document.querySelector('.btn');
    const resultado = document.querySelector ('.res');

    
    function calcIMC(){

        let imc = peso.value / (altura.value * altura.value)
        
        if(imc < 18.5){
            resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} (Abaixo do peso)`
        } else if(imc >= 18.5 && imc <= 24.9){
            resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} (Peso normal)`
        } else if(imc >= 25 && imc <= 29.9){
            resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} (Sobrepeso)`
        } else if(imc >= 30 && imc <= 34.9){
            resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} (Obesidade de grau 1)`
        } else if(imc >= 35 && imc <= 39.9){
            resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} (Obesidade de grau 2)`
        } else{
            resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} (Obesidade de grau 3)`
        }


        resultado.style.display = 'flex'

    }

    button.addEventListener('click', calcIMC);

};

MeuEscopo();
