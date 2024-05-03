const nome = prompt('Digite seu nome completo: ')

document.body.innerHTML += `<p>Seu nome é: <strong>${nome}</strong>. </p>  </br>`
document.body.innerHTML += `<p>Seu nome tem <strong>${nome.length}</strong> letras. </p>  </br>`
document.body.innerHTML += `<p>A segunda letra do seu nome é: <strong>${nome[1]}</strong>. </p>  </br>`
document.body.innerHTML += `<p>Qual o primeiro indice da letra "A" no seu nome? <strong>${nome.indexOf('a')}</strong>. </p>  </br>`
document.body.innerHTML += `<p>Qual o ultimo indice da letra "A" no seu nome? <strong>${nome.lastIndexOf('a')}</strong>. </p>  </br>`
document.body.innerHTML += `<p>As ultimas 3 letras do seu nome são: <strong>${nome.slice(-3, nome.length)}</strong>. </p>  </br>`
document.body.innerHTML += `<p>As palavras do seu nome são <strong>${nome.split(' ')}</strong>. </p>  </br>`
document.body.innerHTML += `<p>Seu nome com letras maiusculas: <strong>${nome.toUpperCase()}</strong>. </p>  </br>`
document.body.innerHTML += `<p>Seu nome com letras minusculas: <strong>${nome.toLowerCase()}</strong>. </p>  </br>`
