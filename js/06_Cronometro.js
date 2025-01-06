//
let start = document.querySelector('#start');
let reset = document.querySelector('#reset');
let counter = document.querySelector("#counter");
let historyTitle = document.querySelector("#historyTitle");
let cents = 0;
let seconds = 0;
let minutes = 0;
let centsFormated = 0;
let secondsFormated = 0;
let timerId = null;
let isRunning = false;
let history = null;
let historyList = null;

start.addEventListener("click", function() 
{
    if(isRunning === true) // PAUSA O CRONOMETRO
    {
        clearInterval(timerId);
        document.getElementById("start").textContent = "Continue";
        counter.classList.remove("running");
        isRunning = false;

        historyTitle.textContent = "Laps"

        history = document.getElementById("history");
        historyList = document.createElement("li");
        historyList.textContent = counter.textContent;
        history.appendChild(historyList);
    }

    else
    {
        timerId = setInterval(updateClock, 10);
        document.getElementById("start").textContent = "Pause";
        counter.classList.add("running");
        isRunning = true;
    }
})

// parte do MODAL

const modal = document.getElementById("reset-modal");
const confirmReset = document.getElementById("confirm-reset");
const cancelReset = document.getElementById("cancel-reset");

reset.addEventListener("click", function() {
    modal.style.display = "flex";
});

cancelReset.addEventListener("click", function() {
    modal.style.display = "none";
});

confirmReset.addEventListener("click", function() 
{
    modal.style.display = "none";

    clearInterval(timerId);
    timerId = null;
    cents = 0;
    document.getElementById("counter").textContent = "00:00:00";
    document.getElementById("start").textContent = "Start";
    history.replaceChildren();
    historyTitle.textContent = ""
})

// funcao principal para rodar o cronometro

function updateClock(){
    cents++;
    seconds = Math.floor(cents/100);
    minutes = Math.floor(seconds/60);
    centsFormated = cents % 100;
    secondsFormated = seconds % 60;

    document.getElementById("counter").textContent =
    `${String(minutes).padStart(2,'0')}:${String(secondsFormated).padStart(2,'0')}:${String(centsFormated).padStart(2,'0')}`;
}







