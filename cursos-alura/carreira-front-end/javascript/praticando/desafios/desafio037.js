// Reescreva o exercício da calculadora de troco utilizando uma função chamada calcularTroco.
// A função deve receber dois parâmetros: valorCompra e valorPago.

// A função deve:

//     calcular o valor do troco
//     retornar o valor calculado

// Depois, utilize o retorno da função para exibir o valor do troco no console.

import chalk from "chalk"

console.log(chalk.blue("=-".repeat(10)))
console.log(chalk.cyan("Reutilizando código"))
console.log(chalk.blue("=-".repeat(10)))

function calcularTroco(valorCompra, valorPago) {
    if (valorPago >= valorCompra) {
        return valorPago - valorCompra
    } else {
        return null
    }
}

const valorCompra = 160
const valorPago = 150

const troco = (calcularTroco(valorCompra, valorPago))

if (troco !== null) {
    console.log(chalk.cyan(`O troco da compra é de R$${troco}`))
    console.log(chalk.blue("=-".repeat(14)))
} else {
    console.log(chalk.cyan("Não é possível realizar essa compra!"))
    console.log(chalk.blue("=-".repeat(18)))
}