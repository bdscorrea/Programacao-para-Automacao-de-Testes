
const nomes = ['Amora', 'anoR@', 'TestE', 'P125sa'];
const nomesFormatados = [];
for (let i = 0; i < nomes.length; i++) {
  let capitalizeArray = nomes[i].toUpperCase();
  nomesFormatados.push(capitalizeArray); 
  };


console.log('Nome Original: ' , nomes)
console.log('Nome Formatado: ', nomesFormatados);


//correção em aula 

const nomeDog = '   Ba!ley Mari@    '

let nomeFormatado = nomeDog.trim()
nomeFormatado = removerCaracteresEspeciais(nomeFormatado)
nomeFormatado = tornarAPrimeiraLetraMaiuscula(nomeFormatado)


const valido = verificarSeONomeEValido(nomeFormatado)

console.log('\nNome Original: ' , nomeDog)
console.log('Nome Formatado: ', nomeFormatado)
console.log('O nome é válido?' , valido)

function removerCaracteresEspeciais(nome) {
  // return nome.replace(/[^a-zA-ZÀ-ÿ]/g, "");
  return nome.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
}

function removerEspacosEntreAPalavra(nome) {
  return nome.replace(/\s+/g, "")
}

function tornarAPrimeiraLetraMaiuscula(nome) {
  return nome.charAt(0).toUpperCase() + nome.slice(1, nome.length).toLowerCase()
}

function verificarSeONomeEValido(nome) { 
  return nome.split(" ").length === 1
}
