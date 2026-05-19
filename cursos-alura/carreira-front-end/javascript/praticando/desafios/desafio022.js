// Some todos os números de 1 a 100. Mostre o resultado no final com uma mensagem explicativa. 

console.log("=-".repeat(8))
console.log("Soma de 1 a 100")
console.log("=-".repeat(8))

let soma = 0

for (let numero = 1; numero <= 100; numero++) {
    soma = soma + numero
}

console.log(`Somando os números de 1 a 100, o resultado vai ser: ${soma}`)
console.log("=-".repeat(28))