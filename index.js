const testString = 'Hello JS Test';
const tabString = 'Это первая строка.\n\tЭто вторая строка';
const helloString = 'Маша сказала:\"Привеет!\"'

alert(testString); console.log(testString);
alert(tabString); console.log(tabString);
alert(helloString); console.log(helloString);

const procent = 23 % 6;
console.log(procent);

let iter = 18;

console.log(iter >= 10 && iter < 20);

let oder = 7;

console.log(oder >= 10 || oder < 0);

let result;

result = 5;

result += 10; //===1 result = result + 10;
result -= 5; //=== result = result - 5;
result *= 2; //=== result = result * 2;
result /= 5; //=== result = result / 5;
result **= 3; //=== result = result ** 3;

console.log(result);
// console.log(12 == '12');
// console.log(12 != '12');
console.log(10 > 8 && NaN === NaN);

const userInput = prompt('Введите любые символы или значения'); // возвращает строку и преобразует в строчные данные;



console.log(userInput);

const verdict = isNaN(10); // возвращает не число т.е. true или false;
 
console.log(verdict);