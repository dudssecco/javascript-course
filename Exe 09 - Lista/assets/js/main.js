const inputTarefa = document.querySelector('.input-add-tarefa')
const btnAddTarefa = document.querySelector('.btn-add-tarefa')
const listaTarefas = document.querySelector('.tarefas')

function criarButtonApagar(li){
    li.innerText += ' '
    const btnApagar = document.createElement('button')
    btnApagar.innerText = 'Apagar'
    li.appendChild(btnApagar)
}

function criaLi(){
    const li = document.createElement('li')
    return li
}

function criaTarefa(texto){
    const li = criaLi()
    li.innerText = texto
    listaTarefas.appendChild(li)
    limpaInput()
    criarButtonApagar(li)
}

function limpaInput(){
    inputTarefa.value = ''
    inputTarefa.focus()
}

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        criaTarefa(inputTarefa.value)
    }
})

btnAddTarefa.addEventListener('click', function(){
    if(inputTarefa.value === ''){
        return;
    } 
    criaTarefa(inputTarefa.value)
})