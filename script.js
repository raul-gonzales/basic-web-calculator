// Variables to operands and operator
let operandOne = 0;
let operandTwo = 0;
let operator = "";

//-----------------------------FUNCTIONS----------------------//

// Operator functions
const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  if (b === 0) return "ERROR";
  else return a / b;
};

function operate(operandOne, operandTwo, operator) {
  let equate = 0;
  switch (operator) {
    case "+":
      equate = add(operandOne, operandTwo);
      break;
    case "-":
      equate = subtract(operandOne, operandTwo);
      break;
    case "*":
      equate = multiply(operandOne, operandTwo);
      break;
    case "/":
      equate = divide(operandOne, operandTwo);
      break;
    default:
      equate = 0;
  }
  return equate;
}
