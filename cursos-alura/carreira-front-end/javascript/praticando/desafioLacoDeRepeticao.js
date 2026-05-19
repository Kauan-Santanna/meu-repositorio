// contar quantos numeros pares e quantos numeros impares nós temos entre 0 e 100

let numero = 0;
let totalNumerosPares = 0;
let totalNumerosImpares = 0;

// laço de repetição

while (numero <= 100) {
  if (numero % 2 == 0) {
    totalNumerosPares++;
  } else {
    totalNumerosImpares++;
  }
  numero++;
}

console.log(`O total de números pares encontrado foi de ${totalNumerosPares}`);
console.log(`O total de números impares encontrado foi ${totalNumerosImpares}`);
