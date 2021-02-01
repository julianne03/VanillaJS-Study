const clockContainer = document.querySelector('.js-clock'),
      clockTitle = document.querySelector(".js-clock-title");

function getTime() {
  const date = new Date();   // Object
  const minutes = date.getMinutes();
  const hours = date.getHours();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
    }`;
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