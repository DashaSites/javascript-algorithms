/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход натуральное число n.
 * Возвращать функция должна суммарное количество нулей, содержащихся во всех числах от 1 до n включительно.
 *
*/

function countZeros(n) {
  const array = [];

    for (let i = 10; i <= n; i++) {
        array.push(i);
    }

  const arrayModified = array.join('').split('');

  let result = 0; 

  for (let i = 0; i < arrayModified.length; i++) {
    if (arrayModified[i] === '0') {
     result++;
    }
  }
  return result;
}



// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
