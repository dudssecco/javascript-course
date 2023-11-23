function criaCalculadora(){
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia() {
            this.cliqueBotoes();
            this.pressEnter();
        },

        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.apagarUm()
                }

                if(el.classList.contains('btn-ep')) {
                    this.realizaConta()
                }

            });
        },

        pressEnter(){
            this.display.addEventListener('keypress', (e) => {
                if(e.keyCode === 13){
                    this.realizaConta()
                }
            })
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        clearDisplay(){
            this.display.value = ''
        },

        apagarUm(){
            this.display.value = this.display.value.slice(0, -1)
        },

        realizaConta(){
            let conta = this.display.value
            try{
                conta = eval(conta)

                if(!conta){
                    alert('Conta Inválida')
                    return
                }

                this.display.value = conta
            } catch (e){
                alert('Conta Inválida')
                return
            }
        }

    };
}

const calculadora = criaCalculadora()
calculadora.inicia()