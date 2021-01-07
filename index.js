const a = 15;
const b = 20;
const number = 15;

const minValue = function (a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
};

console.log(minValue(a, b));

const maxValue = function (a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

console.log(maxValue(a, b));

const isEven = function (number) {
  if (isNaN(number)) {
    return "is NaN";
  }
  return number % 2 === 0;
};

console.log(isEven(number));

/**
 * 
 * @param {number} a - first coef
 * @param {number} b - second coef
 * @param {number} c - third coef
 * @returns {null | number []} - result
 */

const solveSquareEquation = function (a, b, c,) {
  const checkValues = a - b - c;
  if (isNaN(checkValues)) {
    return null;
  }

  const d = b * b - 4 * a * c;

  if (d < 0) {
    return null;
  }
  if (d === 0) {
    const x = -b / (2 * a);
    return [x, x];
  }
  if (d > 0) {
    const dSqrt = d ** (1 / 2);

    const x1 = (-b + dSqrt) / (2 * a);
    const x2 = (-b - dSqrt) / (2 * a);

    return [x1, x2];
  }
};

const result = solveSquareEquation(2, 7, 4);

console.log(result);

const globalVar = 'Global';
//  глобальные переменные видны в любой части кода;

if (globalVar) {
  const ifVar1 = 'ifVar1';

  console.log(ifVar1);
  console.log(globalVar);

  if (globalVar) {
    const ifVar2 = 'ifVar2';
    
    console.log(ifVar2);
    console.log(ifVar1);
    console.log(globalVar);

  }
}
console.log(globalVar);