function MeuEscopo(){

    const data = new Date()

    console.log('Dia', data.getDate())
    console.log('Mês', data.getMonth())
    console.log('Ano', data.getFullYear())
    console.log('Hora', data.getHours())
    console.log('Min', data.getMinutes())
    console.log('Seg', data.getSeconds())
    console.log('MiliSecond', data.getMilliseconds())
    console.log('Dia Semana', data.getDay())
    console.log(data.toString())
    
    
};

MeuEscopo();