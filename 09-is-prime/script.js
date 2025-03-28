/*
 * Задача 9: «Простое число»
 *
 * Напишите функцию isPrime(n) для проверки, простое число n или нет.
 * Напомним, что число называют простым, если оно больше 1 и делится
 * без остатка только на 1 и на само себя.
 * 
 * На вход функция должна принимать число n и возвращать true,
 * если n простое, и false — если нет.
*/

function isPrime(n) {
if (n === 2) {
    return true;
    } else if (n > 1 && (n % 1 === 0) && (n % n === 0)) {
      for (let i = 2; i < n; i++) {
        if (n % i !== 0) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      return false;
  }
}

console.log(isPrime(2));

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(isPrime(0)); // false
console.log(isPrime(1)); // false
console.log(isPrime(3)); // true
console.log(isPrime(6)); // false
console.log(isPrime(17)); // true