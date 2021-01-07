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

