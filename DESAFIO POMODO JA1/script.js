const buttonPlay = document.querySelector('.play');
const buttonStop = document.querySelector('.stop');
const ButtonAddTimer = document.querySelector('.adiciona');
const buttonDiminuiTimer = document.querySelector('.diminui');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
let timerTimeOut;

function countdonw() {
  secondsDisplay.textContent = '00';

  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);

    if (seconds <= 0) {
      seconds = 2;

      minutesDisplay.textContent = String(minutes - 1).padStart(2, '0');
    }
    secondsDisplay.textContent = String(seconds - 1).padStart(2, '0');

    if (minutes <= 0) {
      return;
    }

    countdonw();
  }, 1000);
}

buttonPlay.addEventListener('click', function () {
  countdonw();
});

ButtonAddTimer.addEventListener('click', function () {
  minutesDisplay.textContent = Number(minutesDisplay.textContent) + 05;
});

buttonDiminuiTimer.addEventListener('click', function () {
  minutesDisplay.textContent = Number(minutesDisplay.textContent) - 5;
});

buttonStop.addEventListener('click', function () {
  clearTimeout(timerTimeOut);
});
