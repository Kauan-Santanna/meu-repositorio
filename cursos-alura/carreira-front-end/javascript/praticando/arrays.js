const frutas = ["Maça", "Banana", "Abacaxi", "Uva", "Melancia"];
// maça = 0
// melancia = 4

console.log(frutas);

// console.log("Primeira fruta:", frutas[0])
// console.log("Ultima fruta:", frutas[4])

// console.log("Total de frutas:", frutas.length)

// frutas.push("Morango")

// console.log(`Nessa lista tem um total de ${frutas.length} frutas depois de adicionar morango.`)

// console.log("Ultima fruta:", frutas[frutas.length - 1])

// remover um item de uma array, (2 = a posição da fruta, 1 = apenas remover aquela fruta, ou seja, uma fruta)
// frutas.splice(2, 1)

// console.log("Depois de remover", frutas)

for (let i = 0; i < frutas.length; i++) {
  console.log("índice:", i);
  console.log(frutas[i]);
}

console.log("=-".repeat(12))

frutas.forEach((valor, indice) => {
     console.log("índice:", indice, valor)
});

console.log("=-".repeat(12))

for (const fruta of frutas) {
    console.log("fruta da vez:", fruta)
}