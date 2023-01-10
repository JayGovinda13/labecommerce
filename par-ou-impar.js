const parOuImpar = process.argv[2].toLowerCase()
const numero = process.argv[3]

const pcParOuImpar = parOuImpar === "par" ? "impar" : "par"
const pcNumero = Math.floor (Math.random()*10)

console.log(`Usuário pediu ${parOuImpar} e lançou ${numero}.\nComputador ficou com ${pcParOuImpar} e lançou ${pcNumero}`)

const resultado = (numero + pcNumero) % 2

console.log(resultado)

if((resultado === 0 && parOuImpar === "par") || (resultado === 1 && parOuImpar === "impar")){
    console.log("Vencedor")
}else{
    console.log("Derrota")
}
