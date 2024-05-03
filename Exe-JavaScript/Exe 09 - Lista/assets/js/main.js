const inputTarefa = document.querySelector('.input-add-tarefa')
const btnAddTarefa = document.querySelector('.btn-add-tarefa')
const listaTarefas = document.querySelector('.tarefas')

function criarButtonApagar(li){
    li.innerText += ' '
    const btnApagar = document.createElement('button')
    btnApagar.innerText = 'Apagar'
    btnApagar.setAttribute('class', 'apagar')
    btnApagar.setAttribute('title', 'Apagar esta tarefa')
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
    salvarTarefa()
}

function limpaInput(){
    inputTarefa.value = ''
    inputTarefa.focus()
}

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13 && inputTarefa.value !== ''){
        criaTarefa(inputTarefa.value)
    }
})

btnAddTarefa.addEventListener('click', function(){
    if(inputTarefa.value === ''){
        return;
    } 
    criaTarefa(inputTarefa.value)
})

document.addEventListener('click', function(e){
    const el = e.target

    if(el.classList.contains('apagar')){
        el.parentElement.remove()
        salvarTarefa()
    }

})

function salvarTarefa(){
    const liTarefas = listaTarefas.querySelectorAll('li')
    const listaTarefaTexto = []

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        listaTarefaTexto.push(tarefaTexto)
    }

    const tarefasJSON = JSON.stringify(listaTarefaTexto)
    localStorage.setItem('tarefas', tarefasJSON)
}

function addTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas')
    const listaTarefaTexto = JSON.parse(tarefas)

    for(let tarefa of listaTarefaTexto){
        criaTarefa(tarefa)
    }
}

addTarefasSalvas()