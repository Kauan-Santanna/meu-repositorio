// Mostre todos os números pares entre 1 e 50 usando for.

import chalk from "chalk";

console.log(chalk.yellow("=-".repeat(11)));
console.log(chalk.yellow.bold("Listando números pares"));
console.log(chalk.yellow("=-".repeat(11)));

for (let numero = 1; numero <= 50; numero++) {
  if (numero % 2 == 0) {
    console.log(chalk.cyan("Números pares de 1 a 50: ") + chalk.yellow(numero));
  }
}

console.log(chalk.yellow("=-".repeat(14)));
