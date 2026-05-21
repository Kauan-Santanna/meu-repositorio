// Mostre no console quantos números entre 1 e 100 são divisíveis por 3. 

import chalk from "chalk"

console.log(chalk.white("=-".repeat(18)))
console.log(chalk.cyan("Contar múltiplos de 3 entre 1 e 100"))
console.log(chalk.white("=-".repeat(18)))

let quantidade = 0

for (let numero = 1; numero <= 100; numero++) {
    if (numero % 3 == 0) {
        console.log(
            chalk.cyan("O número ") +
            chalk.white(`${numero} `) +
            chalk.cyan("é divisível por ") +
            chalk.white(`3.`)
        )
        quantidade++
    }
}

console.log(chalk.white("=-".repeat(30)))
console.log(
    chalk.cyan("Ao total, de ") + 
    chalk.white("1 ") + 
    chalk.cyan("a ") + 
    chalk.white("100 ") + 
    chalk.cyan("tem ") + 
    chalk.white(`${quantidade} `) + 
    chalk.cyan("números que são divisíveis por ") +
    chalk.white(`3.`)
)
console.log(chalk.white("=-".repeat(30)))