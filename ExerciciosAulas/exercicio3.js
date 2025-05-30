const nome = 'Loki'
const porte = 'pequeno' 
const idadeDog = 0
const adocao = idadeDog <= 3 && porte != 'pequeno'
              ? 'Não pode adotar!'
              : 'Pode adotar!'
             


console.log('Nome: ', nome)
console.log('Idade: ', idadeDog)
console.log(adocao)     


//x