// Crie uma variável opcao com valores de 1 a 3. Use switch para mostrar: 1 - "Cadastrar", 2 - "Listar", 3 - "Sair".

console.log("=-".repeat(10));
console.log("Menu com switch-case");
console.log("=-".repeat(10));

const opcao = 1;

switch (opcao) {
  case 1:
    console.log("Cadastrar");
    console.log("=-")
    break;
  case 2:
    console.log("Listar");
    break;
  case 3:
    console.log("Sair");
    break;

  default:
    console.log("Opção inválida");
}
