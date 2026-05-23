const readline = require("readline");

const quiz = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Bem-vindo(a) ao Quiz de JavaScript!");
console.log("Responda com a letra correta: A, B ou C\n");

let acertos = 0;

quiz.question("1 - Qual palavra usamos para criar uma função?\n(A) Define\n(B) Function\n(C) Create\n>", (resposta1) => {
    // TODO: incrementar acertos se respondeu corretamente
    if (resposta1 === "b") {
      console.log("Parabéns! você acertou a resposta.");
      acertos++
    } else {
      console.log("Que pena! a resposta certa era 'B'.");
    }

    quiz.question("2 - Qual dessas é uma estrutura de repetição?\n(A) Loopar\n(B) Repeat\n(C) For\n>", (resposta2) => {
      // TODO: incrementar acertos se respondeu corretamente
      if (resposta2 === "c") {
        console.log("Parabéns! você acertou a resposta.");
        acertos++;
      } else {
        console.log("Que pena! a resposta certa era 'C'.");
      }

      quiz.question("3 - Qual valor é considerado falsy em JavaScript?\n(A) 1\n(B) 0\n(C) 'Texto'\n> ", (resposta3) => {
        // TODO: incrementar acertos se respondeu corretamente
        if (resposta3 === "b") {
          console.log("Parabéns! você acertou a resposta.");
          acertos++;
        } else {
          console.log("Que pena! a resposta certa era 'B'.");
        }

        console.log(`Você acertou ${acertos} de 3 perguntas`)
        // TODO:
        // se acertou tudo, dar os parabéns.
        // se acertou somente 2, muito bom! continue assim!
        // se não acertou nenhuma, continue praticando

        quiz.close();
      });
    });
  },
);
