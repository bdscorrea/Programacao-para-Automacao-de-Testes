/* 
describe - agrupador de testes
it - implementação do teste

TDD:
- crio o teste
- vejo o teste falhar
- crio a implementação para o teste passar
- rodo o teste de novo
- refatoro o código para melhorar...

assertion/asserção
    verificcar se um comportamento esta de acordo com o esperado
*/

import { exibirNomeDogFormatado } from "../testesdeunidade.js";
import assert from "node:assert";

describe("Testes do Projeto", () => {
  it("deve exibir o nome do dog com letras maiusculas", () => {
    assert.strictEqual(exibirNomeDogFormatado("Mimosa"), "MIMOSA");
  });

  it("primeiro teste", () => {});
  it("segundo teste", () => {
    throw new Error();
  });
});
