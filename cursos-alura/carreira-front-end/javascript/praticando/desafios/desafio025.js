// Simule a digitação de números usando uma variável numeroDigitado.
// Use um do...while para repetir a execução até que o valor seja 0.
// Conte quantos números diferentes de zero foram digitados e mostre o total no console ao final.

console.log("=-".repeat(15));
console.log("Receber números até digitar 0");
console.log("=-".repeat(15));

let numeroDigitado = 3;
let contador = 0;

do {
  console.log("Número digitado:", numeroDigitado);
  if (numeroDigitado != 0) {
    contador++;
    numeroDigitado--;
  }
} while (numeroDigitado != 0);

console.log("Número digitado:", numeroDigitado);

console.log("=-".repeat(23));
console.log(`Foram digitados ${contador} números diferentes de zero.`);
console.log("=-".repeat(23));
