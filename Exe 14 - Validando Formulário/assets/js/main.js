class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }

    eventos(){
        this.formulario.addEventListener('submit', (e) => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const camposValidos = this.camposSaoValidos()
    }

    camposSaoValidos(){
        let valid = true
        for(let campos of this.formulario.querySelectorAll('.validar')){
            const label = campos.previousElementSibling.innerText
            if(!campos.value){
                this.criaErro(campos, `Preencha o campo "${label}"`)
                valid = false
            }
        }
    }

    criaErro(campos, msg){
        const div = document.createElement('div')
        div.classList.add('error-text')
        div.innerHTML = msg 
        campos.insertAdjacentElement('afterend', div)
    }
}

const valida = new ValidaFormulario()