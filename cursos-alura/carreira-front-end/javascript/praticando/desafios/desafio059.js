// Use um laço for...in para listar todas as propriedades e seus valores do objeto pessoal criado no exercício

console.log("=-".repeat(17));
console.log("Listando propriedades com for...in");
console.log("=-".repeat(17));

const pessoal = {
  nome: "Kauan",
  idade: 22,
  estado: "Santa Catarina",
  profissao: "Assistente de P&D",
};

for (const chave in pessoal) {
  console.log(`${chave}: ${pessoal[chave]}`);
}

console.log("=-".repeat(17));
