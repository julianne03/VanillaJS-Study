// What can be used front of variable name? - camel case
// 1. let
// When we want to change 33 to something, we use let.
let a = 33;

// 2. const
// When we want to do not change anymore variable, we use const.
const pi = 3.141592;
// pi = 3;    ->  It will be error.

// 3. var = variable
// It doesn't matter now, but sometimes it will be matter.
var b = 22;

// Use const default
// Use let only you need it  

// Let's learn about variable data type
// 1. String
const what = 'juli';
console.log(what);

// 2. Boolean
// You can save just true or false
const bool = true;

// 3. Number
const num = 12345;

// 4. Float
const fl = 33.1;

// How can we organize data
// 1. Array - kind of list []
// You can input in array every type of datas
// Index starts to 0
const daysOfWeek = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun",54,true];

console.log(daysOfWeek);

// 2. Object {}
// You can save data and label together
// You can get data with dot (.)
const juliInfo = {
  name : 'juli',
  age : 19,
  gender : "Female",
  favMovies : ["Along the gods", "LOTR", "lalaland"],
  favFood : [
    {
      name : "불고기",
      fatty : true
    }, 
    {
      name : "피자",
      fatty : true
    }
  ]
}

console.log(juliInfo);
juliInfo.age = 18
console.log(juliInfo.favFood[0].name);