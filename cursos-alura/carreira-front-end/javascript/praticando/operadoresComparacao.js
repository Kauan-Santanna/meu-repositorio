const idadeVinny = 36;
const minhaIdade = "36";

// operador igualdade
// const comparacao = idadeVinny == minhaIdade;
const comparacao = idadeVinny != minhaIdade;

// maior que
// const comparacao = idadeVinny > minhaIdade

// menor que
// const comparacao = idadeVinny < minhaIdade;

console.log("São diferentes?", comparacao);

const idade = 21;
const idadeIrmao = 24;

const souMaiorDeIdade = idade >= 18;
const irmaoMaiorDeIdade = idadeIrmao >= 18;

console.log("Sou maior de idade?", souMaiorDeIdade);
console.log("Meu irmão é maior de idade?", irmaoMaiorDeIdade);

// comparação estrita

const comparacaoEstrita = minhaIdade !== idadeVinny
console.log("São estritamente diferentes?", comparacaoEstrita)