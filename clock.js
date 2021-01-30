const clockContainer = document.querySelector('.js-clock'),
      clockTitle = document.querySelector("h1");

function getTime() {
  const date = new Date();   // Object
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  // first, get time from now
  getTime();
  // second, use function setInterval
  // => we can get time for every second(1000)
  // call getTime for every second
  setInterval(getTime, 1000);
}
init();