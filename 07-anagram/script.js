/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/


function anagram(str1, str2) {
    if ((str1.length === str2.length) && (str1.toLowerCase() !== str2.toLowerCase())) {
        const array1 = str1.toLowerCase().split('');
        const array2 = str2.toLowerCase().split('');

        const str1Sorted = array1.sort().join('');
        const str2Sorted = array2.sort().join('');

        return str1Sorted === str2Sorted;
    } else {
        return false;
    }
}

console.log(anagram('up', 'UP'));


// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false

