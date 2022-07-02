let milisec = 0;
let second = 0;
let min = 0;
let hour = 0;

let appendMilisec = document.getElementById("milisec");
let appendSec = document.getElementById("sec");
let appendMin = document.getElementById("min");
let appendHour = document.getElementById("hour");

let startButton = document.getElementById("btn1");
let stopButton = document.getElementById("btn2");
let resetButton = document.getElementById("btn3");

let interval; //for storing timer values

function start() {
    milisec++;
    if (milisec < 9) {
        appendMilisec.innerHTML = "0" + milisec;
    }
    if (milisec > 9) {
        appendMilisec.innerHTML = milisec;
    }
    if (milisec > 99) {
        second++;
        appendSec.innerHTML = "0" + second;
        milisec = 0;
        appendMilisec.innerHTML = "0" + 0;
    }
    if (second>9) {
        appendSec.innerHTML = second;
    }
    if (second > 59) {
        min++;
        appendMin.innerHTML = "0" + min;
        second = 0;
        appendSec.innerHTML = "0" + 0;
    }
    if (min > 9) {
        appendMin.innerHTML = min;
    }
    if (min > 59) {
        hour++;
        appendHour.innerHTML = "0" + hour;
        min = 0;
        appendMin.innerHTML = "0" + 0;
    }
}
startButton.onclick = function() {
    interval = setInterval(start, 10);
    startButton.onclick = "none";
}

stopButton.onclick = function() {
    clearInterval(interval);
}

resetButton.onclick = function() {
    clearInterval(interval);
    milisec = "00";
    second = "00";
    min = "00";
    hour = "00";
    appendMilisec.innerHTML = milisec;
    appendSec.innerHTML = second;
    appendMin.innerHTML = min;
    appendHour.innerHTML = hour;
    startButton.style.display = "inline";
    startButton.onclick = function() {
        interval = setInterval(start, 10);
        startButton.onclick = "none";
    };
}

//This function is for displaying current time
function displayTime() {
  let currentTime = new Date();
  document.getElementById("cutime").innerHTML = currentTime;
}
setInterval(displayTime, 1000);
