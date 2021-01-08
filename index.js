const sum = function (a, b) {
  return a + b;
};
const subtraction = function (a, b) {
  return a - b;
};
const mult = function (a, b) {
  return a * b;
};
const division = function (a, b) {
  return a / b;
};

const userInput1 = +prompt('Введите 1-е число:');
const operation = prompt('Введите знак операции:');
const userInput2 = +prompt('Введите 2-е число:');


const calculate = function (a, b, sign) {
  const checkInput = a - b;
  if (isNaN(checkInput)) {
    return null;
  }
  switch (sign) {
    case '+': {
      return sum(a, b);
    }
    case '-': {
      return subtraction(a, b);
    }
    case '*': {
      return mult(a, b);
    }
    case '/': {
      return division(a, b);
    }
    default: {
      return null;
      
    }
  }

}

const result = calculate(userInput1, userInput2, operation);

console.log('Результат операции ' + result);

