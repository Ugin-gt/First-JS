'use strict';

const inputDigitFactorial = +prompt('Введите число для вычисления факториала: ');

function factorial(n) {
  if (!isNaN(n)) {
    return n ? n * factorial(n - 1) : 1
  }
  else {
    alert('Вы ввели не число!');
  }
};

alert(inputDigitFactorial + '! = ' + factorial(inputDigitFactorial));


