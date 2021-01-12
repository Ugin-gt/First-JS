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

let a = + prompt('Введите первое число');
let b = + prompt('Введите второе число');
(isNaN(a - b))
  ? alert(`Вы ввели не число. `) :
  alert(`Результат операции чисел:
${a} + ${b} = ${a + b}`);

//
const user = {
  firstName: 'John',
  lastName: 'Smith',
  age: 33,
  isMale: true,
};

function sayHello(userObj) {
  if (userObj.age >=18) {
    return (`Hello, Dear ${userObj.firstName} ${userObj.lastName}`)
  }
  return ((`You are not so adult, Dear ${userObj.firstName} ${userObj.lastName}`))
};

console.log(sayHello(user));


