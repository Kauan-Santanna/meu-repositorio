// Crie um array com 4 notas. Some os valores e calcule a média, exibindo uma mensagem de "Aprovado" ou "Reprovado" com base na média >= 7.

console.log("=-".repeat(7))
console.log("Média de notas")
console.log("=-".repeat(11))

const notas = [7, 9, 6, 10]

let soma = 0

for (let i = 0; i < notas.length; i++) {
    soma += notas[i]
}

let media = soma / notas.length

console.log(`A média das notas é: ${media}`)
console.log("=-".repeat(11))

if (media >= 7) {
    console.log("Aprovado!")
    console.log("=-".repeat(5))
} else {
    console.log("Reprovado!")
    console.log("=-".repeat(5))
}