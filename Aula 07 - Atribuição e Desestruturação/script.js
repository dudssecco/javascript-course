function MeuEscopo(){

    const pessoa = {
        nome: 'Luiz',
        sobrenome: 'Mirando',
        idade: 30,
        endereco: {
            rua: 'Av Brasil',
            numero: 14
        }
    };

    const {nome, ...resto} = pessoa
    console.log(nome, resto);

}

MeuEscopo();
