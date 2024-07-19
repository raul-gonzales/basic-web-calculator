const calculator = require("./base_functions");

describe("add", () => {
  test("adds 0 and 0", () => {
    expect(calculator.add(0, 0)).toBe(0);
  });

  test("adds two numbers", () => {
    expect(calculator.add(5, 8)).toBe(13);
  });

  test("adds negative numbers", () => {
    expect(calculator.add(-3, -4)).toBe(-7);
  });
});

describe("subtract", () => {
  test("subtracts 0 from a number", () => {
    expect(calculator.subtract(5, 0)).toBe(5);
  });

  test("subtracts numbers", () => {
    expect(calculator.subtract(10, 4)).toBe(6);
  });

  test("equates negative numbers", () => {
    expect(calculator.subtract(2, 5)).toBe(-3);
  });
});

describe("multiply", () => {
  test("multiplies by 0", () => {
    expect(calculator.multiply(3, 0)).toBe(0);
  });

  test("multiplies two numbers", () => {
    expect(calculator.multiply(1, 2)).toBe(2);
  });

  test("multiple negative numbers", () => {
    expect(calculator.multiply(-2, 4)).toBe(-8);
  });
});

describe("divide", () => {
  test("divides two numbers", () => {
    expect(calculator.divide(8, 2)).toBe(4);
  });

  test("divide by 0 results in ERROR", () => {
    expect(calculator.divide(1, 0)).toBe("ERROR");
  });

  test("divides negative numbers", () => {
    expect(calculator.divide(-6, 3)).toBe(-2);
  });
});
