//
let start = document.querySelector('#start');
let reset = document.querySelector('#reset');
let counter = document.querySelector("#counter");
let cents = 0;
let seconds = 0;
let minutes = 0;
let centsFormated = 0;
let secondsFormated = 0;
let timerId = null;
let isRunning = false;

start.addEventListener("click", function() 
{
    if(isRunning === true)
    {
        clearInterval(timerId);
        document.getElementById("start").textContent = "Continue";
        counter.classList.remove("running");
        isRunning = false;
    }

    else
    {
        timerId = setInterval(updateClock, 10);
        document.getElementById("start").textContent = "Pause";
        counter.classList.add("running");
        isRunning = true;
    }
})

reset.addEventListener("click", function() 
{
    clearInterval(timerId);
    timerId = null;
    cents = 0;
    document.getElementById("counter").textContent = "00:00:00";
    document.getElementById("start").textContent = "Start";
})

function updateClock(){
    cents++;
    seconds = Math.floor(cents/100);
    minutes = Math.floor(seconds/60);
    centsFormated = cents % 100;
    secondsFormated = seconds % 60;

    document.getElementById("counter").textContent =
    `${String(minutes).padStart(2,'0')}:${String(secondsFormated).padStart(2,'0')}:${String(centsFormated).padStart(2,'0')}`;
}







