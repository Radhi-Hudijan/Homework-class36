'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  const title = document.createElement('h3');
  const timeDisplay = document.createElement('p');
  const body = document.querySelector('body');

  title.textContent = 'The Time now is ';

  body.appendChild(title);
  body.appendChild(timeDisplay);
  body.style.textAlign = 'center';

  setInterval(() => {
    const now = new Date();

    const hours = addZero(now.getHours());
    const minutes = addZero(now.getMinutes());
    const seconds = addZero(now.getSeconds());

    const currentTime = `${hours}:${minutes}:${seconds}`;
    timeDisplay.textContent = currentTime;
    console.log(currentTime);
  }, 1000);
}
function addZero(number) {
  return number < 10 ? `0${number}` : number;
}

window.addEventListener('load', addCurrentTime);
