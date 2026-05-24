// Comece com um array de frutas. Adicione uma nova fruta ao final com push() e remova a primeira com shift(). Mostre o array antes e depois. 

console.log("=-".repeat(13))
console.log("Adicionar e remover itens")
console.log("=-".repeat(13))

const frutas = ["Uva", "Banana", "Melancia"]

console.log("Lista de frutas antes:", frutas)

frutas.push("Maça")
frutas.shift()

console.log("Lista de frutas depois:", frutas)