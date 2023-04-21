const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

buttonStart.addEventListener('click', onStartClick);
buttonStop.addEventListener('click', onStopClick);
buttonStop.disabled = true;

const color = getRandomHexColor();

function onStartClick() {
  const timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();

    if (!buttonStart.hasAttribute('disabled')) {
      clearInterval(timerId);
    }
  }, 1000);
  buttonStart.disabled = true;
  buttonStop.disabled = false;
}

function onStopClick() {
  buttonStart.disabled = false;
  buttonStop.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
