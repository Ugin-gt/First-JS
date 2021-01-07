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

const userIput2 = +prompt('Выберите позицию из списка меню;\n 1-Чай\n 2-Кофе\n 3-Капуччино');

switch (userIput2) {
  case 1: {
    console.log('Ваш Чай');
    break;
  }
  case 2: {
    console.log('Ваш Кофе');
    break;
  }
  case 3: {
    console.log('Ваш Капуччино');
    break;
  }
 default: {
   console.log('А попробуйте еще раз ;)');
 } 
};



