// function
// You can put peice of codes in here as many times as you want
// argument = variable
//          = we sent something to function 
function sayHello(potato, age) {  // parameter - 매개변수
  console.log('Hello!', potato, "you have", age, 'years of age.');
}

// call function
sayHello("julianne", 15);   // argument - 인자
console.log("Hi!")

// built in function (내장함수)
// ex. alert, console

// better than original string
// backtic - `
function sayHello2(name, age) {  // parameter - 매개변수
  return `Hello ${name} you are ${age} years old`;
}

const greetJ = sayHello2("Juli",19)
// You can see function's return value
console.log(greetJ)

// --------------calculator-----------------
const calculator = {
  plus : function(a, b) {
    return a + b;
  },
  minus : function(a, b) {
    return a - b;
  },
  multiply : function(a, b) {
    return a * b;
  },
  divide : function(a, b) {
    return a / b;
  },
  remainder : function(a, b) {
    return a % b;
  },
  power : function(a, b) {
    return a ** b;
  }
}

const plus = calculator.plus(5, 5)
console.log(plus)
const minus = calculator.minus(5, 5)
console.log(minus)
const multiply = calculator.multiply(5, 5)
console.log(multiply)
const remainder = calculator.remainder(5, 5)
console.log(remainder)
const power = calculator.power(5, 5)
console.log(power)
