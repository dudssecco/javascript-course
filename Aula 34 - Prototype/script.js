// Molde
function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome
}

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome
}

// Instancia
const pessoa1 = new Pessoa('Eduardo', 'Secco')
const pessoa2 = new Pessoa('Letiia', 'Martins')

console.dir(pessoa1)
console.dir(pessoa2.nomeCompleto())