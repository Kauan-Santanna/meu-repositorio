const pessoa = {
  nome: "Kauan",
  idade: 21,
  temCNH: true,
};

pessoa.sobrenome = "Santanna";

// console.log("Nome:", pessoa.nome);
// console.log("Sobrenome:", pessoa.sobrenome);

const livro = {
  titulo: "O Hobbit",
  paginas: 310,
};

livro.publicado = true;
livro.idiomas = ["Ingles", "Frances", "Portugues", "Espanhol"];

console.log("Livro antes:", livro);

livro.idiomas.push("Mandarim");

delete livro.paginas;

console.log("Livro depois:", livro);

console.log("Autor do livro:", livro["autor"]);
console.log("Autor do livro:", livro.autor);

const autor = {
  nome: "J. R. R. Tolkien",
  nacionalidade: "Britanico",
  idade: 98,
  livros: [livro],
};

console.log("Autor", autor);

livro.autor = autor;

console.log(livro);

livro.autor.nome;
livro.autor.nacionalidade;
