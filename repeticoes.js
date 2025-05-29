//repetição WHILE
//faz o teste primeiro e depois incrementa, enquanto for verdadeira executa, quando for falso, para
console.log('Repetição WHILE')

let voltasAteFicarCansado = 5
let quantidadeVoltasAtual = 0

while (quantidadeVoltasAtual < voltasAteFicarCansado) {
    console.log('Dar uma volta na quadra')

    quantidadeVoltasAtual++
}


//repetição FOR
//contador; condição; manipulação do contador (incremento/decremento)
console.log('------------------------------------')
console.log('Repetição FOR')

const quantidadeCalculada = 3
for (let quantidadeDePetiscos = 1; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++) {
console.log('Dando o petisco de nº ', quantidadeDePetiscos)
}
console.log()
const gatos = ['Lessie', 'Pony', 'Fumaca']
for (let indice = 0; indice < gatos.length; indice++) {
console.log(`Dando o petisco para ${gatos[indice]}`)
}


//repetição FOR EACH
//paraCada - vai percorrer cada item da lista 
console.log('------------------------------------')
console.log('Repetição FOR EACH')

const listaDeAlunos = [
    'Matheus',
    'Renata',
    'Leandro',
    'Ana',
    'Lucas'
]

listaDeAlunos.forEach(aluno => {
    console.log(aluno)
})

console.log()

const listaDeAlunosENotas = [
    {
        nome: 'Matheus',
        nota: 2
    },
    {
        nome: 'Renata',
        nota: 8
    },  
    {
        nome: 'Leandro',
        nota: 6.9
    },  
    {
        nome: 'Ana',
        nota: 7
    },
    {
        nome: 'Lucas',
        nota: 9
    }
]

listaDeAlunosENotas.push({
    nome: 'Beatriz',
    nota: 10
})

listaDeAlunosENotas.forEach(aluno => {
    if(aluno.nota < 7) {
        console.log(`O aluno ${aluno.nome} precisa de trabalho extra`)
    }
    console.log(`O aluno(a) ${aluno.nome} tem a nota ${aluno.nota}`)
})