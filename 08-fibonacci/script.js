/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34...].
 * 
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
*/


function fibonacci(n) {
    let result = 0;
    let prevN = 1;
    let prevPrevN = 0;

    if (n < 1) {
        return 'Please insert an interger starting from 1'; 
    } else if (n === 2) {
        return 1;
    }

    for (let i = 3; i < n+1; i++) {
        result = prevN + prevPrevN; 
        prevPrevN = prevN; 
        prevN = result; 
    }
    return result;
}

console.log(fibonacci(100));


// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fibonacci(4)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)