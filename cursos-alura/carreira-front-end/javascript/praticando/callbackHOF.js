// HOF -> Higher-Order Function === função que recebe outra função como parametro

function calcular(numero1, numero2, operacao) {
    return operacao(numero1, numero2)
}

function soma(num1, num2) {
    return num1 + num2
}

function subtracao(num1, num2) {
    return num1 - num2
}

function divisao(num1, num2) {
    return num1 / num2
}

function multiplicacao(num1, num2) {
    return num1 * num2
}

const resultadoSoma = calcular(10, 2, soma) // soma é um callback
console.log("Resultado da soma:", resultadoSoma)

const resultadoSubtracao = calcular(10, 2, subtracao) // subtração é um callback
console.log("Resultado da subtração:", resultadoSubtracao)

const resultadoDivisao = calcular(10, 2, divisao) // divisão é um callback
console.log("Resultado da divisão:", resultadoDivisao)

const resultadoMultiplicacao = calcular(10, 2, multiplicacao) // multiplicação é um callback
console.log("Resultado da multiplicação:", resultadoMultiplicacao)