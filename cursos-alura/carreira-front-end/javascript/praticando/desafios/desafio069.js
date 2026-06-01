// Crie uma função construtora chamada Livro que receba titulo e autor como parâmetros e os armazene em propriedades do objeto.
// Em seguida, crie dois objetos Livro usando essa função.

console.log("=-".repeat(15))
console.log("Objeto com função construtora")
console.log("=-".repeat(15))

function Livro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
}

const livro1 = new Livro("Dom casmurro", "Machado de Assis")
const livro2 = new Livro("1984", "George Orwell")

console.log(livro1)
console.log(livro2)
console.log("=-".repeat(30))