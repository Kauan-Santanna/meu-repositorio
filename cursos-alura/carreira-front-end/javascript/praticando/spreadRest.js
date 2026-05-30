let pessoa1 = {
    nome: "Kauan",
    idade: 21,
    profissao: "Dev"
}

const pessoa2 = {...pessoa1}

pessoa2.nome = "Ruberval"
pessoa2.idade = 23

console.log(pessoa2)

pessoa1 = {
    ...pessoa2,
    profissao: "Dev Pleno",
    possuiCNH: true
}

console.log(pessoa1)

const {nome, ...restante} = pessoa1

console.log(nome)
console.log(restante)