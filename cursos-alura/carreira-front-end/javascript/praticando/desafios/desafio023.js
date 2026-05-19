// Peça um número e mostre a tabuada desse número (de 1 a 10) usando um for.

console.log("=-".repeat(11));
console.log("Tabuada personalizada");
console.log("=-".repeat(11));

let tabuada = 2;

for (let numero = 1; numero <= 10; numero++) {
  console.log(`${tabuada} x ${numero} = ${tabuada * numero}`);
}
console.log("=-".repeat(11));
