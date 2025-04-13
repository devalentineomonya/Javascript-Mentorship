/*
 * Functional Programming in JavaScript
 *
 * Functional programming is a programming paradigm that treats computation as the evaluation
 * of mathematical functions and avoids changing state and mutable data.
 */

// Core Principles
console.log("=== Core Principles of Functional Programming ===")

// 1. Pure Functions
console.log("\n--- Pure Functions ---")
/*
 * Pure functions:
 * - Given the same input, always return the same output
 * - Have no side effects (don't modify external state)
 * - Don't rely on external state
 */

// Impure function (relies on external state)
let counter = 0
function incrementCounter() {
  counter++
  return counter
}

console.log(incrementCounter()) // 1
console.log(incrementCounter()) // 2 - different result for the same input

// Pure function
function add(a, b) {
  return a + b
}

console.log(add(2, 3)) // 5
console.log(add(2, 3)) // 5 - always the same result for the same input

// 2. Immutability
console.log("\n--- Immutability ---")
/*
 * Immutability means not changing data once it's created.
 * Instead of modifying existing data, create new data structures.
 */

// Mutable approach
const mutableArray = [1, 2, 3]
mutableArray.push(4) // Modifies the original array
console.log(mutableArray) // [1, 2, 3, 4]

// Immutable approach
const immutableArray = [1, 2, 3]
const newArray = [...immutableArray, 4] // Creates a new array
console.log(immutableArray) // [1, 2, 3] - original unchanged
console.log(newArray) // [1, 2, 3, 4]

// With objects
const user = { name: "John", age: 30 }
const updatedUser = { ...user, age: 31 } // Creates a new object
console.log(user) // { name: 'John', age: 30 }
console.log(updatedUser) // { name: 'John', age: 31 }

// 3. Function Composition
console.log("\n--- Function Composition ---")
/*
 * Function composition is the process of combining two or more functions
 * to produce a new function.
 */

function double(x) {
  return x * 2
}

function increment(x) {
  return x + 1
}

// Manual composition
function doubleAndIncrement(x) {
  return increment(double(x))
}

console.log(doubleAndIncrement(3)) // 7 (3 * 2 + 1)

// Composition helper
function compose(...functions) {
  return (x) => functions.reduceRight((acc, fn) => fn(acc), x)
}

const doubleAndIncrementComposed = compose(increment, double)
console.log(doubleAndIncrementComposed(3)) // 7

// 4. Higher-Order Functions
console.log("\n--- Higher-Order Functions ---")
/*
 * Higher-order functions either:
 * - Take one or more functions as arguments
 * - Return a function as its result
 */

// Function that takes a function as an argument
function applyOperation(x, y, operation) {
  return operation(x, y)
}

console.log(applyOperation(5, 3, add)) // 8

// Function that returns a function
function multiply(factor) {
  return (number) => number * factor
}

const double2 = multiply(2)
const triple = multiply(3)

console.log(double2(5)) // 10
console.log(triple(5)) // 15

// Common Functional Programming Techniques
console.log("\n=== Common Functional Programming Techniques ===")

// 1. Map, Filter, Reduce
console.log("\n--- Map, Filter, Reduce ---")

const numbers = [1, 2, 3, 4, 5]

// Map: Transform each element
const doubled = numbers.map((n) => n * 2)
console.log(doubled) // [2, 4, 6, 8, 10]

// Filter: Keep elements that pass a test
const evens = numbers.filter((n) => n % 2 === 0)
console.log(evens) // [2, 4]

// Reduce: Accumulate values
const sum = numbers.reduce((acc, n) => acc + n, 0)
console.log(sum) // 15

// Combining them
const result = numbers
  .filter((n) => n % 2 === 0) // Keep even numbers
  .map((n) => n * 2) // Double them
  .reduce((acc, n) => acc + n, 0) // Sum them up

console.log(result) // 12 (2*2 + 4*2)

// 2. Currying
console.log("\n--- Currying ---")
/*
 * Currying is the technique of translating a function with multiple arguments
 * into a sequence of functions with single arguments.
 */

// Regular function with multiple arguments
function addRegular(a, b, c) {
  return a + b + c
}

// Curried version
function addCurried(a) {
  return (b) => (c) => a + b + c
}

console.log(addRegular(1, 2, 3)) // 6
console.log(addCurried(1)(2)(3)) // 6

// Practical example
function formatString(template) {
  return (value) => template.replace("%s", value)
}

const formatName = formatString("Hello, %s!")
console.log(formatName("John")) // Hello, John!
console.log(formatName("Jane")) // Hello, Jane!

// 3. Partial Application
console.log("\n--- Partial Application ---")
/*
 * Partial application is the process of fixing a number of arguments to a function,
 * producing another function of smaller arity.
 */

