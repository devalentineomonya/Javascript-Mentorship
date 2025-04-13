// Understanding 'this' Keyword in JavaScript
// =======================================

// The value of 'this' depends on how a function is called
// It can be one of the most confusing aspects of JavaScript

// 1. Global Context
// --------------
// In the global context (outside any function), 'this' refers to the global object
// In a browser, the global object is 'window'
// In Node.js, the global object is 'global'

console.log("Global this:", this) // In a browser: Window, in Node.js: {}

// 2. Function Context
// ----------------
// In a regular function, 'this' depends on how the function is called

// Simple function call
function showThis() {
  console.log("In regular function:", this)
}

showThis() // In a browser: Window, in Node.js: global

// 3. Method Context
// --------------
// When a function is called as a method of an object, 'this' refers to the object

const person = {
  name: "John",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`)
    console.log("In method:", this)
  },
}

person.greet() // 'this' refers to the person object

// 4. Constructor Context
// -------------------
// When a function is used as a constructor with 'new', 'this' refers to the newly created object

function Person(name) {
  this.name = name
  console.log("In constructor:", this)
}

const john = new Person("John") // 'this' refers to the new Person object

// 5. Event Handler Context
// ---------------------
// In event handlers, 'this' typically refers to the element that received the event
// (This example would work in a browser environment)

// document.getElementById('myButton').addEventListener('click', function() {
//   console.log("Button clicked, this:", this); // 'this' refers to the button element
// });

// 6. Arrow Functions and 'this'
// --------------------------
// Arrow functions don't have their own 'this' context
// They inherit 'this' from the enclosing lexical context

const arrowExample = {
  name: "Arrow Example",
  regularFunction: function () {
    console.log("Regular function this:", this.name) // "Arrow Example"

    // Arrow function inside regular function
    const arrowFunction = () => {
      console.log("Arrow function this:", this.name) // "Arrow Example" (inherited)
    }

    arrowFunction()
  },
  arrowMethod: () => {
    console.log("Arrow method this:", this.name) // undefined (inherited from global context)
  },
}

arrowExample.regularFunction()
arrowExample.arrowMethod()

// 7. Explicit Binding
// ----------------
// You can explicitly set the value of 'this' using call(), apply(), or bind()

function introduce(greeting) {
  console.log(`${greeting}, my name is ${this.name}`)
}

const alice = { name: "Alice" }
const bob = { name: "Bob" }

// Using call (arguments passed individually)
introduce.call(alice, "Hello") // "Hello, my name is Alice"

// Using apply (arguments passed as an array)
introduce.apply(bob, ["Hi"]) // "Hi, my name is Bob"

// Using bind (returns a new function with 'this' bound)
const introduceAlice = introduce.bind(alice)
introduceAlice("Howdy") // "Howdy, my name is Alice"

// 8. Common Pitfalls
// ---------------

// Losing 'this' context when passing methods as callbacks
const user = {
  name: "User",
  sayName: function () {
    console.log(this.name)
  },
}

// Direct method call
user.sayName() // "User"

// Passing the method as a callback loses the context
// setTimeout(user.sayName, 100) // undefined (or error)

// Solutions:

// 1. Using bind
setTimeout(user.sayName.bind(user), 100) // "User"

// 2. Using arrow function to preserve lexical scope
setTimeout(() => user.sayName(), 100) // "User"

// 3. Using wrapper function
setTimeout(() => {
  user.sayName()
}, 100) // "User"

// 9. 'this' in nested functions
// --------------------------
const outer = {
  name: "Outer",
  inner: {
    name: "Inner",
    showName: function () {
      console.log("Inner name:", this.name) // "Inner"

      function nestedFunction() {
        console.log("Nested function name:", this.name) // undefined (or global)
      }

      nestedFunction()

      // Solution: preserve 'this' with a variable
      const self = this
      function nestedWithSelf() {
        console.log("Using self:", self.name) // "Inner"
      }

      nestedWithSelf()

      // Or use an arrow function
      const nestedArrow = () => {
        console.log("Nested arrow name:", this.name) // "Inner"
      }

      nestedArrow()
    },
  },
}

outer.inner.showName()
