// Função construtora sempre se começa com Letra Maiuscula

function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenomee = sobrenome

    this.metodo = () => {
        console.log('Sou um método')
    }
}

const p1 = new Pessoa('Duds', 'Secco')
const p2 = new Pessoa('Lets', 'Martins')

console.log(p1)
p1.metodo()