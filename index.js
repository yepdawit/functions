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
    // this is an if statement that checks if the color is purple
    return true; // if the color is purple the function returns true
  } else {
    // if the color is not purple
    return false; // the function returns false
  } // the function ends
}

console.log(ispurple("purple")); // true

// another way to write the same function

function ispurple(color) {
  // this is a function declaration
  return color.toLowerCase() === "purple"; // this is a return statement
}

const isPurple = (color) => {
  // this is an arrow function it is a function expression that
  return color.toLowerCase() === "purple"; // this is a return statement
};
console.log(isPurple("purple")); // true

function divideby2(num) {
  return num / 2;
}

const divideby2 = (num) => {
  return num / 2;
};

const divideby2 = (num) => num / 2;

console.log(divideby2(4)); // 2

// create a function keyword and defie a function named rectangleArea
// the function should take in two arguments length and width
// after the curly braces console.log the area by multiplying length and width
// invoke the function by calling its name alongside the element

function rectangleArea(length, height) {
  console.log(length * height);
}

// triangle height

function triangleArea(base, height) {
  console.log((base * height) / 2);
}

//also you cam use return statement

const triangleArea = (base, height) => {
  return (base * height) / 2;
};
