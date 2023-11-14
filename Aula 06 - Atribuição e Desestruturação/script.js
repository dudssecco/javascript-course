function MeuEscopo(){

    const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
    const [primeiroNum, segundoNum, ...resto] = numeros;
    console.log(primeiroNum, segundoNum);
    console.log(resto);

}

MeuEscopo();
