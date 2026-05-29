// Crie dois arrays:

//     um array com nomes de tarefas
//     outro array com valores booleanos indicando se a tarefa foi concluída (true ou false)

// Utilize o método filter para criar um novo array contendo apenas as tarefas que não foram concluídas.
// Exiba a lista de tarefas pendentes no console.

console.log("=-".repeat(8));
console.log("Lista de tarefas");
console.log("=-".repeat(8));

const tarefas = ["Estudar", "Leitura", "Academia"];
const checkTarefas = [true, false, true];

let tarefasPendentes = tarefas.filter(function (tarefa, index) {
  return checkTarefas[index] === false;
});

console.log("Tarefas pendentes:", tarefasPendentes);
console.log("=-".repeat(16));
