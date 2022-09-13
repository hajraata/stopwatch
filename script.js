let timeElement = document.querySelector(".watch .time");
let btnStart = document.querySelector(".btn-start");
let btnStop = document.querySelector(".btn-stop");
let btnReset = document.querySelector(".btn-reset");

let seconds = 0;
let interval = null;

btnStart.addEventListener("click", start);
btnStop.addEventListener("click", stop);
btnReset.addEventListener("click", reset);

function timer() {
  seconds++;

  let hr = Math.floor(seconds / 3600);
  let min = Math.floor((seconds - hr * 3600) / 60);
  let secs = Math.floor(seconds % 60);

  if (secs < 10) secs = "0" + secs;
  if (min < 10) min = "0" + min;
  if (hr < 10) hr = "0" + hr;

  timeElement.innerText = `${hr}:${min}:${secs}`;
}

function start() {
  if (interval) {
    return;
  }

  interval = setInterval(timer, 1000);
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  stop();
  seconds = 0;

  timeElement.innerText = `00:00:00`;
}
