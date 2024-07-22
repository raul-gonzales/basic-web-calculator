// Variables to operands and operator
let operandOne = "";
let operandTwo = "";
let operator = "";
let operatorClicked = false;

// DOM selection
let display = document.querySelector(".result-display");
let digitButtons = document.querySelectorAll(".button-digit");
let operatorButtons = document.querySelectorAll(".button-operator");
let clearButton = document.querySelector(".button-clear");
let equateButton = document.querySelector(".button-equate");

// Add proper events to digit buttons click
Array.from(digitButtons).forEach((digitButton) => {
  digitButton.addEventListener("click", handleDigitClick);
  digitButton.addEventListener("click", handleDisplayUpdate);
});

// Add proper events to operator buttons click
Array.from(operatorButtons).forEach((operatorButton) => {
  operatorButton.addEventListener("click", handleOperatorClick);
  operatorButton.addEventListener("click", handleDisplayUpdate);
});

// Add proper events to the clear button
clearButton.addEventListener("click", handleClearClick);
clearButton.addEventListener("click", handleDisplayUpdate);

// Add proper events to the equate button
equateButton.addEventListener("click", handleEquateClick);

//-----------------------------FUNCTIONS----------------------//

// Operator functions
const add = function (a, b) {
  return parseInt(a) + parseInt(b);
};

const subtract = function (a, b) {
  return parseInt(a) - parseInt(b);
};

const multiply = function (a, b) {
  return parseInt(a) * parseInt(b);
};

const divide = function (a, b) {
  if (b === 0) return "ERROR";
  else return parseInt(a) / parseInt(b);;
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

// Event handlers function
function handleDigitClick(event) {
  // Add digit value to operand one if operator is not yet clicked
  if (!operatorClicked) {
    operandOne += event.target.textContent;
  } // otherwise add to operand two
  else {
    operandTwo += event.target.textContent;
  }
}

function handleOperatorClick(event) {
  operatorClicked = !operatorClicked;
  operator = event.target.textContent;
}

function handleClearClick(){
  operandOne = "";
  operandTwo = "";
  operator = "";
  operatorClicked = false;
}

function handleEquateClick(){
  display.textContent = operate(operandOne, operandTwo, operator);
  handleClearClick();
}

function handleDisplayUpdate(){
  display.textContent = `${operandOne} ${operator} ${operandTwo}`
}