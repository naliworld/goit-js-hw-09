import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/dark.css';
//import { Report } from 'notiflix/build/notiflix-report-aio';//

const calendar = document.querySelector('#datetime-picker');
const startButton = document.querySelector('button[data-start]');

calendar.setAttribute('placeholder', 'Choose required date');

startButton.setAttribute('disabled', 'disabled');

const createButton = document.createElement('button');
const resetButton = startButton.insertAdjacentElement('afterend', createButton);


resetButton.textContent = 'Reset';
resetButton.setAttribute( 'type', 'button');
resetButton.setAttribute('data-reset', '');
resetButton.classList.add('is-hidden');

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const currentTime = Date.now();
        if (selectedDates[0].getTime() < currentTime) {
            Report.warning('Try Again!', 'Choose a fauture date, please.', 'Error!'); 
        } else {
            startButton.removeAttribute('disabled');
        }
    },
};

flatpickr('#datetime-picker', options);
const timerInfo = {
 getDays: document.querySelector('span[data-days]'),
 getHours: document.querySelector('span[data-hours]'),
 getMinutes: document.querySelector('span[data-minutes]'),
 getSeconds: document.querySelector('span[data-seconds]'),
};

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //Remaining days, minutes, seconds and hours//
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day ) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return {days, hours, minutes, seconds };
}

function addLeadingZero(value){
    return String(value).padStart(2, '0');
}

startButton.addEventListener('click', onClickReverseTimer);
let intervalid = null;

function onClickReverseTimer() {
    intervalid = setInterval(updateCounter, 1000);

function updateCounter() {
    let inputeDate = new Date(datePicker, 1000);
    const currentDate = Date.now();
    const currentTime = inputeDate.getTime() - currentDate;
    const deltaTime = convertMs(deltaTime);
}
}

if (deltaTime < 0) {
    ClearInterval(intervalid);
    resetButton.classList.add('is-hidden');
    startButton.classList.remove('is-hidden');
    datePicker.value = '';
    return;
}

timerInfo.getDays.textContent = addLeadingZero(deltaTime.days);
timerInfo.getHours.textContent = addLeadingZero(deltaTime.hours);
timerInfo.getMinutes.textContent = addLeadingZero(deltaTime.minutes);
timerInfo.getSeconds.textContent = addLeadingZero(deltaTime.seconds);


startButton.classList.add('is-hidden');
resetButton.classList.remove('is-hidden');



resetButton.addEventListener('click', onClickClearInterval);

function onClickClearInterval() {
    clearInterval(intervalid);
    timerInfo.getDays.textContent = '00';
    timerInfo.getHours.textContent = '00';
    timerInfo.getMinutes.textContent = '00';
    timerInfo.getSeconds.textContent = '00';
}

datePicker.value = '';

resetButton.classList.add('is-hidden');
startButton.classList.remove('is-hidden');