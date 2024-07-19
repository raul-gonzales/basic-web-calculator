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

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
