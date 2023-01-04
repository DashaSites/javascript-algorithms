/*
 * Задача 10: «Факториал»
 *
 * Напишите функцию factorial(n), возвращающую факториал неотрицательного
 * целого числа. Факториал — это произведение всех натуральных чисел
 * от 1 до n включительно. Факториал 0 равен 1.
 * 
*/

function factorial(n) {

    let result = 1;

    if (n === 0) {
        return result;
    } else {
        for (let i = 1; i < n+1; i++) {
            result = result * i;
        }
  return result;
    }   
}

console.log(factorial(6));

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(6)); // 720    1 2 3 4 5 6