'use strict';
// let count = 1;

// while (count <= maxTry) {
//   count++;
for (let count = 1; count <= maxTry; count++) {
  const userInput = prompt('Введите пароль: ');
  if (GOOD_Password === userInput) {
    alert('Вы ввели верный пароль');
    break;
  }
  alert('Вы ввели неверный пароль');

  if (count === maxTry) {
    alert('Вы использовали максимальное число попыток');
    break;
  }
};

