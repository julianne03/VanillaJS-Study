// How can we get id from html file?
// HTML document = javascript
// If you want to get id -> getElementbyId
// querySelector - class use dot(.), id use # (like css)
const title = document.querySelector('#title');
// DOM : Document Object Model
// javascript -> html change to object

const BASE_COLOR = "white";
const OTHER_COLOR = "black";
// It will be change to h1 context
title.innerHTML = "Hi! From JS";

// Modifying the DOM with JS
document.title = "I Own you now.";

// events and event handler
// 1. make a function
function handleClick() {
  const  currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

// 2. make a eventhandler
// first argument : type of event
// second argument : function name - without () !!!!
// If you with (), it means you call function now!
// You can know more about dom at MDN site
function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}
init();
function handleOffLine() {
  console.log('Bye Bye!')
}
function handleOnLine() {
  console.log('Welcome back!')
}
window.addEventListener("offline", handleOffLine);
window.addEventListener("online", handleOnLine);
