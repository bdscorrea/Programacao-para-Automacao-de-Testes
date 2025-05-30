
const listaDeBrinquedos = [
       'Bola',
       'Osso',
       'Corda',
       'Sino'
]


listaDeBrinquedos.forEach(brinquedo1 => {
       console.log(`O brinquedo - ${brinquedo1} - foi entregue`)
})


console.log(`---------------FUNCTION----------------------`)

const brinquedos = [
       'Bola',
       'Osso',
       'Corda',
       'Sino'
]

function entregarBrinquedos(brinquedos) {

brinquedos.forEach((brinquedo, i) => {
       console.log(`Entregando brinquedo ${i + 1}: ${brinquedo}`);
});
}


entregarBrinquedos(brinquedos)