// (let contador = 1 <- começa a contar no 1)
// (let contador <= 5 <- conta até o número 10)
// (let contador++, conta de 1 em 1)
// for (let contador = 0; contador <= 10; contador++) {
//   console.log("Número atual:", contador);
// }

// procura apenas os números pares
for (let numero = 0; numero <= 15; numero++) {
  if (numero % 2 == 0) {
    console.log("Número par encontrado:", numero);
  }
}

// procura apenas os números impares
for (let numero = 0; numero <= 15; numero++) {
  if (numero % 2 > 0) {
    console.log("Número ímpar encontrado:", numero);
  }
}

palavra = "calopsita";

// palavra.lenght indica quantos caracteres uma string possui
// palavra[1] - pega a letra na posição indicada
for (let contador = 0; contador < palavra.length; contador++) {
  console.log(palavra[contador]);
}
