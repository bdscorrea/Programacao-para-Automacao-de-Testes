/**/

function exibirNomePet(paramNomePet) {
    console.log(`O nome do pet é ${paramNomePet}`)
}

function exibirIdade(paramIdadePet) {
    console.log(`Idade do pet é ${paramIdadePet}`)
}

exibirNomePet('Pipoca')
exibirNomePet('Thor')
exibirNomePet('Xuxu')


export {
    exibirNomePet,
    exibirIdade
}