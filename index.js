const userIput = +prompt('Введите число: ');

if (isNaN(userIput)) {

  console.log('Вы ввели не число');

} else if (userIput % 5 === 0) {

  console.log('Делится на 5 без остатка');

} else if (userIput % 3 === 0) {

  console.log('Делится на 3 без остатка');

} else if (userIput % 2 === 0) {

  console.log('Делится на 2 без остатка');

} else {

  console.log('Не делится ни на 5, ни на 3, ни на 2')

}

console.log('end of script');
