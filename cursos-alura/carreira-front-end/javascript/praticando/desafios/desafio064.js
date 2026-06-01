// Crie dois arrays de frutas e combine-os usando o operador spread.

console.log("=-".repeat(13));
console.log("Spread operator com arrays");
console.log("=-".repeat(13));

const frutas = ["Maça", "Uva"];
const maisFrutas = ["Melancia", "Goiaba"];

const todasAsFrutas = [...frutas, ...maisFrutas];

console.log(todasAsFrutas);
console.log("=-".repeat(20));
