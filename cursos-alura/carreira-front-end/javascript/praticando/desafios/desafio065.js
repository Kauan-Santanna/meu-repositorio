// Crie dois objetos: um com nome e outro com idade. Combine-os em um terceiro objeto usando spread.

console.log("=-".repeat(14));
console.log("Spread operator com objetos");
console.log("=-".repeat(14));

const dados1 = { nome: "Kauan" };

const dados2 = { idade: 21 };

const perfil = { ...dados1, ...dados2 };

console.log(perfil);
console.log("=-".repeat(14));
