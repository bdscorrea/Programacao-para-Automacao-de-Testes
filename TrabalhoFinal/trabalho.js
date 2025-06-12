function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}
function verificarSePodeSerAdotado(idade, porte) {
  return (idade = 1 && porte === "M" ? true : false);
}

function calcularConsumoDeRacao(nome, idade, peso) {
  return peso * 300;
}

function decidirTipoDeAtividadePorPorte(porte) {
  if (porte === "pequeno") {
    return "brincar dentro de casa";
  } else {
    return "brincar fora de casa";
  }
}

async function buscarDadoAsync(nome) {
  return await "Pipoca";
}

export {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync,
};
