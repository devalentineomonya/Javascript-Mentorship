/*
 * ES6 Features: Arrow Functions
 *
 * This file introduces arrow functions, a concise syntax for writing functions
 * introduced in ES6 (ECMAScript 2015).
 */

// Traditional function expressions
console.log("--- Traditional Function Expressions ---")

// Function declaration
function add(a, b) {
  return a + b
}

// Function expression
const multiply = (a, b) => a * b

console.log("add(2, 3):", add(2, 3)) // 5
console.log("multiply(2, 3):", multiply(2, 3)) // 6

// Arrow function syntax
console.log("\n--- Arrow Function Syntax ---")

// Basic arrow function
const subtract = (a, b) => {
  return a - b
}

// Simplified return (implicit return)
const divide = (a, b) => a / b

// Single parameter (parentheses optional)
const square = (x) => x * x

// No parameters (parentheses required)
const getRandomNumber = () => Math.random()

console.log("subtract(5, 2):", subtract(5, 2)) // 3
console.log("divide(6, 2):", divide(6, 2)) // 3
console.log("square(4):", square(4)) // 16
console.log("getRandomNumber():", getRandomNumber()) // Random number between 0 and 1

// Arrow functions with arrays
console.log("\n--- Arrow Functions with Arrays ---")

const numbers = [1, 2, 3, 4, 5]

// Traditional way
const doubledTraditional = numbers.map((num) => num * 2)

// Arrow function way
const doubledArrow = numbers.map((num) => num * 2)

console.log("Original array:", numbers)
console.log("Doubled (traditional):", doubledTraditional)
console.log("Doubled (arrow):", doubledArrow)

// More array examples
const evens = numbers.filter((num) => num % 2 === 0)
const sum = numbers.reduce((total, num) => total + num, 0)

console.log("Even numbers:", evens)
console.log("Sum of numbers:", sum)

// Lexical 'this' binding
console.log('\n--- Lexical "this" Binding ---')

// Traditional functions create their own 'this' context
function Counter() {
  this.count = 0

  this.start = function () {
    console.log("Traditional function:")
    console.log("Initial count:", this.count)

    // 'this' is lost in the callback
    setTimeout(function () {
      this.count++ // 'this' refers to the global object or undefined in strict mode
      console.log("After 1ms:", this.count) // NaN or error
    }, 1)
    
    setTimeout(() => {
      this.count++
      console.log("Using self:", this.count) // 1
    }, 1)

    // Workaround 2: Use bind
    setTimeout(
      function () {
        this.count++
        console.log("Using bind:", this.count) // 2
      }.bind(this),
      1,
    )
  }

  this.startWithArrow = function () {
    console.log("\nArrow function:")
    console.log("Initial count:", this.count)

    // Arrow functions inherit 'this' from the enclosing scope
    setTimeout(() => {
      this.count++
      console.log("After 1ms:", this.count) // 3
    }, 1)
  }
}

const counter = new Counter()
counter.start()
setTimeout(() => counter.startWithArrow(), 100) // Delay to see the output in order

// When NOT to use arrow functions
console.log("\n--- When NOT to Use Arrow Functions ---")

// 1. Object methods
const person = {
  name: "Alice",
  // Bad: arrow function doesn't have its own 'this'
  greetArrow: () => {
    console.log(`Arrow: Hello, my name is ${this.name}`) // 'this' refers to the outer scope
  },
  // Good: method shorthand
  greet() {
    console.log(`Method: Hello, my name is ${this.name}`)
  },
}

person.greetArrow() // Arrow: Hello, my name is undefined
person.greet() // Method: Hello, my name is Alice

// 2. Constructor functions
// const Person = (name) => {
//   this.name = name; // Error: 'this' is not defined
// };
// const alice = new Person('Alice'); // Error: Person is not a constructor

// 3. Event handlers that need access to 'this' as the element
function setupButton() {
  const button = document.createElement("button")
  button.textContent = "Click me"

  // Bad: 'this' doesn't refer to the button
  // button.addEventListener('click', () => {
  //   console.log('Arrow this:', this); // Window or undefined
  //   this.textContent = 'Clicked';     // Error
  // });

  // Good: 'this' refers to the button
  button.addEventListener("click", function () {
    console.log("Function this:", this) // The button element
    this.textContent = "Clicked" // Works
  })

  // document.body.appendChild(button);
}

// Practical examples
console.log("\n--- Practical Examples ---")

// Immediately Invoked Arrow Function Expression (IIAFE)
const result = ((x, y) => {
  const sum = x + y
  return sum * sum
})(3, 4)

console.log("IIAFE result:", result) // 49

// Currying with arrow functions
const add3 = (a) => (b) => (c) => a + b + c
console.log("Curried addition:", add3(1)(2)(3)) // 6

// Composition with arrow functions
const compose = (f, g) => (x) => f(g(x))
const addOne = (x) => x + 1
const double = (x) => x * 2
const addOneThenDouble = compose(double, addOne)

console.log("Composed functions:", addOneThenDouble(3)) // 8 (double(addOne(3)))

// Best practices
console.log("\n--- Best Practices ---")

// 1. Use arrow functions for short callbacks
const fruits = ["apple", "banana", "orange"]
const fruitLengths = fruits.map((fruit) => fruit.length)
console.log("Fruit lengths:", fruitLengths)

// 2. Use traditional functions for methods and complex functions
function complexOperation(data) {
  // Multiple lines of code
  const result = data
    .map((item) => item * 2)
    .filter((item) => item > 5)
    .reduce((sum, item) => sum + item, 0)
  return result
}

console.log("Complex operation:", complexOperation([1, 2, 3, 4])) // 6 + 8 = 14

// 3. Be consistent with your style
const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
}

console.log("Operation results:", {
  add: operations.add(5, 3),
  subtract: operations.subtract(5, 3),
  multiply: operations.multiply(5, 3),
  divide: operations.divide(6, 3),
})
