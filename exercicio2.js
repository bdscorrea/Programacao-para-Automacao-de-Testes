
const nomes = ['Amora', 'anoRa', 'Teste', 'P125sa'];
const nomesFormatados = [];
for (let i = 0; i < nomes.length; i++) {
  let capitalizeArray = nomes[i].toUpperCase();
  nomesFormatados.push(capitalizeArray); 
  };



console.log('Nome Original: ' , nomes)
console.log('Nome Formatado: ', nomesFormatados);
