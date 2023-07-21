function getRandomHexColor () {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6,0)}`;
}

const body = document.querySelector('body');
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let timerID = null;
const colorSwitch = 1000;

startButton.addEventListener('click', startButtonColorChange);
stopButton.addEventListener('click', stopButtonColorChange);

function startButtonColorChange(){
    startButton.disabled = true;
    stopButton.disabled = false;
}

timerID = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();}
, colorSwitch);


function stopButtonColorChange(){
    startButton.disabled = false;
    stopButton.disabled = true;

    clearInterval(timerID);
}