/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/


function intersection(arr1, arr2) {

    const result = arr1.filter(function (element) {
        return (arr2.indexOf(element) !== -1);
    });

    const finalArray = [];

    
    for (let i = 0; i < result.length; i++) {
        if (!finalArray.includes(result[i])) {
            finalArray.push(result[i]);
        }        
    }
    return finalArray;
}

console.log(intersection([1, 3, 3, 5, 7], [3, 3, 7, 8 ,9]));




// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []