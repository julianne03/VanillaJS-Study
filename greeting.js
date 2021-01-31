const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
      SHOWING_CN = "showing";

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

// localStorage
// You can save small user's infomation in here. 
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null) {
    
  } else {
    paintGreeting(currentUser);
  }
}
function init() {
  loadName();
}

init();


