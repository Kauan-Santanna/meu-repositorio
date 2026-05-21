// Crie uma variável opcao.
// Use um do...while para exibir repetidamente as opções:

//     1 - Ver saldo
//     2 - Fazer depósito
//     3 - Sair

// O menu deve continuar sendo exibido até que a opção seja 3.
// Mostre no console a ação correspondente a cada opção.

// 📌 Observação:
// A escolha da opção deve ser simulada por valores atribuídos à variável opcao.

import chalk from "chalk"

console.log(chalk.white("=-".repeat(9)))
console.log(chalk.cyan("Menu com repetição"))
console.log(chalk.white("=-".repeat(9)))

let opcao = 1

do {
    if (opcao === 1) {
        console.log(chalk.cyan("Ver saldo"))
        console.log(chalk.white("=-".repeat(9)))
        opcao = 2
    } else if (opcao === 2) {
        console.log(chalk.cyan("Fazer depósito"))
        console.log(chalk.white("=-".repeat(9)))
        opcao = 3
    } else if (opcao === 3) {
        console.log(chalk.cyan("Sair"))
    } 
} while (opcao !== 3)

console.log(chalk.red("Saindo..."))
console.log(chalk.white("=-".repeat(9)))