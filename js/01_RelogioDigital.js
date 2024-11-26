//
let is12HourFormat = false;

let btn12 = document.querySelector('#button12');
let btn24 = document.querySelector('#button24');

btn12.addEventListener("click", function() {
    is12HourFormat = true;
}
);

btn24.addEventListener("click", function() {
    is12HourFormat = false;
}
);

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    let period = "";

    if (is12HourFormat) {
        period = hours >= 12 ? "pm" : "am";
        hours = hours % 12 || 12;
    }

    hours = String(hours).padStart(2,"0");

    const clock = document.getElementById("clock");
    clock.textContent = is12HourFormat
        ? `${hours}:${minutes}:${seconds} ${period}`
        : `${hours}:${minutes}:${seconds}`;
    
    const day = String(now.getDate()).padStart(2, "0");
    const monthNumber = now.getMonth();
    const year = String(now.getFullYear());
    
    const month = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];   
    const monthName = month[monthNumber];
    
    const date = document.getElementById("date");
    date.textContent = `${day} de ${monthName} de ${year}`;
    
}

setInterval(updateClock, 1000);
updateClock();


