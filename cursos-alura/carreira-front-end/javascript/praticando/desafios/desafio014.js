console.log("=-".repeat(15))
console.log("Conversão de nota em conceito")
console.log("=-".repeat(15))

const nota = 2

if (nota <= 10 && nota >= 9) {
    console.log("Categoria A.")
} else if (nota < 9 && nota >= 8) {
    console.log("Categoria B.")
} else if (nota < 8 && nota >= 6) {
    console.log("Categoria C.")
} else if (nota < 6 && nota >= 4) {
    console.log("Categoria D.")
} else {
    console.log("Categoria E.")
}

console.log("=-".repeat(6))