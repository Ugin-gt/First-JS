const userInput1 = +prompt('Введите первое число:');
const userInput2 = +prompt('Введите второе число:');

const getSumOfTwo = function () {
  //function expression

  const result = userInput1 + userInput2;
 
  return result;
  };

const summ = getSumOfTwo();
console.log(summ); 
