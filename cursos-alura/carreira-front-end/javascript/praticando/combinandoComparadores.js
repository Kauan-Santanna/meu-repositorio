const idade = 21;
const maiorDeIdade = idade >= 18;
const possuiCNH = false;

const podeDirigir = maiorDeIdade && possuiCNH; // AND

console.log("Pode dirigir?", podeDirigir);

const podeViajarSozinha = maiorDeIdade || possuiCNH;

console.log("Pode viajar sozinha?", podeViajarSozinha); // OR

const precisaDeAcompanhante = !maiorDeIdade;

console.log("Precisa de acompanhante?", precisaDeAcompanhante);

// AND &&
// OR ||
// NOT !