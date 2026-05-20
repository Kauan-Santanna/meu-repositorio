// Crie uma variável numeroSecreto com valor fixo.
// Simule até 3 tentativas usando um for.
// Em cada tentativa, compare o valor tentado com o número secreto e mostre no console:

//     "Acertou!" se for igual
//     "Tente novamente" se for diferente

// 📌 Observação:
// As tentativas devem ser simuladas por variáveis dentro do laço.

import chalk from "chalk";

console.log(chalk.yellow("=-".repeat(11)));
console.log(chalk.yellow.bold("Jogo do número secreto"));
console.log(chalk.yellow("=-".repeat(11)));

const numeroSecreto = 5;

for (let tentativa = 3; tentativa < 6; tentativa++) {
  if (tentativa == numeroSecreto) {
    console.log(
        chalk.green.bold("Acertou! ") +
        chalk.yellow(`O número secreto era ${tentativa}`)
    );
  } else {
    console.log(
        chalk.red.bold("Tente novamente. ") +
        chalk.yellow(`O número secreto não é ${tentativa}`)
    );
  }
}
