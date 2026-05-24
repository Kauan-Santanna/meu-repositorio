// Crie uma função chamada calcularIMC que receba dois parâmetros: peso e altura.
// A função deve calcular o IMC utilizando a fórmula:

//     IMC = peso / (altura * altura)

import chalk from "chalk";

console.log(chalk.blue("=-".repeat(7)));
console.log(chalk.cyan("Cálculo de IMC"));
console.log(chalk.blue("=-".repeat(8)));

function calculoDeIMC(peso, altura) {
  return peso / (altura * altura);
}

const peso = 65;
const altura = 1.7;

const imc = calculoDeIMC(peso, altura);

console.log(chalk.cyan("Seu IMC é:", imc.toFixed(2)));
console.log(chalk.blue("=-".repeat(8)));
