// Adicione à função construtora Livro uma função chamada descrever, que retorna uma frase com o título e o autor do livro, usando concatenação de strings.

console.log("=-".repeat(8))
console.log("Método no objeto")
console.log("=-".repeat(8))

function Livro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.descrever = function () {
        return "O livro " + this.titulo + " foi escrito por " + this.autor + ".";
    }
}

const livro = new Livro("O Hobbit", "J. R. R. Tolkien")
console.log(livro.descrever())
console.log("=-".repeat(25))