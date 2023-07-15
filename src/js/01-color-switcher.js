function getRandomHexColor () {
    return `${Math.floor(Math.random() * toString(16).padStart(6,0))}`;
}

const startButton = document.querySelectorAll(`[data-start]`);
const stopButton = document.querySelectorAll(`[data-stop]`);
const bodyEl = document.querySelector('body');

let timer = null;

startButton.addEventListener('click', onStart);
stopButton.addEventListener('click', onStop);

function onStart(){
    timer = setInterval(getBgColor, 1200);
    startButton.toggleAttribute('disabled');
}

function onStop() {
    clearInterval(timer);
    startButton.removeAttribute('diabled');
}

function getBgColor() {
    bodyEl.style.backgroundColor = getRandomHexColor();
}