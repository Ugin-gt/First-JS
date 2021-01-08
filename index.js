const getUserInput = function () {
  const userInput = prompt('Введите любое значение: ');

  return userInput;
};

//   if (userInput) {
//     return userInput;

//   } return 'Вы ничего не ввели';
// };

const result = getUserInput();

console.log(result ? 'Вы ввели:' + result : 'Вы ничего не ввели');




