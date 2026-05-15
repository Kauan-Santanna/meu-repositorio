// Crie uma variável com um número qualquer. Mostre se ele é positivo, negativo ou igual a zero.

console.log("=-".repeat(21));
console.log("Verificação de número positivo ou negativo");
console.log("=-".repeat(21));

const numero = 0;

if (numero > 0) {
  console.log(`O número ${numero} é positivo.`);
  console.log("=-".repeat(11));
} else if (numero < 0) {
  console.log(`O número ${numero} é negativo.`);
  console.log("=-".repeat(11));
} else {
  console.log("É igual a zero.");
  console.log("=-".repeat(7));
}
