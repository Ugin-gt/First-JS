'use strict';

function sum(a, b) {
  return a + b;
};

function substract(a, b) {
  return a - b;
};

function highOrderFunc(num1, num2, funcToPerformOperation) {
  // const result = funcToPerformOperation(num1, num2);
  // return result;
  return funcToPerformOperation(num1, num2);
};

const res1 = highOrderFunc(10, 20, substract);

console.log(res1);