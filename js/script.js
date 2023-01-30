// TODO: Keep Hydrated!
// DESCRIPTION:
// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
// For example:
//   time = 3 ----> litres = 1
//   time = 6.7---> litres = 3
//   time = 11.8--> litres = 5
//
// SOLUTION:
// function litres(time) {
//   return Math.floor(time * 0.5);
// }

// TODO: Sum Arrays
// DESCRIPTION:
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
//
// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2
//
// Input: []
// Output: 0
//
// Input: [-2.398]
// Output: -2.398
//
// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.
//
// SOLUTION:
// function sum (numbers) {
//   let total = 0;
//   if (numbers.length === 0) {
//     return 0;
//   } else {
//     for (let i = 0; i < numbers.length; i++) {
//       total += numbers[i];
//     }
//     return total;
//   }
// }

// TODO: Is n divisible by x and y?
// DESCRIPTION:
// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.
//
// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
//
//
// SOLUTION:
// const isDivisible = (n, x, y) => n % x === 0 && n % y === 0;

// TODO: Convert a String to a Number!
// DESCRIPTION:
// We need a function that can transform a string into a number. What ways of achieving this do you know?
//
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
//
// Examples:
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7
//
//
// SOLUTION:
// const stringToNumber = (str) => +str

// TODO: Convert number to reversed array of digits
// DESCRIPTION:
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//
// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]
//
// SOLUTION:
// function digitize(n) {
//   let reverseArray = Array.from(String(n)).reverse();
//   for (let i = 0; i < reverseArray.length; i++) {
//     reverseArray[i] = Number(reverseArray[i])
//   }
//   return reverseArray;
// }

// TODO: Sentence Smash
// DESCRIPTION:
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
//
// Example:
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
//
// SOLUTION:
// let words = ['hello', 'world', 'this', 'is', 'great'];
//
// function smash(words) {
//   return words.join(' ');
// };
//
// console.log(smash(words));

// TODO: Find the next perfect square!
// DESCRIPTION:
// You might know some pretty large perfect squares. But what about the NEXT one?
//
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
//
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
//
// Examples:(Input --> Output)
//
// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square
//
// SOLUTION:
// function findNextSquare(sq) {
//   const squareRoot = Math.sqrt(sq);
//   if (squareRoot >= 0 && Number.isInteger(squareRoot)) {
//     return (squareRoot + 1) * (squareRoot + 1)
//   } else {
//     return -1;
//   }
// }
//
// console.log(findNextSquare(120))

// TODO: A Needle in the Haystack
// DESCRIPTION:
// Can you find the needle in the haystack?
//
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
//
// After your function finds the needle it should return a message (as a string) that says:
//
// "found the needle at position " plus the index it found the needle, so:
//
// Example(Input --> Output)
//
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
// Note: In COBOL, it should return "found the needle at position 6"
//
// SOLUTION:
// const findNeedle = (haystack) => `found the needle at position ${haystack.indexOf('needle')}`

// TODO: A Needle in the Haystack
// DESCRIPTION:
// Can you find the needle in the haystack?
//
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
//
// After your function finds the needle it should return a message (as a string) that says:
//
// "found the needle at position " plus the index it found the needle, so:
//
// Example(Input --> Output)
//
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
// Note: In COBOL, it should return "found the needle at position 6"
//
// SOLUTION:
// const findNeedle = (haystack) => `found the needle at position ${haystack.indexOf('needle')}`