const paragrafo = document.querySelector('.paragrafo')
const ps = paragrafo.querySelectorAll('p')

const stylesBody = getComputedStyle(document.body)
const backgroundColorBody = stylesBody.backgroundColor

for (let p of ps){
    p.style.backgroundColor = backgroundColorBody
    p.style.color = 'white'
}