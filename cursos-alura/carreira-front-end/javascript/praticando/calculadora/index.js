import { createInterface } from "readline";
import { adicao, subtracao } from "./operacoesMatematicas.js";

const leitor = createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question("Digite o primeiro número: ", (numero1) => {
  leitor.question("Digite a operação (+ ou -): ", (operacao) => {
    leitor.question("Digite o segundo número: ", (numero2) => {
      const num1 = Number(numero1);
      const num2 = Number(numero2);

      let resultado = null;

      if (operacao === "+") {
        resultado = adicao(num1, num2);
      } else if (operacao === "-") {
        resultado = subtracao(num1, num2);
      } else {
        console.log("Operação inválida");
      }

      if (resultado != null) {
        console.log("O resultado da operação é:", resultado);
      }

      leitor.close();
    });
  });
});
