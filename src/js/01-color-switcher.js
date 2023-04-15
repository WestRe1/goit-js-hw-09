
const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');


buttonStart.addEventListener('click', onStartClick);
buttonStop.addEventListener('click', onStopClick);

const color = getRandomHexColor();

function onStartClick() {
    const timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
        
        if (!buttonStart.hasAttribute("disabled")) {
            clearInterval(timerId)
        }
    }, 1000);
    buttonStart.setAttribute("disabled", "true")
};

function onStopClick() {
    if (buttonStart.hasAttribute("disabled")) {
        buttonStart.removeAttribute("disabled")
}
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};