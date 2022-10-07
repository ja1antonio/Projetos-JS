import { sounds } from './sounds.js';

const buttonPlay = document.querySelector('.play');
const buttonStop = document.querySelector('.stop');
const ButtonAddTimer = document.querySelector('.adiciona');
const buttonDiminuiTimer = document.querySelector('.diminui');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
let timerTimeOut;

function countdonw() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);

    secondsDisplay.textContent = '00';

    if (seconds <= 0) {
      seconds = 60;

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
  if (
    Number(minutesDisplay.textContent) === 0 &&
    Number(secondsDisplay.textContent) === 0
  ) {
    return;
  } else {
    countdonw();
  }
});

ButtonAddTimer.addEventListener('click', function () {
  minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5;

  if (Number(minutesDisplay.textContent) < 10) {
    minutesDisplay.textContent = String(
      minutesDisplay.textContent.padStart(2, '0')
    );
  }
});

buttonDiminuiTimer.addEventListener('click', function () {
  if (Number(minutesDisplay.textContent) >= 5) {
    minutesDisplay.textContent = Number(minutesDisplay.textContent) - 5;
  } else {
    minutesDisplay.textContent = '00';
    secondsDisplay.textContent = '00';
  }

  if (Number(minutesDisplay.textContent) < 10) {
    minutesDisplay.textContent = String(
      minutesDisplay.textContent.padStart(2, '0')
    );
  }
});

buttonStop.addEventListener('click', function () {
  clearTimeout(timerTimeOut);
});

// Botões de controle de música

let btnFlorest = document.querySelector('#florestBackground');
let iconFlorest = document.querySelector('#iconFlorest');
btnFlorest.addEventListener('click', () => {
  if (
    btnFlorest.classList.contains('active') &&
    iconFlorest.classList.contains('iconActive')
  ) {
    btnFlorest.classList.remove('active');
    iconFlorest.classList.remove('iconActive');
  } else {
    btnFlorest.classList.add('active');
    iconFlorest.classList.add('iconActive');
  }

  sounds().pressForest();
});

let btnCoffe = document.querySelector('#coffeBackground');
let iconCoffe = document.querySelector('#iconCoffe');
btnCoffe.addEventListener('click', () => {
  if (
    btnCoffe.classList.contains('active') &&
    iconCoffe.classList.contains('iconActive')
  ) {
    btnCoffe.classList.remove('active');
    iconCoffe.classList.remove('iconActive');
  } else {
    btnCoffe.classList.add('active');
    iconCoffe.classList.add('iconActive');
  }

  sounds().pressCoffe();
});

let btnRain = document.querySelector('#rainBackground');
let iconRain = document.querySelector('#iconRain');
btnRain.addEventListener('click', () => {
  if (
    btnRain.classList.contains('active') &&
    iconRain.classList.contains('iconActive')
  ) {
    btnRain.classList.remove('active');
    iconRain.classList.remove('iconActive');
  } else {
    btnRain.classList.add('active');
    iconRain.classList.add('iconActive');
  }

  sounds().pressRain();
});

let btnFire = document.querySelector('#fireBackground');
let iconFire = document.querySelector('#iconFire');
btnFire.addEventListener('click', () => {
  if (
    btnFire.classList.contains('active') &&
    iconFire.classList.contains('iconActive')
  ) {
    btnFire.classList.remove('active');
    iconFire.classList.remove('iconActive');
  } else {
    btnFire.classList.add('active');
    iconFire.classList.add('iconActive');
  }

  sounds().pressFire();
});