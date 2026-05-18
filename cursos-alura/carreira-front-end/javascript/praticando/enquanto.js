// let numero = 1

// do {
//     console.log("Número atual:", numero)
//     numero++
// } while (numero <= 10)

// let contador = 1;

// while (contador <= 10) {
//   console.log("Número atual:", contador);
//   contador++;
// }

// let numero = 0;

// while (numero <= 15) {
//   if (numero % 2 == 0) {
//     console.log("Número par encontrado:", numero);
//   }

//   numero++;
// }

let numero = 0;

while (numero <= 15) {
  if (numero % 2 !== 0) {
    console.log("Número impar encontrado:", numero);
  }

  numero++;
}

let palavra = "calopsita";
let contador = 0;

while (contador < palavra.length) {
  console.log(palavra[contador]);
  contador++;
}
