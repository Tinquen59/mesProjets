const decreaseCounter = document.getElementById("decreaseCounter");
const increaseCounter = document.getElementById("increaseCounter");

let counter = document.getElementById("counter");
counter.textContent = 0;

const changeValue = 1;

let calcul = Number(counter.textContent);

increaseCounter.addEventListener("click", () => {
  calcul += changeValue;
  counter.textContent = calcul;
});

decreaseCounter.addEventListener("click", () => {
  if (counter.textContent > 0) {
    calcul -= changeValue;
    counter.textContent = calcul;
  } else alert("Vous ne pouvez pas dessendre en dessous de 0");
});

// ------------------------------------------------------------------------

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById('reset')

let stopwatch = document.getElementById("stopwatch");

let minutes = [0, 0];
let seconds = [0, 0];

let changeTime;
let stopwatchIsActive = false;


stopwatch.textContent = `${minutes.join("")} : ${seconds.join("")}`;

const counterTime = () => {
  changeTime = setInterval(() => {
    if (Number(minutes.join("")) <= 23 && Number(seconds.join("")) <= 59) {
      if (seconds[1] < 9) {
        seconds[1]++;
      } else {
        seconds[1] = 0;
        seconds[0]++;
      }

      if (seconds[0] === 6 && seconds[1] === 0) {
        minutes[1]++;
        seconds[1] = 0;
        seconds[0] = 0;
      }

      if (minutes[1] > 9) {
        minutes[0]++;
        minutes[1] = 0;
      }

      if (minutes.join("") == 24) {
        alert("ça fait 24h que vous êtes sur le chronomètre");
        clearInterval(changeTime);
        resetStopwatch()
      }
    } else {
      resetStopwatch()
    }

    stopwatch.textContent = `${minutes.join("")} : ${seconds.join("")}`;
  }, 1000);
}

const resetStopwatch = () => {
  minutes = [0, 0];
  seconds = [0, 0];

  stopwatch.textContent = `${minutes.join("")} : ${seconds.join("")}`;
}

start.addEventListener("click", () => {
  if (stop.style.display = "none") {
    reset.style.display = 'none'
    stop.style.display = 'block'
  }
  
  if (stopwatchIsActive === false) {
    counterTime();
    stopwatchIsActive = true
  }
});

stop.addEventListener("click", () => {
  clearInterval(changeTime);
  stopwatchIsActive = false

  if (seconds[1] > 0) {
    stop.style.display = 'none'
    reset.style.display = 'block'
  }
});

reset.addEventListener('click', () => {
  resetStopwatch()

  reset.style.display = 'none'
  stop.style.display = 'block'
})
