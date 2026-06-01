// Crie uma função que receba vários números como parâmetros usando o operador rest (...).
// Utilize um laço for para somar todos os valores recebidos e retorne o total.

console.log("=-".repeat(12));
console.log("Rest operator em função");
console.log("=-".repeat(12));

function somarTudo(...numeros) {
  let soma = 0;

  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }
  return soma;
}

console.log(somarTudo(1, 2, 3, 4));
console.log("=-".repeat(12));
