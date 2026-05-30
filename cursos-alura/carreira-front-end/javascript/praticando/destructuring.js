const pessoa = {
    nome: "Kauan",
    idade: 21,
    profissao: "Analista de P&D"
}

const {nome, idade} = pessoa

console.log(nome)
console.log(idade)

function saudacao({ nome, idade }) {
    console.log(`Olá, ${nome}!`)
    if (idade >= 18) {
        console.log("Maior de idade")
    }
}

saudacao(pessoa)

const frutas = ["Uva", "Banana"]

const [primeira, segunda] = frutas

console.log(primeira)