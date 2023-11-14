const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTexto(diaSemana){

    let diaSemanaTexto

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo'
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-Feira'
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-Feira'
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-Feira'
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-Feira'
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-Feira'
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado'
            return diaSemanaTexto;
        
        default:
            diaSemanaTexto = ''
            break;
    }

}

function getMesTexto(numeroMes){

    let nomeMes

    switch (numeroMes) {
        case 0:
            nomeMes = 'Janeiro'
            return nomeMes;
        case 1:
            nomeMes = 'Fevereiro'
            return nomeMes;
        case 2:
            nomeMes = 'Março'
            return nomeMes;
        case 3:
            nomeMes = 'Abril'
            return nomeMes;
        case 4:
            nomeMes = 'Maio'
            return nomeMes;
        case 5:
            nomeMes = 'Junho'
            return nomeMes;
        case 6:
            nomeMes = 'Julho'
            return nomeMes;
        case 7:
            nomeMes = 'Agosto'
            return nomeMes;
        case 8:
            nomeMes = 'Setembro'
            return nomeMes;
        case 9:
            nomeMes = 'Outubro'
            return nomeMes;
        case 10:
            nomeMes = 'Novembro'
            return nomeMes;
        case 11:
            nomeMes = 'Dezembro'
            return nomeMes;

        default:
            nomeMes = ''
            break;
    }

}

function Zero(num){

    return num >= 10 ? num : `0${num}`

}

function CriaData(data){

    const diaSemana = data.getDay()
    const numeroMes = data.getMonth()

    const nomeDia = getDiaSemanaTexto(diaSemana)
    const nomeMes = getMesTexto(numeroMes)

    return `${nomeDia}, ${data.getDay()} de ${nomeMes} de ${data.getFullYear()} 
    ${Zero(data.getHours())}:${Zero(data.getMinutes())}`
}

h1.innerHTML = CriaData(data)
