const secondsArea = document.querySelector(".seconds")
const minutesArea = document.querySelector(".minutes")
const messageArea = document.querySelector(".message")


var userMinutes = 0;

var seconds = 5;
var minutes = userMinutes;
var isPaused = false;



function startCount() {
    let secondsTimer = setInterval(secondsCount, 1000);

    function secondsCount() {

        if (seconds == 0) {
            seconds = 60;
            minutes--;

            if (minutes < 0) {
                breakTime();
            }

        }

        seconds--;

        secondsArea.innerText = seconds;
        minutesArea.innerText = minutes;


    }
}

function breakTime() {
    isPaused = !isPaused;

    if (isPaused) {
        messageArea.innerText = "Take a break!"
        seconds = 5;
        minutes = 0;
    } else {
        messageArea.innerText = "Keep on working!"
        seconds = 5;
        minutes = userMinutes;
    }
}
