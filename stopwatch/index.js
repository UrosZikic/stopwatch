let tens = document.querySelector(".tens");
let seconds = document.querySelector(".seconds");
let minutes = document.querySelector(".minutes");
let appendtens = 0;
let appendseconds = 0;
let appendminutes = 0;
let interval;
let btnStart = document.querySelector(".start");

btnStart.onclick = function () {
  clearInterval(interval);
  interval = setInterval(startIt, 10);
};

function startIt() {
  if (appendtens < 9) {
    appendtens += 1;
    tens.innerHTML = "0" + appendtens;
  }
  if (appendtens >= 9 && appendtens < 99) {
    appendtens += 1;
    tens.innerHTML = appendtens;
  }
  if (appendtens === 99 && appendseconds < 9) {
    appendtens = 0;
    tens.innerHTML = "00";
    appendtens += 1;
    tens.innerHTML = "0" + appendtens;
    appendseconds += 1;
    seconds.innerHTML = "0" + appendseconds;
  }
  if (appendseconds >= 9 && appendtens === 99) {
    appendtens = 0;
    tens.innerHTML = "00";
    appendtens += 1;
    tens.innerHTML = "0" + appendtens;
    appendseconds += 1;
    seconds.innerHTML = appendseconds;
  }
  if (appendseconds > 59 && appendtens <= 99) {
    appendtens = 0;
    appendseconds = 0;
    tens.innerHTML = appendtens;
    seconds.innerHTML = appendseconds;
    appendminutes += 1;
    minutes.innerHTML = appendminutes;
  }
}

function pauseIt() {
  clearInterval(interval);
}
var restartIt = (document.querySelector(".restart").onclick =
  function resetIt() {
    clearInterval(interval);
    appendtens = 0;
    appendseconds = 0;
    tens.innerHTML = "00";
    seconds.innerHTML = "00";
  });
