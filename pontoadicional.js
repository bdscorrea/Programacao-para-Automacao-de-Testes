/*Programa sobre função
?? Hands-on
Crie uma função que pega uma lista de inteiros e strings e retorna uma nova lista sem as strings.

*/
console.log('Programa sobre função')
function filtrarNumeros(lista) {
const apenasNumeros = lista.filter(item => typeof item === 'number');
console.log(apenasNumeros)

}  

filtrarNumeros([3, 'a', 7, 'b', 8, '10', 22])
filtrarNumeros([1, 'um', 2, 'dois', 3, '3'])



console.log('----------------------------------------')

/*Programa Retornando Número de Vogais
?? Hands-on
Retorne o número de vogais no texto fornecido. Consideraremos a, e, i, o e u como vogais para este Kata. O texto de entrada conterá apenas letras minúsculas e/ou espaços. Letras acentuadas não fazem parte desse desafio.

Envie seus código pelo link abaixo:*/

console.log('Programa Retornando Número de Vogais')
function contarVogais(frase) {
  const vogais = frase.match(/[aeiou]/g);
 console.log("Número de vogais:", vogais ? vogais.length : 0); 
}

contarVogais("beatriz")
contarVogais("ola, meu nome eh")