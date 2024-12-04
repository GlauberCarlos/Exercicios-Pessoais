let previousNumber = "";
let currentNumber = "";
let currentOperator = "";
let resultDisplayed = false;

document.querySelectorAll(".number").forEach(button => {
  button.addEventListener("click", function () {
    if (resultDisplayed) {
      currentNumber = this.textContent; // Reinicia o valor para começar nova operação
      resultDisplayed = false; // Permite novos cálculos
    } else {
      currentNumber += this.textContent; // Concatena números
    }
    updateDisplay(); // Atualiza a tela com o operador e números
  });
});

document.querySelectorAll(".operator").forEach(button => {
  button.addEventListener("click", function () {
    if (previousNumber && currentNumber && !resultDisplayed) {
      calculate(); // Realiza cálculo anterior
    }

    currentOperator = this.textContent;

    // Se `currentNumber` estiver vazio, não deve ser zerado
    if (!currentNumber && previousNumber) {
      updateDisplay(); // Mostra o operador sem alterar os números
      return;
    }

    previousNumber = currentNumber || previousNumber; // Usa currentNumber se disponível
    currentNumber = ""; // Prepara para próximo número
    updateDisplay(); // Atualiza o display
  });
});

document.getElementById("comma").addEventListener("click", function () {
  // Verifica se já existe uma vírgula no número atual
  if (!currentNumber.includes(",")) {
    currentNumber += ","; // Adiciona a vírgula
    updateDisplay(currentNumber); // Atualiza a tela
  }
});

document.getElementById("clear").addEventListener("click", function() {
  previousNumber = "";
  currentNumber = "";
  currentOperator = "";
  resultDisplayed = false;
  updateDisplay("0"); // Reset display
});

document.getElementById("backspace").addEventListener("click", function() {
  currentNumber = currentNumber.slice(0, -1); // Remove o último caractere
  updateDisplay(currentNumber || "0"); // Mostra 0 se vazio
});

document.getElementById("equals").addEventListener("click", function() {
  if (previousNumber && currentNumber) {
    calculate(); // Realiza o cálculo e exibe o resultado
    resultDisplayed = true; // Marca que o resultado foi exibido
  }
});

function calculate() {
  const num1 = parseFloat(previousNumber.replace(",", "."));  // Substitui vírgula por ponto
  const num2 = parseFloat(currentNumber.replace(",", "."));   // Substitui vírgula por ponto
  let result;

  switch (currentOperator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "x":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Erro"; // Evita divisão por zero
      break;
    default:
      return;
  }

  previousNumber = result.toFixed(10).replace(/\.?0+$/, ""); // Arredonda e remove zeros
  currentNumber = "";
  currentOperator = "";
  updateDisplay(previousNumber); // Exibe resultado
}


function updateDisplay() {
  const display = `${previousNumber} ${currentOperator} ${currentNumber}`;
  document.getElementById("resultCalc").textContent = display.trim(); // Remover espaços extras
}
