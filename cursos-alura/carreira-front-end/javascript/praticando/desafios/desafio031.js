// Crie uma função chamada saudacao que exibe a mensagem "Olá! Seja bem-vindo(a)!" ao ser chamada. 

import chalk from "chalk"

console.log(chalk.white("=-".repeat(9)))
console.log(chalk.cyan("Função de saudação"))
console.log(chalk.white("=-".repeat(9)))

function saudacao() {
    console.log(chalk.cyan("Olá! Seja bem-vindo(a)!"))
}

saudacao()
console.log("=-".repeat(12))