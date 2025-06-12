const nomesCaes = ["Pantera", "Luna", "Thor"];
const nomesGatos = ["Mimosa", "Frajola", "Mingau"];

function entregarPetiscos(nomesCaes) {
  nomesCaes.forEach((dog) => {
    console.log(`Entregando petisco para ${dog}`);
  });
}

export { nomesCaes, nomesGatos, entregarPetiscos };
