const secondsArea = document.querySelector(".seconds")
const minutesArea = document.querySelector(".minutes")
const messageArea = document.querySelector(".message")
const btn = document.getElementById('btn');
const startBtn = document.getElementById('startBtn');


btn.addEventListener('click', function onClick(event) {
  event.target.style.backgroundColor = "#e6e6e6";
});

startBtn.addEventListener('click', function onClick(event) {
    event.target.style.backgroundColor = "#b3d9c3";
});


var userMinutes = 0;
var seconds = 0;
var minutes = userMinutes;
var isPaused = false;
var isStopped = false;


function startCount() {
    let secondsTimer = setInterval(secondsCount, 1000);     //Set interval timer
    minutes = userMinutes;

    function secondsCount() {

        if (seconds == 0) {     //Minute counter
            seconds = 60;
            minutes--;
        }

        if (minutes < 0) {  //Break time when time is up
            breakTime();
        }

        seconds--;  //Count down seconds

        secondsArea.innerText = seconds < 10 ? "0"+seconds : seconds;
        minutesArea.innerText = minutes < 10 ? "0"+minutes : minutes;

        if (isStopped) {    //Stop timer, reset text fields
            clearInterval(secondsTimer);
            isStopped = !isStopped;
            seconds = 0;
            secondsArea.innerText = "";
            minutesArea.innerText = "";
            messageArea.innerText = "";
        }

    }
}

function breakTime() {  //Change timer to 5 minutes for break
    isPaused = !isPaused;

    if (isPaused) {
        console.log("Breaktime")
        messageArea.innerText = "Take a break!"
        seconds = 60;
        minutes = 4;
    } else {
        messageArea.innerText = "Keep on working!"  //Reset timer after break
        seconds = 5;
        minutes = userMinutes;
    }
}

function hide() {
    result.classList.add("hidden")
}

function show() {
    result.classList.remove("hidden")
}