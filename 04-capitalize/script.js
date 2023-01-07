/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(string) {

    const array = string.split(' ');

    
    for (let i = 0; i < array.length; i++) {
      
      if ((!array[i]) || (array[i] === ' ') || (array[i].endsWith(' '))) continue;
      
      array[i] = array[i][0].toUpperCase() + array[i].substr(1); 
    }

    return array.join(' ');
}

console.log(capitalize('(and somtig'));
