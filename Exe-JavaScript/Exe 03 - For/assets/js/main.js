const elementos = [
    {tag: 'p', texto: 'Texto 1'},
    {tag: 'div', texto: 'Texto 2'},
    {tag: 'section', texto: 'Texto 3'},
    {tag: 'footer', texto: 'Texto 4'},
]

const container = document.querySelector('.container');
const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i]
    let tagHTML = document.createElement(tag)
    tagHTML.innerText = texto
    div.appendChild(tagHTML)
}

container.appendChild(div)
