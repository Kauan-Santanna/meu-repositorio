function saudacao() {
  console.log("E aí, beleza?");
}

// setTimeout(saudacao, 2000) // ms -> 1 segundo = 1000

let contador = 0;

const id = setInterval(() => {
  contador++;
  console.log("Tempo decorrido (em segundos):", contador);
  if (contador === 10) {
    clearInterval(id);
    console.log("Fim!")
  }
}, 1000);
