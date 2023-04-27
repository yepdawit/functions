// create a function

function funcName() {
  // code to be executed
  //whatever we want our function to do
}

/***************** 2 steps************** */

// 1. define the function - telling javascript details about the function
// 2. call the function - execute the code inside the function

// 1. define the function
function funcName() {
  console.log("Hello World");
}

// 2. call the function
funcName();

// 1. define the function
function funcName() {
  console.log("Hello World");
  console.log("for the second time");
}

// 2. call the function 20 times

for (let i = 0; i < 20; i++) {
  funcName();
}

// our functions can also take arguments

const num =
  ("one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten");

console.log(num.indexOf("one"));

function greet(name) {
  console.log("name", name);
  console.log("Hello, ${name}");
}

greet("John");
greet("Jane");
greet("Jack");
greet("Jill");
greet("Dawit");

// square function

function square(num) {
  console.log(num ** 2);
}

square(2); // 4

function divide(num1, num2) {
  console.log(num1 / num2);
}

divide(1 / 4); // 0.25
divide(4 / 1); // 4

function sum(a, b, c) {
  console.log(a + b + c);
}

sum(1, 2); // NaN
sum(1, 2, 3); // 6

// return statement be very particular about the return statement where you place it in the function

function sum(a, b, c) {
  // the function is defined
  return a + b + c; // the value of the function is returned to the caller of the function
}

const totalSum = sum(1, 2, 3); // the value of the function is stored in the variable totalSum

console.log(totalSum); // the value of the variable totalSum is printed to the console // 6

// create a function is purle take in color as input
// if the color is purple return true else return false

function ispurple(color) {
  // the function is defined
  if (color.toLowerCase() === "purple") {
    return true;
  } else {
    return false;
  }
}

console.log(ispurple("purple")); // true
