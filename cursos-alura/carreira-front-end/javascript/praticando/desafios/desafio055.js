// Crie uma função que receba um objeto pessoa contendo as propriedades nome, idade, estado e profissao.
// A função deve retornar uma frase montada com concatenação de strings, exibindo os dados da pessoa.

console.log("=-".repeat(9));
console.log("Função com objeto");
console.log("=-".repeat(9));

const pessoal = {
  nome: "Kauan",
  idade: 22,
  estado: "Santa Catarina",
  profissao: "Assistente de P&D",
};

function apresentarPessoa(pessoa) {
  return `Nome: ${pessoa.nome}
Idade: ${pessoa.idade}
Estado: ${pessoa.estado}
Profissão: ${pessoa.profissao}`;
}

console.log(apresentarPessoa(pessoal));
console.log("=-".repeat(14));
