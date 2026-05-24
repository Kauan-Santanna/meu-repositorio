const frutas = ["Maça", "Banana", "Abacaxi", "Uva", "Melancia"];
// maça = 0
// melancia = 4


console.log(frutas)

console.log("Primeira fruta:", frutas[0])
console.log("Ultima fruta:", frutas[4])

console.log("Total de frutas:", frutas.length)

frutas.push("Morango")

console.log(`Nessa lista tem um total de ${frutas.length} frutas depois de adicionar morango.`)

console.log("Ultima fruta:", frutas[frutas.length - 1])