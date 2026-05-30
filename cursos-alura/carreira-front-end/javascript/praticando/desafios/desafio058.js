// Crie um objeto chamado usuario com as propriedades nome e saudacao.
// A propriedade saudacao deve ser uma função que imprime no console uma mensagem fixa, utilizando o nome armazenado no objeto por acesso direto à propriedade.

console.log("=-".repeat(9));
console.log("Objeto com método");
console.log("=-".repeat(11));

const usuario = {
  nome: "Kauan",

  saudacao: function () {
    console.log(`Olá, meu nome é ${usuario.nome}!`);
  },
};

usuario.saudacao();
console.log("=-".repeat(11));
