let primeiroNumero = ""; // Armazena o primeiro número antes do operador
let numeroAtual = ""; // Armazena o número atual que o usuário digita

// Função para lidar com a entrada dos números
document.querySelectorAll(".number").forEach(button => {
  button.addEventListener("click", function() {
    numeroAtual += this.innerText;  // Concatena o número digitado
    document.getElementById("resultCalc").innerText = numeroAtual;  // Exibe o número no resultado
  });
});

// Função para lidar com os operadores
document.querySelectorAll(".operator").forEach(button => {
  button.addEventListener("click", function() {
    if (numeroAtual !== "") {
      primeiroNumero = numeroAtual; // Armazena o número antes de clicar no operador
      numeroAtual = "";  // Reinicia o número atual para a próxima entrada
    }
    operador = this.innerText; // Armazena o operador
    document.getElementById("resultCalc").innerText = primeiroNumero + " " + operador;  // Exibe o número + operador
  });
});

// PAREI NAS ENTRADAS, preciso fazer que o numeroAtual após clicar no operador permaceça, até que clique em outro operador ou no =