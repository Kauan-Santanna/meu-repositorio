// Crie duas variáveis: saldoDisponivel e valorCompra. Se o saldo for suficiente, mostre "Compra aprovada". Caso contrário, "Saldo insuficiente".

console.log("=-".repeat(8));
console.log("Compra com saldo");
console.log("=-".repeat(8));

const saldoDisponivel = 200;
const valorCompra = 150;

if (saldoDisponivel >= valorCompra) {
  console.log("Compra aprovada");
  console.log("=-".repeat(8));
} else {
  console.log("Saldo insuficiente");
  console.log("=-".repeat(9));
}
