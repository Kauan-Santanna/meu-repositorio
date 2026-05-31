// Crie um objeto com nome, idade e email. Use destructuring para extrair essas informações em variáveis separadas. 

console.log("=-".repeat(12))
console.log("Destructuring em objetos")
console.log("=-".repeat(12))

const pessoal = {
    nome: "Kauan",
    idade: 21,
    email: "Kauan@gmail.com"
}

const {nome, idade, email} = pessoal

console.log("Nome:", nome)
console.log("Idade:", idade)
console.log("Email:", email)
console.log("=-".repeat(12))