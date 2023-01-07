/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/

/*function primes(num) {
    const array = []; // [2, 3, 4, 5, 6]

    for (let i = 2; i <= num; i++) {
        array.push(i);
    }
    
    const arrayFinal = [];

    for (let i = 0; i < array; i++) {
        for (let i2 = 0; i2 < array; i2++) {
            if (array[i] % array[i2] !== 0)
            arrayFinal.push();

        }

    }

}*/






function primes(num) {

    let primeTest;
    const arrayFinal = [];

    for (let i = 2; i <= num; i++) {
        primeTest = true;

        for (let i2 = 2; i2 < i; i2++) { 
            if (i % i2 === 0) {
                primeTest = false;
                break;
            }
        }
    if (primeTest === true){
        arrayFinal.push(i);
    }
  }
    
    return arrayFinal;
}


// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]