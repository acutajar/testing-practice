const funcs = require("./script.js");

test("capitalize first letter of str", () => {
  expect(funcs.capitalize("word")).toBe("Word");
});

test("reverse str", () => {
  expect(funcs.reverseStr("backwards")).toBe("sdrawkcab");
});

test("calc add", () => {
  expect(funcs.calculator.add(1, 4)).toBe(5);
});

test("calc subtract", () => {
  expect(funcs.calculator.subtract(10, 4)).toBe(6);
});

test("calc multiply", () => {
  expect(funcs.calculator.multiply(3, 8)).toBe(24);
});

test("calc divide", () => {
  expect(funcs.calculator.divide(12, 3)).toBe(4);
});

test("calc divide zero", () => {
  expect(funcs.calculator.divide(1, 0)).toBe("dont divide by zero pls");
});

test("caesar cipher", () => {
  expect(funcs.caesar("ABCZxyz!", 1)).toBe("BCDAyza!");
});

test("array analysis", () => {
  expect(funcs.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
