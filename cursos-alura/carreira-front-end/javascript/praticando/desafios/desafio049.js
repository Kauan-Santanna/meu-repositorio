// Crie um array com os preços de produtos em um carrinho de compras.
// Utilize um laço for ou for...of para calcular o valor total da compra.

// Em seguida, aplique um desconto de 20% sobre o total e exiba o valor final no console.

console.log("=-".repeat(15))
console.log("Simulando carrinho de compras")
console.log("=-".repeat(15))

const valorCarrinho = [50, 150]

let valorTotal = 0

// Para cada valor dentro de valorCarrinho
for (const valor of valorCarrinho) {
    valorTotal += valor
}

const valorFinal = valorTotal - (valorTotal * 0.20)

console.log("Valor total:", valorTotal)
console.log("Valor com desconto de 20%:", valorFinal)
console.log("=-".repeat(15))