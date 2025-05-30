/*
tentar {
    conexao com abnco (exemplo)
} pegar (erro/exceção) {
 salvar em algum lugar..., exibir...
 }

 lançar = throw
 */
try {
    console.log(`Tentando aliemntar o dog...`)
    throw new Error(`Dog não quis alimento`)
} catch (excecao) {
    console.log(excecao)
} finally {
    console.log(`SEMPRE SEREI EXECUTADO!`)
}
