function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome: nome,
        sobrenome: sobrenome,
        altura: altura,
        peso: peso,

        // Getter
        get imc() {
            const indice = (this.peso) / (this.altura * this.altura)
            return indice.toFixed(2)
        },

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ') // Separa o nome completo em arrays
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
        }
    }
}

const p1 = criaPessoa('Duds', 'Secco', 1.84, 60)
const p2 = criaPessoa('Lets', 'Martins', 1.64, 50)
const p3 = criaPessoa('Dog', 'Golden', 1.20, 40)

console.log(p1.imc)