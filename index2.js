/*Tipo de Dados:
cadeia > string
inteiro/real > number
logico > boolean
vetor/matriz > array
undefined 
null
bigInt = Number para numeros extremamente grandes
symbol = identificador unico 
*/

const turma = "02";
let data = "05/04";

console.log("Aula 03 da Turma " + turma + " no Sabado dia 05/04"); //concatenação
console.log(`Aula 03 da Turma ${turma} no Sabado dia ${data}`); //interpolação

console.log(data.length); //trazer quantidade de caracteres

//split = separar a string
const nomesDeAlunos = "Beatriz Andre Jose Julia";
const nomesDeAlunosSplit = nomesDeAlunos.split(" ");

console.log(nomesDeAlunos);
console.log(nomesDeAlunosSplit);

//letras maiuscuclas ou minusculas
console.log(nomesDeAlunos.toLowerCase());
console.log(nomesDeAlunos.toLocaleUpperCase());
console.log();

//pesquisar algo
console.log(nomesDeAlunos.includes("Jose"));
console.log(nomesDeAlunos.includes("Teste"));

//substituir
console.log(nomesDeAlunos.toLowerCase().replaceAll("a", "i"));

//retirar espaços desnecessários no inicio ou no fim
const email = "     bscorrea22@hotmail.com      ";
console.log("email:", email.trim());

//pegar uma seleção de caracteres
const cpf = "57330531006";
console.log(cpf.slice(0, 3)); //pegar os 3 primeiros digitios
