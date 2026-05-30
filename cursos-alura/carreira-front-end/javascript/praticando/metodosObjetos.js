const pessoa = {
  nome: "Kauan",
  idade: 21,
  pets: ["Mel", "Pantera"],
  nacionalidade: "Brasileiro",
};

for (const chave in pessoa) {
  console.log("Chave:", chave);
  console.log("Valor:", pessoa[chave]);
}

const chaves = Object.keys(pessoa);
const valores = Object.values(pessoa);
const entradas = Object.entries(pessoa);

console.log("Chaves:", chaves);
console.log("Valores:", valores);
console.log("Chaves/Valores:", entradas);
