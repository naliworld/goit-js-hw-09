function getRandomHexColor () {
    return `${Math.floor(Math.random() * 16777215) .toString(16).padStart(6,0)}`;
}

const refs = {
    start: document.querySelector('button[data-start'),
    stop: document.querySelector('button[data-stop'),
};

refs.start.addEventListener('click', onClickColorChange);
let buttonStatus = true;
let intervalid = null;

function onClickColorChange(){
    const changeBackground = () =>
    (document.querySelector('body').style.backgroundColor = getRandomHexColor());

    intervalid = setInterval(changeBackground, 1000);
    if (buttonStatus) {
        refs.start.setAttribute('disabled', 'disabled');
        buttonStatus = false;
    }
}

refs.stop.addEventListener('click', onClickColorChange);

function onClickStopColorChange() {
    clearInterval(intervalid);
    if (!buttonStatus) {
        refs.stop.removeAttribute('disabled');
        buttonStatus = true;
    }
}
