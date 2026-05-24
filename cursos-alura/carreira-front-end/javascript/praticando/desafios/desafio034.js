// Crie uma função verificarAprovacao(nota) que retorna "Aprovado" se nota >= 7 ou "Reprovado" caso contrário.

import chalk from "chalk";

console.log(chalk.blue("=-".repeat(10)));
console.log(chalk.cyan("Verificar aprovação"));
console.log(chalk.blue("=-".repeat(10)));

function verificarAprovacao(nota) {
  if (nota >= 7) {
    console.log(chalk.green("Aprovado!"));
    console.log(chalk.blue("=-".repeat(5)));
  } else {
    console.log(chalk.red("Reprovado!"));
    console.log(chalk.blue("=-".repeat(5)));
  }
}

let nota = 8;

verificarAprovacao(nota);
