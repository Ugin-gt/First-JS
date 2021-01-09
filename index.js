'use strict';

// const inputDigitFactorial = +prompt('Введите число для вычисления факториала: ');

// function factorial(n) {

//   if (!isNaN(n), !(n < 0)) {
//     return n ? n * factorial(n - 1) : 1
//   }
//   else {
//     alert('Неверный ввод число < 0');
//     return false;
//   }
// };

// alert(inputDigitFactorial + '! = ' + factorial(inputDigitFactorial));


function degree(base, numberOfDegree) {
  if (numberOfDegree < 0) { // for negative degree
    return 1 / degree(base, -numberOfDegree);

  }
  if (numberOfDegree === 0) {
    return 1;
  }
  if (numberOfDegree === 1) {
    return base;
  }
  let result = 1; // отдельная переменная для вывода результата работы функции

  for (let i = 0; i < numberOfDegree; ++i) {
    result *= base;
  }

  return result;
};



