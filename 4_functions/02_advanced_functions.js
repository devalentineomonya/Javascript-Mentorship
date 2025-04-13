// Advanced Function Concepts in JavaScript
// =====================================

// 1. Higher-Order Functions
// ----------------------
// Functions that take other functions as arguments or return functions

// Function that takes another function as an argument
function executeOperation(operation, a, b) {
  return operation(a, b)
}

// Functions to pass as arguments
function add(x, y) {
  return x + y
}

function multiply(x, y) {
  return x * y
}

console.log(executeOperation(add, 5, 3)) // 8
console.log(executeOperation(multiply, 5, 3)) // 15

// Function that returns another function
function createMultiplier(factor) {
  // Returns a new function that multiplies its argument by factor
  return (number) => number * factor
}

const double = createMultiplier(2)
const triple = createMultiplier(3)

console.log(double(5)) // 10
console.log(triple(5)) // 15

// 2. Closures
// ---------
// A closure is a function that remembers its outer variables and can access them

function createCounter() {
  let count = 0 // This variable is "enclosed" in the returned function

  return () => {
    count++ // The inner function has access to count
    return count
  }
}

const counter1 = createCounter()
const counter2 = createCounter() // A separate counter with its own enclosed count

console.log(counter1()) // 1
console.log(counter1()) // 2
console.log(counter2()) // 1 (separate instance)

// Practical example: Private variables
function createBankAccount(initialBalance) {
  let balance = initialBalance // Private variable

  return {
    deposit: (amount) => {
      balance += amount
      return `Deposited ${amount}. New balance: ${balance}`
    },
    withdraw: (amount) => {
      if (amount > balance) {
        return "Insufficient funds"
      }
      balance -= amount
      return `Withdrew ${amount}. New balance: ${balance}`
    },
    getBalance: () => `Current balance: ${balance}`,
  }
}

const account = createBankAccount(100)
console.log(account.getBalance()) // "Current balance: 100"
console.log(account.deposit(50)) // "Deposited 50. New balance: 150"
console.log(account.withdraw(30)) // "Withdrew 30. New balance: 120"
// console.log(account.balance) // undefined (balance is private)

// 3. Recursion
// ----------
// A function that calls itself

// Factorial calculation using recursion
function factorial(n) {
  // Base case: factorial of 0 or 1 is 1
  if (n <= 1) {
    return 1
  }
  // Recursive case: n! = n * (n-1)!
  return n * factorial(n - 1)
}

console.log(factorial(5)) // 120 (5 * 4 * 3 * 2 * 1)

// Fibonacci sequence using recursion
function fibonacci(n) {
  // Base cases
  if (n <= 0) return 0
  if (n === 1) return 1

  // Recursive case: fib(n) = fib(n-1) + fib(n-2)
  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(7)) // 13

// 4. Currying
// ---------
// Transforming a function with multiple arguments into a sequence of functions
// each with a single argument

// Regular function with multiple arguments
function regularAdd(a, b, c) {
  return a + b + c
}

// Curried version
function curriedAdd(a) {
  return (b) => (c) => a + b + c
}

console.log(regularAdd(1, 2, 3)) // 6
console.log(curriedAdd(1)(2)(3)) // 6

// Practical use of currying
function formatText(fontStyle) {
  return (fontSize) => (text) => `<span style="font-style:${fontStyle};font-size:${fontSize}">${text}</span>`
}

const italicText = formatText("italic")
const italicBigText = italicText("2em")

console.log(italicBigText("Hello")) // <span style="font-style:italic;font-size:2em">Hello</span>

// 5. Function Composition
// --------------------
// Combining multiple functions to create a new function

function addOne(x) {
  return x + 1
}

function doubleNum(x) {
  return x * 2
}

function square(x) {
  return x * x
}

// Manual composition
const manualCompose = (x) => square(doubleNum(addOne(x)))

console.log(manualCompose(3)) // 64: (3+1)*2^2

// Helper function for composition
function compose(...functions) {
  return (x) => functions.reduceRight((acc, fn) => fn(acc), x)
}

const composedFunction = compose(square, doubleNum, addOne)
console.log(composedFunction(3)) // 64: square(double(addOne(3)))

// 6. Memoization
// -----------
// Caching the results of expensive function calls

// Fibonacci without memoization (inefficient for large n)
function slowFibonacci(n) {
  if (n <= 0) return 0
  if (n === 1) return 1
  return slowFibonacci(n - 1) + slowFibonacci(n - 2)
}

// Fibonacci with memoization
function memoizedFibonacci() {
  const cache = {}

  return function fib(n) {
    // If we've already calculated this value, return it from cache
    if (n in cache) {
      return cache[n]
    }

    // Otherwise calculate it and store in cache
    let result
    if (n <= 0) result = 0
    else if (n === 1) result = 1
    else result = fib(n - 1) + fib(n - 2)

    cache[n] = result
    return result
  }
}

const fastFibonacci = memoizedFibonacci()
console.log(fastFibonacci(40)) // Much faster than slowFibonacci(40)

// 7. Function Borrowing
// ------------------
// Using methods of one object on another object

const person1 = {
  fullName: function () {
    return `${this.firstName} ${this.lastName}`
  },
}

const person2 = {
  firstName: "John",
  lastName: "Doe",
}

// Using call to borrow the fullName method
console.log(person1.fullName.call(person2)) // "John Doe"

// 8. Partial Application
// -------------------
// Fixing a number of arguments to a function, producing another function of smaller arity

function partial(fn, ...args) {
  return (...moreArgs) => fn(...args, ...moreArgs)
}

function greet(greeting, name) {
  return `${greeting}, ${name}!`
}

const sayHello = partial(greet, "Hello")
console.log(sayHello("World")) // "Hello, World!"
