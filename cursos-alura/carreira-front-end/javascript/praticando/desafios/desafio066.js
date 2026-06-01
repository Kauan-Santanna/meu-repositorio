// Crie uma função que recebe um nome e imprime "Olá, [nome]". Se o nome não for passado, use "visitante" como valor padrão.

console.log("=-".repeat(14));
console.log("Função com parâmetro default");
console.log("=-".repeat(14));

function saudacao(nome = "visitante") {
  console.log(`Olá, ${nome}!`);
}

saudacao("Kauan");
saudacao();
console.log("=-".repeat(14))