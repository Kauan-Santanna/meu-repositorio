// Crie uma variável anoNascimento e anoAtual. Use um for para listar a idade da pessoa ano a ano até o ano atual.

import chalk from "chalk";

console.log(chalk.yellow("=-".repeat(12)));
console.log(chalk.yellow.bold("Idade ao longo dos anos"));
console.log(chalk.yellow("=-".repeat(12)));

const nome = "Kauan";
const anoNascimento = 2004;
const anoAtual = 2026;

for (let ano = anoNascimento; ano <= anoAtual; ano++) {
  const idade = ano - anoNascimento;

  console.log(
    chalk.cyan(`${nome} vai ter `) +
      chalk.green.bold(`${idade} `) +
      chalk.cyan("ano(s) de idade em ") +
      chalk.green.bold(`${ano}`),
  );
}

console.log(chalk.yellow("=-".repeat(20)));
