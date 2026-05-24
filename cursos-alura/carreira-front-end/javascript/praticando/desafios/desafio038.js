// Transforme a função do exercício 6 em uma arrow function com sintaxe reduzida. 

import chalk from "chalk"

console.log(chalk.blue("=-".repeat(7)))
console.log(chalk.cyan("Arrow function"))
console.log(chalk.blue("=-".repeat(7)))

const somarDoisNumeros = (numero1, numero2) => {
    return numero1 + numero2
}

const numero1 = 3
const numero2 = 5

const soma = somarDoisNumeros(numero1, numero2)

console.log(chalk.cyan(`A soma entre ${numero1} + ${numero2} é igual a ${soma}`))
console.log(chalk.blue("=-".repeat(15)))