// Crie um array com nomes de usuários. Use forEach para imprimir "Olá, [nome]!" para cada um. 

console.log("=-".repeat(18))
console.log("Mensagens personalizadas com forEach")
console.log("=-".repeat(18))

const nomes = ["João", "Pedro", "Erick", "Maria"]

// array.forEach((item) => {})
nomes.forEach((nome) => {
    console.log(`Olá, ${nome}!`)
})

console.log("=-".repeat(6))