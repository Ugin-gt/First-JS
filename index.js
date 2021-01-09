'use strict';

function degree(base, numberOfDegree) {
  if (numberOfDegree < 0) { // for negative degree
    return 1 / degree(base, -numberOfDegree);

  }
  if (numberOfDegree === 0) {
    return 1;
  }
  if (numberOfDegree === 1) {
    return base;
  }
  let result = 1; // отдельная переменная для вывода результата работы функции

  for (let i = 0; i < numberOfDegree; ++i) {
    result *= base;
  }

  return result;
};

//Обьекты в JS, значения и свойства объектов

const cat={
  color: 'black',
  breed: 'Spinx',
  age: 8,
  isMale: true,
  name:'Slide',
};

console.log(cat);


cat.age = cat.age +1; // изменили  существующее свойство на основе существующего
console.log(cat);

cat.name = 'Test Testovich'; // изменили существующее свойство name
console.log(cat);

cat.amountOfLegs = 4; // создали новое свойство
console.log(cat);

delete cat.amountOfLegs //  удалили внесенное свойство
console.log(cat);

