// Crie três variáveis:

//     nome
//     email
//     idade

// Crie também uma variável booleana chamada formularioValido que indique se o formulário está válido (true ou false).

// Se formularioValido for verdadeiro, mostre "Formulário enviado com sucesso".
// Caso contrário, mostre "Por favor, preencha todos os campos corretamente".

// 📌 Observação:
// Considere que a verificação dos campos já foi realizada anteriormente e o resultado está armazenado na variável formularioValido.

console.log("=-".repeat(16));
console.log("Validação de formulário completo");
console.log("=-".repeat(16));

const nome = "Kauan";
const email = "kauan@gmail.com";
const idade = 21;

const formularioValido = false;

if (formularioValido) {
  console.log("Formulário enviado com sucesso.");
  console.log("=-".repeat(16));
} else {
  console.log("Por favor, preencha todos os campos corretamente.");
  console.log("=-".repeat(25));
}
