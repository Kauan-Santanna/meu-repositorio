// Crie uma função que recebe dois números e retorna a soma deles. Exiba o resultado no console com uma frase completa. 

import chalk from "chalk"

console.log(chalk.blue("=-".repeat(6)))
console.log(chalk.cyan("Função soma"))
console.log(chalk.blue("=-".repeat(6)))

function somarDoisNumeros(numero1, numero2) {
    return numero1 + numero2
}

const numero1 = 3
const numero2 = 5

const soma = somarDoisNumeros(numero1, numero2)

console.log(chalk.cyan(`A soma entre ${numero1} + ${numero2} é igual a ${soma}`))
console.log(chalk.blue("=-".repeat(15)))