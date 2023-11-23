'use strict';

// create a function to update the date and time
function updateDateTime() {
  // create a new `Date` object
  const now = new Date();
  const nowHour = formatZero(now.getHours());
  const nowMinute = formatZero(now.getMinutes());
  const nowSecond = formatZero(now.getSeconds());

  const nowDate = now.toLocaleDateString([], {
    weekday: 'short',
    day: '2-digit',
    month: 'long',
  });

  // get the current date and time as a string
  const currentDateTime = now.toLocaleString();

  // update the `textContent` property of the `span` element with the `id` of `datetime`
  document.querySelector('#date').textContent = nowDate;
  document.querySelector('#hour').textContent = nowHour;
  document.querySelector('#minute').textContent = nowMinute;
  document.querySelector('#second').textContent = nowSecond;
}

startInterval(updateDateTime);

function formatZero(number) {
  return parseInt(number) < 10 ? '0' + number : number;
}

function startInterval(callback) {
  callback();
  return setInterval(callback, 1000);
}
