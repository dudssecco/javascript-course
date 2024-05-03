const pessoas = [
    {id: 1, nome: 'Leticia'},
    {id: 2, nome: 'Maria'},
    {id: 3, nome: 'Helena'},
]

/*
const novasPessoas = {};
for (const p of pessoas){
    const {id} = p
    novasPessoas[id] = {...p}
}
*/

const novasPessoas = new Map();
for (const p of pessoas){
    const {id} = p
    novasPessoas.set(id, {...p})
}

console.log(novasPessoas.get(2))