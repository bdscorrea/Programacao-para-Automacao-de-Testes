//AULA 4

console.log(`10 > 5 = ${10 > 5}`);
console.log(10 > 5);
console.log(`10 > 20 = ${10 > 20}`);
console.log(10 > 20);

console.log(`10 >= 10 = ${10 >= 10}`);
console.log(10 >= 10);
console.log(`10 >= 9 = ${10 >= 9}`);
console.log(10 >= 9);

console.log(`10 < 5 = ${10 < 5}`);
console.log(10 < 5);
console.log(`10 < 20 = ${10 < 20}`);
console.log(10 < 20);

console.log(`10 <= 9 = ${10 <= 9}`);
console.log(10 <= 9);
console.log(`10 <= 10 = ${10 <= 10}`);
console.log(10 <= 10);

//igualdade somente de valores
console.log("\nigualdade somente de valores");
console.log(`10 == '10' = ${10 == "10"}`);
console.log(10 == "10");
console.log(`true == 1 = ${true == 1}`);
console.log(true == 1);
console.log(`false == 1 = ${false == 1}`);
console.log(false == 1);

//igualdade de valores e tipo de dado
console.log("\nigualdade de valores e tipo de dado");
console.log(`10 === '10' = ${10 === "10"}`);
console.log(10 === "10");
console.log(`true === 1 = ${true === 1}`);
console.log(true === 1);
console.log(`false === 1 = ${false === 1}`);
console.log(false === 1);

//AND = &&
console.log("\nAND");

const nomedog = "Pipoca";
const nomePossuiAepnasUmaPalavra = nomedog.split(" ").length === 1;
const nomePossuiAteDezCaracteres = nomedog.length <= 10;
console.log(nomePossuiAepnasUmaPalavra && nomePossuiAteDezCaracteres); //verdadeiro

console.log(true && true); //verdadeiro
console.log(true && false); //falso
console.log(false && true); //falso
console.log(false && false); //falso

//OR = ||
console.log("\nOR");
const dog = {
  addotado: true,
  peso: 5.3,
};
console.log(!dog.addotado || dog.peso < 10); //verdadeiro

console.log(true || true); //verdadeiro
console.log(true || false); //verdadeiro
console.log(false || true); //verdadeiro
console.log(false || false); //falso

//NOT = !
console.log("\nNOT");
console.log(true);
console.log(!true);

//adição +, subtração -, multiplicação *, divisão /, resto %, exponencial **
console.log(
  "\nadição +, subtração -, multiplicação *, divisão /, resto %, exponencial **",
);
console.log(1 + 1);
console.log(5 - 1);
console.log(6 * 2);
console.log(6 / 2);
console.log(6 % 2);
console.log(11 / 2);
console.log(11 % 2);
console.log(4 ** 4);

//AULA 5
//-- decremento e ++ incremento e ? ternário
console.log("\n++ incremento");
let pesoDog = 10;
console.log(pesoDog);

pesoDog++;
console.log(pesoDog);

console.log("\n-- decremento");
let pesoCat = 10;
console.log(pesoCat);

pesoCat--;
console.log(pesoCat);

console.log("\n? ternario");
//<condição> ? <ação se verdadeiro> : <ação se falso>
const porte = pesoDog <= 11 ? "pequeno" : "medio";
//            condição         se         senao
console.log(porte);

const pesodoDog = 21;
const portee =
  pesodoDog <= 10 //se
    ? "pequeno"
    : pesodoDog <= 20 //senao se
      ? "medio"
      : "grande"; //senao

console.log(portee);

//arredondamento
console.log("\nArredondamento");
console.log(Math.floor(5.8)); //para baixo
console.log(Math.round(5.8)); //para o mais próximo
console.log(Math.round(5.4)); //para o mais próximo
console.log(Math.ceil(5.8)); //para cima
