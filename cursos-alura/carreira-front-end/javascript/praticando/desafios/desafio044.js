// Crie um array com 10 números. Use for para somar todos os valores e mostrar o total no final. 

console.log("=-".repeat(11))
console.log("Somar todos os números")
console.log("=-".repeat(11))

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let soma = 0

for (let i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i]
}

console.log(`A soma total dos números é: ${soma}`)
console.log("=-".repeat(15))