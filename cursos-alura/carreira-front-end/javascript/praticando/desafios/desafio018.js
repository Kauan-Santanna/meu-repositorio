// Crie duas variáveis:

//     senha

//     senhaValida (valor true ou false, definido manualmente)

// Se senhaValida for verdadeira, mostre "Senha válida".
// Caso contrário, mostre "Senha muito curta".

console.log("=-".repeat(13));
console.log("Validação de senha segura");
console.log("=-".repeat(13));

const senha = "1234";
const senhaValida = true;

if (senhaValida) {
  console.log("Senha válida");
  console.log("=-".repeat(6));
} else {
  console.log("Senha muito curta");
  console.log("=-".repeat(9));
}
