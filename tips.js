//Discount chain
// 1 if a customer has a discount theyll recieve 25% off
// 2 if a customer has a coupon the customer will recieve $10 discount of the subscription discount has been calculated
// 3 at the end of the script we should retutn and log the string "your total is $x"

// function discount(subscription, discount, coupon) {
//   // this is a function declaration
//   let total = subscription; // this is a variable declaration
//   if (discount) {
//     // this is an if statement
//     total = total * 0.75; // this is a variable assignment
//   }
//   if (coupon) {
//     // this is an if statement
//     total = total - 10; // this is a variable assignment
//   }
//   return `Your total is $${total}`; // this is a return statement
// }
//
// const discount = (subscription, discount, coupon) => {
//   // this is a function expression
//   let total = subscription; // this is a variable declaration
//   if (discount) {
//     // this is an if statement
//     total = total * 0.75; // this is a variable assignment
//   }
//   if (coupon) {
//     // this is an if statement
//     total = total - 10; // this is a variable assignment
//   }

//   return `Your total is $${total}`; // this is a return statement
// };
//
// console.log(discount(100, true, true)); // Your total is $65
// console.log(discount(100, true, false)); // Your total is $75
// console.log(discount(100, false, true)); // Your total is $90
// console.log(discount(100, false, false)); // Your total is $100
// console.log(discount(100, true)); // Your total is $75

// function discount(subscription, discount, coupon) {
//   // this is a function declaration
//   let total = subscription; // this is a variable declaration
//   if (discount) {
//     // this is an if statement
//     total = total * 0.75; // this is a variable assignment
//   }
//   if (coupon) {

//     // this is an if statement
//     total = total - 10; // this is a variable assignment
//   }
//   return `Your total is $${total}`; // this is a return statement
// }
//
// const discount = (subscription, discount, coupon) => {
//   // this is a function expression
//   let total = subscription; // this is a variable declaration
//   if (discount) {
//     // this is an if statement
//     total = total * 0.75; // this is a variable assignment
//   }
//   if (coupon) {
//     // this is an if statement
//     total = total - 10; // this is a variable assignment
//   }
//   return `Your total is $${total}`; // this is a return statement
// };
//
// console.log(discount(100, true, true)); // Your total is $65
// console.log(discount(100, true, false)); // Your total is $75
// console.log(discount(100, false, true)); // Your total is $90
// console.log(discount(100, false, false)); // Your total is $100
// console.log(discount(100, true)); // Your total is $75
// console.log(discount(100, false)); // Your total is $100
// console.log(discount(100)); // Your total is $100
// console.log(discount()); // Your total is $NaN
// console.log(discount(100, true, true, true)); // Your total is $65
// console.log(discount(100, true, true, true, true)); // Your total is $65
// console.log(discount(100, true, true, true, true, true)); // Your total is $65
// console.log(discount(100, true, true, true, true, true, true)); // Your total is $65
// console.log(discount(100, true, true, true, true, true, true, true)); // Your total is $65
// console.log(discount(100, true, true, true, true, true, true, true, true)); // Your total is $65
// console.log(discount(100, true, true, true, true, true, true, true, true, true)); // Your total is $65
// console.log(discount(100, true, true, true, true, true, true, true, true, true, true)); // Your total is $65
// console.log(discount(100, true, true, true, true, true, true, true, true, true, true, true)); // Your total is $65
// console.log(discount(100, true, true, true, true, true, true, true, true, true, true, true, true)); // Your total is $65
/* ************************************************************* */

const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};

const prescriptions = [timmy, sarah, rocky];

function discount(subscription, coupon, pricePerRefill, refills) {
  let total = pricePerRefill * refills;
  if (subscription) {
    total = total * 0.75;
  }
  if (coupon) {
    total = total - 10;
  }
  return total;
}

function totalCost(prescriptions) {
  let total = 0;
  for (let prescription of prescriptions) {
    total =
      total +
      discount(
        prescription.subscription,
        prescription.coupon,
        prescription.pricePerRefill,
        prescription.refills
      );
  }
  return total;
}

console.log(totalCost(prescriptions)); // 157.5
console.log(totalCost([timmy])); // 56.25
console.log(totalCost([sarah])); // 37.5
console.log(totalCost([rocky])); // 135
console.log(totalCost([])); // 0
console.log(totalCost()); // 0
console.log(totalCost([timmy, sarah, rocky])); // 157.5
console.log(totalCost([timmy, sarah])); // 93.75
console.log(totalCost([timmy, rocky])); // 191.25
console.log(totalCost([sarah, rocky])); // 172.5
console.log(
  totalCost([
    { subscription: true, coupon: true, pricePerRefill: 25, refills: 3 },
    { subscription: true, coupon: false, pricePerRefill: 50, refills: 1 },
    { subscription: true, coupon: true, pricePerRefill: 30, refills: 5 },
  ])
); // 157.5

/* ----------#########---------#########----------##########--------## */

function totalCostWithDiscount(obj) {
  return obj.pricePerRefill * obj.refills;
}

const totalCost = tptalCostWithDiscount(timmy);
console.log(totalCost); // 75

// we cam also use the arrow function to write the same function
