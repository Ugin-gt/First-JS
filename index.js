const getUserInput = function () {
  const userInput = prompt('Введите любое значение: ');

  const returnValue = userInput ? userInput : 'Вы ничего не ввели';
  return returnValue;
};


//   if (userInput) {
//     return userInput;

//   } return 'Вы ничего не ввели';
// };

const result = getUserInput();

console.log(result);




