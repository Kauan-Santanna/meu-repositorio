function saudacao(nome) { // nome é um parametro de função saudacao
    console.log("Olá,", nome)
}

saudacao("Kauan") // Kauan é o "argumento"
saudacao("Aninha")

// function calcularDobro(numero) {
//     let soma = numero * 2
//     console.log(`O dobro de ${numero} é ${soma}`)
// }

// calcularDobro(4)

function calcularDobro(numero) {
    return numero * 2
}

const numeroDobrado = calcularDobro(4)
console.log("O dobro de 4 é:", numeroDobrado)