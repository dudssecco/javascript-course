
const numero = Numer(prompt('Digite um número: '))
const numTitle = document.getElementById('title')
const text = document.getElementById('texto')

numTitle.innerHTML = numero

text.innerHTML = ` `
text.innerHTML += `<p>A Raiz Quadrada do de ${numero} é ${numero ** 0.5}.</p>`
text.innerHTML += `<p>É NaN? ${Number.isNaN(numero)}.</p>`
text.innerHTML += `<p>${numero} é inteiro? ${Number.isInteger(numero)}.</p>`
text.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}.</p>`
text.innerHTML += `<p>Arredondado para cima ${Math.ceil(numero)}.</p>`
text.innerHTML += `<p>Com duas casas decimais ${numero.toFixed(2)}.</p>`

