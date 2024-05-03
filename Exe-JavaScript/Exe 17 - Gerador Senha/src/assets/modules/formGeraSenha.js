import geraSenha from "./geradores.js"

const senhaGerada = document.querySelector('.senha-gerada')
const qntCaracteres = document.querySelector('.qnt-caracteres')
const chkMaiusculas = document.querySelector('.chk-maiusculas')
const chkMinusculas = document.querySelector('.chk-minusculas')
const chkNumeros = document.querySelector('.chk-numeros')
const chkSimbulos = document.querySelector('.chk-simbulos')
const button = document.querySelector('.gerar-senha')

export default () => {
    button.addEventListener('click', () => {
        senhaGerada.innerHTML = gera()
    })
}

function gera() {
    const senha = geraSenha(
        qntCaracteres.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbulos.checked
    )
    
    return senha || "Nada Selecionado."
}