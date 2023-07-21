function getRandomHexColor () {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6,0)}`;
}

const body = document.querySelector('body');
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
stopButton.disabled = true;

let timerID = null;

startButton.addEventListener('click', startButtonColorChange);
stopButton.addEventListener('click', stopButtonColorChange);

function startButtonColorChange(){
    timerID = setInterval(ColorChange, 1000);
    startButton.toggleAttribute('disabled');
}

function stopButtonColorChange(){
    clearInterval(timerID);
    startButton.removeAttribute('disabled');
}
    
function ColorChange(){
    body.style.backgroundColor=getRandomHexColor();
}

