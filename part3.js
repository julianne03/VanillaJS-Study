// How can we get id from html file?
// HTML document = javascript
// If you want to get id -> getElementbyId
// querySelector - class use dot(.), id use # (like css)
const title = document.querySelector('#title');
// DOM : Document Object Model
// javascript -> html change to object

const CLICKED_CLASS = "clicked";

// events and event handler
// 1. make a function
function handleClick() {
  // If that class contains in classList, 
  // true -> remove that class false -> add that class 
  title.classList.toggle(CLICKED_CLASS);
}

// 2. make a eventhandler
// first argument : type of event
// second argument : function name - without () !!!!
// If you with (), it means you call function now!
// You can know more about dom at MDN site
function init() {
  title.addEventListener("click", handleClick);
}
init();