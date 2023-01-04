/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 * 
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
*/

function findVowels(str) {
    const strArray = str.split('');
    let count = 0;
    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i].toLowerCase() === 'а' || strArray[i].toLowerCase() === 'я' || strArray[i].toLowerCase() === 'о' || strArray[i].toLowerCase() === 'ё' || strArray[i].toLowerCase() === 'у' || strArray[i].toLowerCase() === 'ю' || strArray[i].toLowerCase() === 'ы' || strArray[i].toLowerCase() === 'и' || strArray[i].toLowerCase() === 'э' || strArray[i].toLowerCase() === 'е') {
            count++;
        }
    }
    return count;
}


// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(findVowels('здравствуй')); // 2
console.log(findVowels('привет')); // 2
console.log(findVowels('хеллоу')); // 3