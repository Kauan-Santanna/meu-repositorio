// Crie uma função fazerPergunta(pergunta, respostaCorreta). A função deve exibir a pergunta e depois mostrar se a resposta está certa ou errada (simule a resposta com uma variável).

import chalk from "chalk";

console.log(chalk.blue("=-".repeat(8)));
console.log(chalk.cyan("Desafio do quiz"));
console.log(chalk.blue("=-".repeat(8)));

function fazerPergunta(pergunta, respostaCorreta) {
  let respostaUsuario = respostaCorreta;

  if (respostaUsuario === respostaCorreta) {
    console.log(chalk.green("Resposta correta!"));
    console.log(chalk.blue("=-".repeat(8)));
  } else {
    console.log(chalk.red("Resposta errada!"));
    console.log(chalk.blue("=-".repeat(8)));
  }
}

fazerPergunta("Qual é a capital de SC - Santa Catarina??", "Florianópolis");
