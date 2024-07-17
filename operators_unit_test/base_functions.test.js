const calculator = require("./base_functions");

describe("add", () => {
  test("adds 0 and 0", () => {
    expect(calculator.add(0, 0)).toBe(0);
  });

  test("adds two numbers", () => {
    expect(calculator.add(5, 8)).toBe(13);
  });
});

describe("subtract", () => {
  test("subtracts 0 from a number", () => {
    expect(calculator.subtract(5, 0)).toBe(5);
  });

  test("subtracts numbers", () => {
    expect(calculator.subtract(10, 4)).toBe(6);
  });
});

describe("multiply", () => {
  test("multiplies by 0", () => {
    expect(calculator.multiply(3, 0)).toBe(0);
  });

  test("multiplies two numbers", () => {
    expect(calculator.multiply(1, 2)).toBe(2);
  });
});

describe("divide", () => {
  test("divides two numbers", () => {
    expect(calculator.divide(8, 2)).toBe(4);
  });
});
