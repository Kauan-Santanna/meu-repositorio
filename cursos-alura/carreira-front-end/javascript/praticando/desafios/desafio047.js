// Crie um array com preços de produtos. Use map para aplicar 10% de desconto em cada um e mostre os preços com desconto. 

console.log("=-".repeat(9))
console.log("Descontos com map")
console.log("=-".repeat(9))

const precos = [100, 75, 50, 25]

const precosComDesconto = precos.map((preco) => {
    return preco - (preco * 0.10)
})

console.log("Preços originais:", precos)
console.log("Preços com desconto:", precosComDesconto)
console.log("=-".repeat(22))