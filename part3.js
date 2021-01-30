// How can we get id from html file?
// HTML document = javascript
// If you want to get id -> getElementbyId
// querySelector - class use dot(.), id use # (like css)
const title = document.querySelector('#title');
// DOM : Document Object Model
// javascript -> html change to object

// It will be change to h1 context
title.innerHTML = "Hi! From JS";

// Modifying the DOM with JS
title.style.color = 'red';
document.title = "I Own you now.";

// events and event handler
// 1. make a function
function handleClick() {
  title.style.color = "blue";
}
// 2. make a eventhandler
// first argument : type of event
// second argument : function name - without () !!!!
// If you with (), it means you call function now!
title.addEventListener("click", handleClick);