// Crie uma função executarAcao(acao) que recebe uma função como parâmetro e a executa. Teste passando uma função que imprime "Executando ação!". 

import chalk from "chalk"

console.log(chalk.blue("=-".repeat(8)))
console.log(chalk.cyan("Callback simples"))
console.log(chalk.blue("=-".repeat(8)))

function executarAcao(acao) {
    acao()
}

function mostrarMensagem(acao) {
    console.log(chalk.cyan("Executando ação!"))
}

executarAcao(mostrarMensagem)
console.log(chalk.blue("=-".repeat(8)))