const secondsArea = document.querySelector(".seconds")
const minutesArea = document.querySelector(".minutes")

var seconds = 15;
var minutes = 19;

let secondsTimer = setInterval(secondsCount, 1000);

function secondsCount() {
    
    if (seconds == 0) {
        seconds = 60;
        minutes--;
    }

    seconds--;

    secondsArea.innerText = seconds;
    minutesArea.innerText = minutes;
}

