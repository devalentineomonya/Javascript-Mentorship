// Function Basics in JavaScript
// ===========================

// 1. Function Declaration
// ---------------------
// The most common way to define a function
function greet(name) {
  return `Hello, ${name}!`
}

console.log(greet("Alice")) // "Hello, Alice!"

// 2. Function Expression
// -------------------
// Assigning a function to a variable
const sayHello = (name) => `Hello, ${name}!`

console.log(sayHello("Bob")) // "Hello, Bob!"

// 3. Arrow Function (ES6)
// --------------------
// A shorter syntax for function expressions
const sayHi = (name) => {
  return `Hi, ${name}!`
}

console.log(sayHi("Charlie")) // "Hi, Charlie!"

// Shorter arrow function (implicit return)
const greetShort = (name) => `Hey, ${name}!`

console.log(greetShort("Dave")) // "Hey, Dave!"

// 4. Function Parameters and Arguments
// ---------------------------------
// Parameters are variables listed in the function definition
// Arguments are the values passed to the function when it's called

// Basic parameters
function add(a, b) {
  return a + b
}

console.log(add(5, 3)) // 8

// Default parameters (ES6)
function multiply(a, b = 1) {
  return a * b
}

console.log(multiply(5)) // 5 (b defaults to 1)
console.log(multiply(5, 3)) // 15 (b is provided)

// Rest parameters (ES6)
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0)
}

console.log(sum(1, 2, 3, 4, 5)) // 15

// 5. Return Statement
// ----------------
// Functions can return values using the return statement
function square(x) {
  return x * x
}

console.log(square(4)) // 16

// Early return
function isEven(num) {
  if (num % 2 === 0) {
    return true
  }
  return false
}

console.log(isEven(6)) // true
console.log(isEven(7)) // false

// Multiple returns (based on conditions)
function getAbsoluteValue(num) {
  if (num < 0) {
    return -num
  }
  return num
}

console.log(getAbsoluteValue(-5)) // 5
console.log(getAbsoluteValue(5)) // 5

// 6. Function Invocation (Calling Functions)
// ---------------------------------------
// Direct invocation
function sayHelloInvocation() {
  console.log("Hello!")
}

sayHelloInvocation() // "Hello!"

// Self-invoking function (IIFE - Immediately Invoked Function Expression)
;(() => {
  console.log("I run immediately!")
})()

// Function constructor (not recommended)
const multiplyFunc = new Function("a", "b", "return a * b")
console.log(multiplyFunc(4, 3)) // 12

// 7. Function Scope
// --------------
// Variables declared inside a function are not accessible from outside
function scopeExample() {
  const localVar = "I'm local to the function"
  console.log(localVar) // Accessible
}

scopeExample()
// console.log(localVar) // Error: localVar is not defined

// 8. Nested Functions
// ----------------
// Functions can be defined inside other functions
function outer() {
  console.log("I'm the outer function")

  function inner() {
    console.log("I'm the inner function")
  }

  inner() // Call the inner function
}

outer()
// inner() // Error: inner is not defined (only accessible inside outer)

// 9. Function Hoisting
// -----------------
// Function declarations are hoisted (moved to the top of their scope)
console.log(hoistedFunction()) // "I'm hoisted!" - Works even before declaration

function hoistedFunction() {
  return "I'm hoisted!"
}

// Function expressions are not hoisted in the same way
// console.log(notHoisted()) // Error: notHoisted is not a function

const notHoisted = () => "I'm not hoisted!"

console.log(notHoisted()) // "I'm not hoisted!" - Works after declaration

// 10. Pure Functions
// ---------------
// Functions that always return the same result for the same arguments
// and have no side effects
function pureAdd(a, b) {
  return a + b
}

console.log(pureAdd(5, 3)) // Always returns 8 for inputs 5 and 3

// Impure function (has side effects)
let counter = 0
function incrementCounter() {
  counter++
  return counter
}

console.log(incrementCounter()) // 1
console.log(incrementCounter()) // 2 (different result for the same input)
