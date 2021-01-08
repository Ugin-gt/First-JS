'use strict';

const GOOD_Password = 'qwerty123';
const maxTry = 5;

let count = 0;

while (count < maxTry) {
  count++;
  const userInput = prompt('Введите пароль: ');
  if (GOOD_Password === userInput) {
    break;
  }
  alert('Вы ввели неверный пароль');

  if (count === maxTry) {
    alert('Вы использовали максимальное число попыток');
    break;
  }
};

