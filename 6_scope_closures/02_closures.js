// Closures in JavaScript
// ====================

// A closure is a function that remembers its outer variables and can access them
// In other words, a closure gives you access to an outer function's scope from an inner function

// 1. Basic Closure Example
// ---------------------
function outerFunction() {
  const outerVariable = "I'm from the outer function"

  function innerFunction() {
    console.log(outerVariable) // The inner function has access to outerVariable
  }

  return innerFunction // Return the inner function
}

const closure = outerFunction() // outerFunction has executed, but outerVariable still exists in memory
closure() // "I'm from the outer function"

// 2. Closures with Parameters
// ------------------------
function createGreeter(greeting) {
  return (name) => {
    console.log(`${greeting}, ${name}!`)
  }
}

const greetWithHello = createGreeter("Hello")
const greetWithHi = createGreeter("Hi")

greetWithHello("Alice") // "Hello, Alice!"
greetWithHi("Bob") // "Hi, Bob!"

// 3. Practical Uses of Closures
// --------------------------

// Example 1: Data Privacy / Encapsulation
function createCounter() {
  let count = 0 // Private variable

  return {
    increment() {
      count++
      return count
    },
    decrement() {
      count--
      return count
    },
    getCount() {
      return count
    },
  }
}

const counter1 = createCounter()
console.log(counter1.increment()) // 1
console.log(counter1.increment()) // 2
console.log(counter1.getCount()) // 2
// console.log(count) // Error: count is not defined (it's private)

const counter2 = createCounter() // A new, separate counter
console.log(counter2.getCount()) // 0 (independent from counter1)

// Example 2: Function Factories
function multiplyBy(factor) {
  return (number) => number * factor
}

const double = multiplyBy(2)
const triple = multiplyBy(3)
const quadruple = multiplyBy(4)

console.log(double(5)) // 10
console.log(triple(5)) // 15
console.log(quadruple(5)) // 20

// Example 3: Event Handlers and Callbacks
function setupButton(buttonId, message) {
  // In a browser, this would attach a click handler to a button
  // The handler forms a closure over the message variable

  // Simulating a click handler
  function onClick() {
    console.log(message)
  }

  // In a real app: document.getElementById(buttonId).addEventListener('click', onClick)

  // For demonstration, we'll just call it directly
  console.log(`Button ${buttonId} clicked:`)
  onClick()
}

setupButton("btn1", "Button 1 was clicked")
setupButton("btn2", "Button 2 was clicked")

// 4. Closures and Loops
// ------------------

// A common pitfall: creating closures in loops
function createFunctionsWithPitfall() {
  const functions = []

  for (var i = 0; i < 3; i++) {
    functions.push(() => {
      console.log(i)
    })
  }

  return functions
}

const functionsWithPitfall = createFunctionsWithPitfall()
functionsWithPitfall[0]() // 3 (not 0 as might be expected)
functionsWithPitfall[1]() // 3
functionsWithPitfall[2]() // 3

// Solution 1: Use let instead of var (block scope)
function createFunctionsWithLet() {
  const functions = []

  for (let i = 0; i < 3; i++) {
    functions.push(() => {
      console.log(i)
    })
  }

  return functions
}

const functionsWithLet = createFunctionsWithLet()
functionsWithLet[0]() // 0
functionsWithLet[1]() // 1
functionsWithLet[2]() // 2

// Solution 2: Use an IIFE to create a new scope
function createFunctionsWithIIFE() {
  const functions = []

  for (var i = 0; i < 3; i++) {
    ;((capturedI) => {
      functions.push(() => {
        console.log(capturedI)
      })
    })(i)
  }

  return functions
}

const functionsWithIIFE = createFunctionsWithIIFE()
functionsWithIIFE[0]() // 0
functionsWithIIFE[1]() // 1
functionsWithIIFE[2]() // 2

// 5. Memory Considerations
// ---------------------
// Closures can lead to memory leaks if not handled properly
// When a closure references large objects from outer scopes, those objects
// cannot be garbage collected as long as the closure exists

function potentialMemoryLeak() {
  const largeData = new Array(1000000).fill("potentially large data")

  return () => {
    // This inner function forms a closure over largeData
    console.log(largeData.length)
  }
}

const leakyFunction = potentialMemoryLeak()
// largeData is still in memory as long as leakyFunction exists

// Solution: Only keep what you need
function betterMemoryUsage() {
  const largeData = new Array(1000000).fill("potentially large data")
  const dataLength = largeData.length // Only keep what we need

  return () => {
    console.log(dataLength)
  }
  // largeData can be garbage collected after this function returns
}

const efficientFunction = betterMemoryUsage()

// 6. Closures and 'this'
// -------------------
// Closures capture variables, not the 'this' binding

const obj = {
  value: 42,
  getValue: function () {
    return this.value
  },
  getValueArrow: () => this.value, // 'this' is from enclosing scope, not obj
  createGetter: () =>
    function () {
      return this.value // 'this' will depend on how this function is called
    },
  createGetterFixed: function () {
    return () => {
      return this.value // Use the captured 'this'
    }
  },
  createGetterArrow: function () {
    return () => this.value // Arrow function captures 'this' from createGetterArrow
  },
}

console.log(obj.getValue()) // 42
console.log(obj.getValueArrow()) // undefined (in Node.js) or window.value (in browser)

const getter = obj.createGetter()
console.log(getter()) // undefined (this is global object, not obj)
console.log(getter.call(obj)) // 42 (explicitly setting this to obj)

const getterFixed = obj.createGetterFixed()
console.log(getterFixed()) // 42 (works regardless of how it's called)

const getterArrow = obj.createGetterArrow()
console.log(getterArrow()) // 42 (works regardless of how it's called)

// 7. Module Pattern (Pre-ES6)
// ------------------------
// Closures enable the module pattern, a way to create private and public members

const calculator = (() => {
  // Private members
  let result = 0

  function add(a, b) {
    return a + b
  }

  function subtract(a, b) {
    return a - b
  }

  // Public API
  return {
    add: function (value) {
      result = add(result, value)
      return this // For method chaining
    },
    subtract: function (value) {
      result = subtract(result, value)
      return this // For method chaining
    },
    getResult: () => result,
  }
})()

console.log(calculator.add(5).add(3).subtract(2).getResult()) // 6

// 8. Closures in Asynchronous JavaScript
// -----------------------------------
// Closures are essential for maintaining state in asynchronous operations

function fetchData(url) {
  const requestId = Math.floor(Math.random() * 1000)

  // The callback forms a closure over requestId and url
  setTimeout(() => {
    console.log(`Data received for request ${requestId} from ${url}`)
  }, 1000)

  console.log(`Request ${requestId} sent to ${url}`)
}

fetchData("https://api.example.com/data")
