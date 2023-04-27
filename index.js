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

// return statement

function sum(a, b, c) {
  return a + b + c;
}

const totalSum = sum(1, 2, 3);

console.log(totalSum);
