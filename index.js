const a = 5;
const b = 7;
console.log(a * b);

const c = 32;
const d = 4;
console.log(c / d);

const e = 12;
const f = 4;
console.log(e + f);

const number = 11;
const boolean = true;
const string = 'Java Script';
const stringNum = '100';
console.log(number, boolean, string, stringNum);

let resultN = 1;

console.log(resultN += 11);
console.log(resultN -= 11);
console.log(resultN *= 11);
console.log(resultN /= 11);
console.log(resultN **= 2);
console.log(resultN += 1);
console.log(resultN -= 1);

// const userInput = prompt('Введите число:');

// alert('Вы ввели число: ' + userInput);

const getSumOfTwo = function () {

  const userInputNumber1 = +prompt('Введите первое число:');
  const userInputNumber2 = +prompt('Введите второе число:');

  const result = userInputNumber1 + userInputNumber2;
  const verdict = isNaN(result);

  if (!verdict) {
    alert('Сумма чисел равна = ' + result);
  } else {
    alert('Ошибка! Вы ввели не число.');
  }
};

getSumOfTwo();
