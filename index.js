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
