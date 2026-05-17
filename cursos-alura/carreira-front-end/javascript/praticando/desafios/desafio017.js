// Crie uma variável email. Se estiver vazia (""), mostre "Preencha o campo de e-mail". Caso contrário, mostre "E-mail válido".

console.log("=-".repeat(15));
console.log("Validação de campo obrigatório");
console.log("=-".repeat(15));

const email = "asdad@gmail.com";

if (email === "") {
  console.log("Preencha o campo de e-mail");
  console.log("=-".repeat(13));
} else {
  console.log("E-mail válido");
  console.log("=-".repeat(7));
}
