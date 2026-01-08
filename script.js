let miliSec = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;

function start() {
    let play = document.getElementById("play");

    // PAUSE
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
        play.innerText = "Play";
        return;
    }

    // PLAY
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

function reset() {
    clearInterval(timer);
    timer = null;

    miliSec = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById("timer").innerText = "00:00:00";
    document.getElementById("ms").innerText = "00";
    document.getElementById("play").innerText = "Play";
}

function format(num) {
    return num < 10 ? "0" + num : num;
}
