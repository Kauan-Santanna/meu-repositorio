// Percorra o array e exiba apenas os nomes das pessoas com 18 anos ou mais.

console.log("=-".repeat(13));
console.log("Filtrando maiores de idade");
console.log("=-".repeat(13));

const pessoa1 = {
  nome: "Vitor",
  idade: 16,
  estado: "São Paulo",
};

const pessoa2 = {
  nome: "Paulo",
  idade: 31,
  estado: "Paraná",
};

const pessoa3 = {
  nome: "Robson",
  idade: 40,
  estado: "Rio Grande do Sul",
};

const pessoas = [pessoa1, pessoa2, pessoa3];

for (const pessoa of pessoas) {
  if (pessoa.idade >= 18) {
    console.log(`${pessoa.nome} é maior de idade!`);
  }
}

console.log("=-".repeat(13));
