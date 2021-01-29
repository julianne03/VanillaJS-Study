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