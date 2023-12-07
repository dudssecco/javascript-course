function ValidaCPF(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '')
        }
    })

}

ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false
    if(this.cpfLimpo.length !== 11) return false
    if(this.isSequence()) return false

    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const primeiroDigito = this.criaDigito(cpfParcial)
    const segundoDigito = this.criaDigito(cpfParcial + primeiroDigito)
    const novoCpf = cpfParcial + primeiroDigito + segundoDigito

    return novoCpf === this.cpfLimpo
}

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial)
    let regressivo = cpfArray.length + 1
    const total =cpfArray.reduce((ac, valor) => {
        regressivo * valor
        ac += (regressivo * Number(valor))
        regressivo--
        return ac
    }, 0)

    const digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito)
}

ValidaCPF.prototype.isSequence = function() {
    const sequence = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequence === this.cpfLimpo
}

const cpf = new ValidaCPF('705.484.450-52')
console.log(cpf.valida())