let miliSec = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;
let laps = [];


function start() {
    let play = document.getElementById("play");
    
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
        play.innerText = "Play";
        return;
    }
    play.innerText = "Pause";

    timer = setInterval(() => {
        miliSec++;

        if (miliSec === 100) {
            miliSec = 0;
            seconds++;
        }

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        document.getElementById("timer").innerText =
            format(hours) + ":" + format(minutes) + ":" + format(seconds);
        document.getElementById("ms").innerText = format(miliSec);

    }, 10);
}

function lap() {
    if (timer === null) return;

    const lapTime =
        format(hours) + ":" +
        format(minutes) + ":" +
        format(seconds) + "." +
        format(miliSec);

    laps.push(lapTime);

    const lapList = document.getElementById("lapList");
    const li = document.createElement("li");
    li.innerText = `${lapTime}`;
    lapList.appendChild(li);
}


function reset() {
    clearInterval(timer);
    timer = null;

    miliSec = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    laps = [];

    document.getElementById("timer").innerText = "00:00:00";
    document.getElementById("ms").innerText = "00";
    document.getElementById("play").innerText = "Play";
    document.getElementById("lapList").innerHTML = "";
}


function format(num) {
    return num < 10 ? "0" + num : num;
}
