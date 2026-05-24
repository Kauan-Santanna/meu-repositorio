// Crie uma função ehPar(numero) que retorna true se o número for par e false se for ímpar. Teste a função com diferentes valores. 

import chalk from "chalk"

console.log(chalk.blue("=-".repeat(10)));
console.log(chalk.cyan("Número par ou ímpar"));
console.log(chalk.blue("=-".repeat(10)));

function ehPar(numero) {
    if (numero % 2 === 0) {
        console.log(chalk.cyan(`O número ${numero} é par!`))
        console.log(chalk.blue("=-".repeat(9)));
    } else {
        console.log(chalk.cyan(`O número ${numero} é ímpar!`))
        console.log(chalk.blue("=-".repeat(10)));
    }
}

const numero = 2

ehPar(numero)