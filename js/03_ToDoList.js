document.getElementById("todo-form").addEventListener("submit", function (e){
    e.preventDefault(); // Evita o recarregamento da página

    const input = document.getElementById("todo-input");
    const taskText = input.value.trim(); // Remove espaços em branco no inicio/fim
    
    if (taskText === ""){
        alert("Por favor, insira uma tarefa válida.");
        return;
    }

    addTask(taskText);
    input.value = ""; // Limpa o campo de input

});

function addTask(taskText) {
    const taskList = document.getElementById("todo-list");

    const li = document.createElement("li"); // cria o elemento no HTML, "li" vai criar um elemento tipo Lista.
    li.textContent = taskText;

    const removeBtn = document.createElement("button"); // add o botao Remover
    removeBtn.textContent = "Remover";
    removeBtn.addEventListener("click", function(){
        li.remove();
    });

    li.addEventListener("click", function() {
        li.classList.toggle("completed"); // marcar como "CONCLUIDA"
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);
}