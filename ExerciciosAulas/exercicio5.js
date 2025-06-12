const nome = "Loki";
const peso = 10;
const porte = peso <= 10 ? "Pequeno porte " : "Médio porte";

console.log("----------");
console.log("Nome: ", nome);
console.log("Peso: ", peso);
console.log(porte);
console.log("----------");

function classificaPorte(nome, peso) {
  const porte = peso <= 10 ? "Pequeno porte " : "Médio porte";

  console.log("----------");
  console.log("Nome: ", nome);
  console.log("Peso: ", peso);
  console.log(porte);
  console.log("----------");
}

classificaPorte("Thor", 14.5);
classificaPorte("Loki", 36.2);
classificaPorte("Thor", 10);
classificaPorte("Teste", 21.8);

//xx
