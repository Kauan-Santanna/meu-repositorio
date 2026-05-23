const readline = require("readline");
const chalk = require("chalk").default;

const quiz = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(chalk.white("=-".repeat(20)));
console.log(chalk.cyan("Bem-vindo(a) ao Quiz de JavaScript!"));
console.log(chalk.cyan("Responda com a letra correta: A, B ou C"));
console.log(chalk.white("=-".repeat(20)));

let acertos = 0;

quiz.question(
  chalk.white("1 - ") +
    chalk.cyan("Qual palavra usamos para criar uma função?\n") +
    chalk.white("\n(A) - ") +
    chalk.cyan("define\n") +
    chalk.white("(B) - ") +
    chalk.cyan("function\n") +
    chalk.white("(C) - ") +
    chalk.cyan("create\n") +
    chalk.cyan("\nResposta: "),
  (resposta1) => {
    // TODO: incrementar acertos se respondeu corretamente
    if (resposta1.toLowerCase() === "b") {
      console.log(chalk.green("\nParabéns! ") + chalk.cyan("você acertou a resposta."));
      console.log(chalk.white("=-".repeat(20)));
      acertos++;
    } else {
      console.log(chalk.red("Você errou! ") + chalk.cyan("a resposta certa era 'B'."));
      console.log(chalk.white("=-".repeat(20)));
    }

    quiz.question(
      chalk.white("2 - ") +
        chalk.cyan("Qual dessas é uma estrutura de repetição?\n") +
        chalk.white("\n(A) - ") +
        chalk.cyan("loopar()\n") +
        chalk.white("(B) - ") +
        chalk.cyan("repeat\n") +
        chalk.white("(C) - ") +
        chalk.cyan("for\n") +
        chalk.cyan("\nResposta: "),
      (resposta2) => {
        // TODO: incrementar acertos se respondeu corretamente
        if (resposta2.toLowerCase() === "c") {
          console.log(chalk.green("\nParabéns! ") + chalk.cyan("você acertou a resposta."));
          console.log(chalk.white("=-".repeat(20)));
          acertos++;
        } else {
          console.log(chalk.red("Você errou! ") + chalk.cyan("a resposta certa era 'C'."));
          console.log(chalk.white("=-".repeat(20)));
        }

        quiz.question(
          chalk.white("3 - ") +
            chalk.cyan("Qual valor é considerado falsy em JavaScript?\n") +
            chalk.white("\n(A) - ") +
            chalk.cyan("1\n") +
            chalk.white("(B) - ") +
            chalk.cyan("0\n") +
            chalk.white("(C) - ") +
            chalk.cyan("'texto'\n") +
            chalk.cyan("\nResposta: "),
          (resposta3) => {
            // TODO: incrementar acertos se respondeu corretamente
            if (resposta3.toLowerCase() === "b") {
              console.log(chalk.green("\nParabéns! ") + chalk.cyan("você acertou a resposta."));
              console.log(chalk.white("=-".repeat(20)));
              acertos++;
            } else {
              console.log(chalk.red("Você errou! ") + chalk.cyan("a resposta certa era 'B'."));
              console.log(chalk.white("=-".repeat(20)));
            }

            console.log(
              chalk.cyan("Você acertou ") +
                chalk.white(`${acertos} `) +
                chalk.cyan("de ") +
                chalk.white("3 ") +
                chalk.cyan("perguntas."),
            );
            quiz.close();
          },
        );
      },
    );
  },
);