function partial(fn, ...args) {
  return (...moreArgs) => fn(...args, ...moreArgs)
}

function greet(greeting, name) {
  return `${greeting}, ${name}!`
}

const sayHello = partial(greet, "Hello")
console.log(sayHello("John")) // Hello, John!
console.log(sayHello("Jane")) // Hello, Jane!

// 4. Point-Free Style
console.log("\n--- Point-Free Style ---")
/*
 * Point-free style is a way of defining functions without explicitly mentioning
 * their arguments.
 */

// With explicit arguments
const isEven = (number) => number % 2 === 0

// Point-free style
const isEven2 = (n) => n % 2 === 0

console.log(numbers.filter(isEven)) // [2, 4]
console.log(numbers.filter(isEven2)) // [2, 4]

// Functional Libraries
console.log("\n=== Functional Libraries ===")
/*
 * Several libraries exist to help with functional programming in JavaScript:
 * - Ramda
 * - Lodash/fp
 * - Immutable.js
 */

// Example of what you might do with Ramda
/*
import * as R from 'ramda';

const users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 20 }
];

// Get names of users over 21
const getNamesOfAdults = R.pipe(
    R.filter(user => user.age >= 21),
    R.map(R.prop('name')),
    R.join(', ')
);

console.log(getNamesOfAdults(users));  // "John, Jane"
*/

// Practical Examples
console.log("\n=== Practical Examples ===")

// 1. Data Transformation Pipeline
console.log("\n--- Data Transformation Pipeline ---")

const products = [
  { id: 1, name: "Laptop", price: 1000, category: "Electronics" },
  { id: 2, name: "Book", price: 15, category: "Books" },
  { id: 3, name: "Phone", price: 500, category: "Electronics" },
  { id: 4, name: "Desk", price: 200, category: "Furniture" },
]

// Find the total price of all electronics
const totalElectronicsPrice = products
  .filter((product) => product.category === "Electronics")
  .map((product) => product.price)
  .reduce((total, price) => total + price, 0)

console.log("Total electronics price:", totalElectronicsPrice) // 1500

// 2. Function Composition for Form Validation
console.log("\n--- Form Validation ---")

// Validation functions
const isNotEmpty = (value) => value.trim().length > 0
const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
const isMinLength = (length) => (value) => value.length >= length

// Compose validations
function validateField(value, validations) {
  return validations.every((validation) => validation(value))
}

const emailValidations = [isNotEmpty, isEmail]
const passwordValidations = [isNotEmpty, isMinLength(8)]

console.log(validateField("user@example.com", emailValidations)) // true
console.log(validateField("invalid-email", emailValidations)) // false
console.log(validateField("password123", passwordValidations)) // true
console.log(validateField("short", passwordValidations)) // false

// 3. Memoization
console.log("\n--- Memoization ---")
/*
 * Memoization is an optimization technique that stores the results of expensive
 * function calls and returns the cached result when the same inputs occur again.
 */

function memoize(fn) {
  const cache = {}

  return (...args) => {
    const key = JSON.stringify(args)

    if (cache[key]) {
      console.log("Returning from cache")
      return cache[key]
    }

    console.log("Computing result")
    const result = fn(...args)
    cache[key] = result
    return result
  }
}

function fibonacci(n) {
  if (n <= 1) return n
  return fibonacci(n - 1) + fibonacci(n - 2)
}

const memoizedFibonacci = memoize((n) => {
  if (n <= 1) return n
  return memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2)
})

console.time("Regular fibonacci")
console.log(fibonacci(20))
console.timeEnd("Regular fibonacci")

console.time("Memoized fibonacci")
console.log(memoizedFibonacci(20))
console.timeEnd("Memoized fibonacci")

// Call again to see the cache in action
console.time("Memoized fibonacci (cached)")
console.log(memoizedFibonacci(20))
console.timeEnd("Memoized fibonacci (cached)")

// Benefits and Challenges
console.log("\n=== Benefits and Challenges ===")

/*
 * Benefits of Functional Programming:
 * 1. Predictability: Pure functions are easier to reason about
 * 2. Testability: Pure functions are easier to test
 * 3. Concurrency: Immutable data and pure functions make concurrent programming safer
 * 4. Reusability: Small, focused functions can be reused in different contexts
 *
 * Challenges:
 * 1. Learning curve: Different way of thinking for many developers
 * 2. Performance: Creating new objects instead of mutating can be less efficient
 * 3. Integration: Not all libraries or APIs follow functional principles
 */

// Conclusion
console.log("\n=== Conclusion ===")
/*
 * Functional programming in JavaScript:
 * - Emphasizes pure functions, immutability, and function composition
 * - Provides powerful tools like map, filter, reduce, and higher-order functions
 * - Can be mixed with other paradigms for pragmatic solutions
 * - Leads to more maintainable and testable code when used appropriately
 */
