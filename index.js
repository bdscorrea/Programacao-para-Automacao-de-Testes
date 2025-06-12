console.log("Aula inicial!");
console.error("Teste Dois");
console.warn("Atenção!");
console.table([
  {
    Nome: "Beatriz",
    Turma: "02",
    Disciplina: "Prog JS",
  },
  { Nome: "Teste", Turma: "02", Disciplina: "Prog JS" },
]);

/* constantes e variaveis

const - para informações que nunca mudam
var ou let - para informações que podem mudar
*/

//informações que não mudam
const nome = "Loki";
const raca = "SDR/ vira lata";
const sexo = "Macho";
const cor = "Caramelo";
const dataDeNascimento = "01/01/2020";
const porte = "M";

//informações que podem mudar
let idade = 5;
let peso = 10.5;
let vacindo = true;
let castrado = false;
let tamanho = "M";

console.log("nome:", nome);
