// Peça a idade da pessoa em uma variável. Se for 18 ou mais, mostre "Pode comprar bebida alcoólica". Caso contrário, mostre "Venda proibida para menores de 18 anos".

console.log("=-".repeat(21));
console.log("Verificação de idade para compra de bebida");
console.log("=-".repeat(21));

const idade = 13;

if (idade >= 18) {
  console.log("Pode comprar bebida alcoólica.");
  console.log("=-".repeat(15));
} else {
  console.log("Venda proibida para menores de 18 anos.");
  console.log("=-".repeat(20));
}
