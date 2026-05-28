// Crie um array com idades. Use filter para retornar apenas as idades maiores ou iguais a 18 e exiba o resultado. 

console.log("=-".repeat(11))
console.log("Filtrar valores altos")
console.log("=-".repeat(11))

const idades = [20, 15, 23, 33, 17]

const maioresDeidade = idades.filter((idade) => {
    return idade >= 18
})

console.log("Todas as idades", idades)
console.log("Maiores de idade:", maioresDeidade)
console.log("=-".repeat(19))