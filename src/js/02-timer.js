import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const input = document.querySelector('#datetime-picker');
const button = document.querySelector('[data-start]');
const dayRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');

let data = null;

button.disabled = true;
button.addEventListener('click', onClick);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  },
};

flatpickr(input, options);

function onClick() {
  button.disabled = true;
  data = new Date(input.value);
  const id = setInterval(() => {
    if (data - Date.now() >= 0) {
      convertMs(data - Date.now());
    } else {
      clearInterval(id);
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  dayRef.textContent = addLeadingZero(days);

  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  hoursRef.textContent = addLeadingZero(hours);

  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  minutesRef.textContent = addLeadingZero(minutes);

  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  secondsRef.textContent = addLeadingZero(seconds);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
