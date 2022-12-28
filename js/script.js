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