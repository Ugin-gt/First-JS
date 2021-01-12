'use strict';

//Обьекты в JS, значения и свойства объектов
// Функция  Constructor всегда начинается с большой буквы


function Cat(name, color, age, isMale, breed) {
  this.name = name;
  this.furColor = color;
  this.age = age;
  this.isMale = isMale;
  this.breed = breed;
  this.sleep = function () {
    return "I'm sleeping";
  };
  this.eat = function () {
    return "I'm eating";
  };

}

const newCat1 = new Cat('Murzik', 'Red', 5, true, 'Persian');
const newCat2 = new Cat('Sofa', 'White', 12, false, 'Spinx');
const newCat3 = new Cat('Bernard', 'Red', 3, true, null);

// Задание создать страны  с значениями 
// Название, площадь, население чел., определить плотность населения.

function Country(name, area, population) {
  this.name = name;
  this.area = area;
  this.population = population;
  this.densityOfPopul = function () {
    return this.population / this.area;
  };
};

const ukr = new Country('Ukraine', 576_604, 41_723_998);
const ger = new Country('Germany', 456_604, 80_624_876);

/* Задание с маркой авто и макс скоростью.
 Auto (name, maxspeed)
 .accelerate (60)
 .slowdown
 .stop
*/

function Auto(brand, maxSpeed) {
  this.brand = brand;
  this.speed = 0;
  this.maxSpeed = maxSpeed;

  this.accelerate = function (value) {
    this.speed += value;

    this.speed > this.maxSpeed ?
      this.speed = this.maxSpeed : this.speed;

    return this.speed;

  };

  this.stop = function () {
    this.speed = 0;
    return this.speed;
  };

}

const auto = new Auto('BMW M6', 300);




// Использование шаблонных строк `${}  ` 

//  let a = + prompt('Введите первое число');
// let b = + prompt('Введите второе число');
// (isNaN(a - b))
//   ? alert(`Вы ввели не число. `) :
//   alert(`Результат операции чисел:
// ${a} + ${b} = ${a + b}`);

// Использование шаблонных строк `${}  ` 
const user = {
  firstName: 'John',
  lastName: 'Smith',
  age: 33,
  isMale: true,
};

function sayHello(userObj) {
  if (userObj.age >= 18) {
    return (`Hello, Dear ${userObj.firstName} ${userObj.lastName}`)
  }
  return ((`You are not so adult, Dear ${userObj.firstName} ${userObj.lastName}`))
};

console.log(sayHello(user));

//

const protocol = 'http://';
const serverIp = '127.0.0.1:3000';
const userpath = '/Function-HomeTask/tree/practice';

function createQuery(path) {

  return (`${protocol}${serverIp}${userpath}${path}`);

};
console.log(createQuery(''));

//Доступ к свойствам объекта через оператор [..]
// с возможностью вычисления

const object = {
  'favorite color': 'red',
  0: 'test value',
  1: 'test value 2',

};
console.log(object['favorite color']);
console.log(object['0']);
console.log(object[0]);

const search = '1';
console.log(object[search]);

const strAsKey = '2 * 2 =';

object[strAsKey] = 2 * 2;


function createMultiplicationTable() {

  const result = {};

  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {

      result[`${i} * ${j}`] = i * j;

    }
  };
  return result;
  };
console.log(createMultiplicationTable());