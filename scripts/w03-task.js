/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  let addNumber1 = Number(document.querySelector("#add1").value);
  let addNumber2 = Number(document.querySelector("#add2").value);
  document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(subNumber1, subNumber2) {
  return subNumber1 - subNumber2;
}

function subtractNumbers() {
  let subtract1 = Number(document.querySelector("#subtract1").value);
  let subtract2 = Number(document.querySelector("#subtract2").value);
  document.querySelector("#difference").value = subtract(subtract1, subtract2);
}

document
  .querySelector("#subtractNumbers")
  .addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (mulNumber1, mulNumber2) => {
  return mulNumber1 * mulNumber2;
};

const multiplyNumbers = () => {
  let factor1 = Number(document.querySelector("#factor1").value);
  let factor2 = Number(document.querySelector("#factor2").value);
  document.querySelector("#product").value = multiply(factor1, factor2);
};

document
  .querySelector("#multiplyNumbers")
  .addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */

const divide = (number1, number2) => {
  return number1 / number2;
};

const divideNumbers = () => {
  let dividend = Number(document.querySelector("#dividend").value);
  let divisor = Number(document.querySelector("#divisor").value);
  document.querySelector("#quotient").value = divide(dividend, divisor);
};

document
  .querySelector("#divideNumbers")
  .addEventListener("click", divideNumbers);

/* Decision Structure */

const getTotal = () => {
  let subtotal;
  let total = 0;
  let discount = 0;

  //  if (typeof document.querySelector("#subtotal").value !== "number") {
  //    alert("The value is not a number");
  //  } else {
  subtotal = Number(document.querySelector("#subtotal").value);
  console.log(typeof document.querySelector("#subtotal").value);
  //  }

  if (document.querySelector("#member").checked) {
    discount = 0.15 * subtotal;
  }

  total = subtotal - discount;

  document.querySelector(".larger").innerHTML = `$${total.toFixed(2)}`;
};

document.querySelector("#getTotal").addEventListener("click", getTotal);

/* ARRAY METHODS - Functional Programming */
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
/* Output Source Array */
document.querySelector("#array").innerHTML = numberArray;

/* Output Odds Only Array */
let oddArray = numberArray.filter((number) => number % 2 > 0);
document.querySelector("#odds").innerHTML = oddArray;

/* Output Evens Only Array */
let evenArray = numberArray.filter((number) => number % 2 === 0);
document.querySelector("#evens").innerHTML = evenArray;

/* Output Sum of Org. Array */
let sum = numberArray.reduce((total, number) => total + number);
document.querySelector("#sumOfArray").innerHTML = sum;

/* Output Multiplied by 2 Array */
let dubArray = numberArray.map((number) => number * 2);
document.querySelector("#multiplied").innerHTML = dubArray;

/* Output Sum of Multiplied by 2 Array */
let sumTimes2 = numberArray
  .map((number) => number * 2)
  .reduce((total, number) => total + number);
document.querySelector("#sumOfMultiplied").innerHTML = sumTimes2;
