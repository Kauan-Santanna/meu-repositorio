console.log("=-".repeat(9));
console.log("Controle de Faltas");
console.log("=-".repeat(10));

let totalAulas = 90;
let totalFaltas = 21;

let limiteFaltas = totalAulas * 0.25;

console.log("Limite de faltas:", totalFaltas);
console.log("=-".repeat(14));

console.log("Ultrapassou o limite?", totalFaltas > limiteFaltas);
console.log("=-".repeat(14));
