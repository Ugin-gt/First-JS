const userInput1 = +prompt('Введите первое число:');
const userInput2 = +prompt('Введите второе число:');

const getSumOfTwo = function (num1, num2) {
  //function expression

  const result = num1 + num2;
  if (!isNaN(result)) {
    return result;
  }
  return false;
};

const summ = getSumOfTwo(userInput1, userInput2);

if (!summ) {
  alert('Введите правильно Ваши числа');
} else {
  console.log(summ);
};

const userName = prompt('What is Your name?');

const SayHelloTo = function (name) {
  alert('Hello Your Majesty, ' + name)
};
SayHelloTo(userName);

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