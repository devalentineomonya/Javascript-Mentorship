// Functions - Exercises
// ===================

// Exercise 1: Function Types
// ------------------------
// Rewrite the following function declaration as a function expression and as an arrow function
// function multiply(a, b) {
//   return a * b;
// }
// Your code here:

// Exercise 2: Closures
// -----------------
// Create a function that generates unique IDs (incrementing numbers)
// Each call to the function should return the next number
// Your code here:

// Exercise 3: Higher-Order Functions
// -------------------------------
// Write a function called "calculate" that takes an operation function and two numbers
// It should return the result of applying the operation to the numbers
// Then create add, subtract, multiply, and divide functions to use with it
// Your code here:

// Exercise 4: Recursion
// ------------------
// Write a recursive function to calculate the sum of an array of numbers
// Your code here:

// Exercise 5: Function Composition
// -----------------------------
// Create three functions:
//

// Exercise 5: Function Composition
// -----------------------------
// Create three functions:
// 1. A function that adds 2 to a number
// 2. A function that multiplies a number by 3
// 3. A function that composes these two functions
// Your code here:

// ========== SOLUTIONS ==========
/*
// Exercise 1 Solution:
// Function expression
const multiplyExpression = function(a, b) {
  return a * b;
};

// Arrow function
const multiplyArrow = (a, b) => a * b;

console.log(multiplyExpression(4, 5)); // 20
console.log(multiplyArrow(4, 5)); // 20

// Exercise 2 Solution:
function createIdGenerator() {
  let id = 0;
  
  return function() {
    id++;
    return id;
  };
}

const generateId = createIdGenerator();
console.log(generateId()); // 1
console.log(generateId()); // 2
console.log(generateId()); // 3

// Exercise 3 Solution:
function calculate(operation, a, b) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

console.log(calculate(add, 10, 5)); // 15
console.log(calculate(subtract, 10, 5)); // 5
console.log(calculate(multiply, 10, 5)); // 50
console.log(calculate(divide, 10, 5)); // 2

// Exercise 4 Solution:
function sumArray(arr) {
  // Base case: empty array
  if (arr.length === 0) {
    return 0;
  }
  
  // Recursive case: first element + sum of rest of array
  return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15

// Exercise 5 Solution:
// Function that adds 2
const addTwo = (num) => num + 2;

// Function that multiplies by 3
const multiplyByThree = (num) => num * 3;

// Function that composes the two
const compose = (f, g) => (x) => f(g(x));

const addThenMultiply = compose(multiplyByThree, addTwo);
const multiplyThenAdd = compose(addTwo, multiplyByThree);

console.log(addThenMultiply(5)); // (5+2)*3 = 21
console.log(multiplyThenAdd(5)); // (5*3)+2 = 17
*/
