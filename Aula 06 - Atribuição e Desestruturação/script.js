function MeuEscopo(){

    const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
    const [primeiroNum, segundoNum, ...resto] = numeros;
    console.log(primeiroNum, segundoNum);
    console.log(resto);

}

function MeuEscopo2(){

//                        0         1         2
//                     0  1  2   0  1  2   0  1  2
    const numeros2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const [lista1, lista2, lista3] = numeros2;
    console.log(lista3[2]);

}

MeuEscopo();
MeuEscopo2();
