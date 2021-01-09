'use strict';

const inputDigitFactorial = +prompt('Введите число для вычисления факториала: ');

function factorial(n) {

  if (!isNaN(n), !(n < 0)) {
    return n ? n * factorial(n - 1) : 1
  }
  else {
    alert('Неверный ввод или число < 0');
    return false;
  }
};

alert(inputDigitFactorial + '! = ' + factorial(inputDigitFactorial));



