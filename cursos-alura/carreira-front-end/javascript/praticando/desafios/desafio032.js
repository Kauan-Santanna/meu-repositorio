// Crie uma função apresentarPessoa(nome, idade) que exibe no console: "Olá, meu nome é [nome] e tenho [idade] anos." 

import chalk from "chalk"

console.log(chalk.blue("=-".repeat(11)))
console.log(chalk.cyan("Função com parâmetros"))
console.log(chalk.blue("=-".repeat(11)))

function apresentarPessoa(nome, idade) {
    console.log(
        chalk.cyan("Olá, meu nome é ") +
        chalk.white(`${nome} `) + 
        chalk.cyan("e tenho ") + 
        chalk.white(`${idade} `) + 
        chalk.cyan("anos.")
)}

const nome = "Kauan"
const idade = 21

apresentarPessoa(nome, idade)
console.log(chalk.blue("=-".repeat(19)))