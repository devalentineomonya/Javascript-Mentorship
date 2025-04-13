/*
 * ES6 Features: let and const
 *
 * This file introduces the let and const keywords for variable declarations,
 * which were introduced in ES6 (ECMAScript 2015).
 */

// Before ES6, we only had 'var' for variable declarations
console.log("--- var declarations ---")

function varExample() {
  console.log("Using var:")

  // var has function scope, not block scope
  if (true) {
    var x = 10
    console.log("Inside block:", x) // 10
  }
  console.log("Outside block:", x) // 10 - still accessible!

  // var variables can be redeclared
  var y = 20
  // var y = 30; // No error - Removed redeclaration
  console.log("Redeclared var:", y) // 30

  // var variables are hoisted
  var z // Declare z before using it
  console.log("Before declaration:", z) // undefined, not an error
  z = 40
  console.log("After declaration:", z) // 40
}

varExample()

// ES6 introduced 'let' for block-scoped variables
console.log("\n--- let declarations ---")

function letExample() {
  console.log("Using let:")

  // let has block scope
  if (true) {
    const a = 10
    console.log("Inside block:", a) // 10
  }
  // console.log('Outside block:', a); // ReferenceError: a is not defined

  // let variables cannot be redeclared in the same scope
  let b = 20
  // let b = 30; // SyntaxError: Identifier 'b' has already been declared

  // However, they can be updated
  b = 30
  console.log("Updated let:", b) // 30

  // let variables are not hoisted in the same way as var
  // console.log('Before declaration:', c); // ReferenceError: Cannot access 'c' before initialization
  const c = 40
  console.log("After declaration:", c) // 40

  // Block scoping with let
  {
    const d = 50
    console.log("Inner block:", d) // 50
  }
  // console.log('Outer block:', d); // ReferenceError: d is not defined
}

letExample()

// ES6 also introduced 'const' for constants
console.log("\n--- const declarations ---")

function constExample() {
  console.log("Using const:")

  // const also has block scope like let
  if (true) {
    const p = 100
    console.log("Inside block:", p) // 100
  }
  // console.log('Outside block:', p); // ReferenceError: p is not defined

  // const variables cannot be reassigned
  const q = 200
  // q = 300; // TypeError: Assignment to constant variable
  console.log("Constant value:", q) // 200

  // However, for objects and arrays, the content can be modified
  const person = { name: "John", age: 30 }
  person.age = 31 // This is allowed
  // person = { name: 'Jane', age: 25 }; // This is not allowed
  console.log("Modified object:", person) // { name: 'John', age: 31 }

  const numbers = [1, 2, 3]
  numbers.push(4) // This is allowed
  // numbers = [5, 6, 7]; // This is not allowed
  console.log("Modified array:", numbers) // [1, 2, 3, 4]

  // To make an object truly immutable, use Object.freeze()
  const frozenPerson = Object.freeze({ name: "Alice", age: 25 })
  // frozenPerson.age = 26; // This will not work (in strict mode it throws an error)
  console.log("Frozen object:", frozenPerson) // { name: 'Alice', age: 25 }
}

constExample()

// When to use var, let, and const
console.log("\n--- Best Practices ---")

function bestPractices() {
  console.log("Best practices for variable declarations:")

  // 1. Use const by default
  const PI = 3.14159
  const BASE_URL = "https://api.example.com"

  // 2. Use let when you need to reassign a variable
  let count = 0
  count += 1

  // 3. Avoid var in modern JavaScript
  // var oldWay = 'avoid this'; // Not recommended

  // 4. Use const for arrays and objects, even if their contents will change
  const user = { name: "John" }
  user.name = "Jane" // Changing properties is fine

  const items = []
  items.push("item") // Modifying the array is fine

  console.log("Final values:", { PI, BASE_URL, count, user, items })
}

bestPractices()

// Temporal Dead Zone (TDZ)
console.log("\n--- Temporal Dead Zone ---")

function temporalDeadZone() {
  console.log("Understanding the Temporal Dead Zone:")

  // Variables declared with let and const exist in the TDZ from the start of the block
  // until the declaration is executed

  // This will throw a ReferenceError
  // console.log(tdz); // ReferenceError: Cannot access 'tdz' before initialization

  const tdz = "Now I exist"
  console.log(tdz) // 'Now I exist'
}

temporalDeadZone()

// Practical example: loop variables
console.log("\n--- Practical Example: Loop Variables ---")

function loopExample() {
  console.log("Loop variables with var vs let:")

  // With var (problematic)
  console.log("With var:")
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log("var i =", i)
    }, 100)
  }
  // All callbacks will print "var i = 3" because they share the same variable

  // With let (correct)
  console.log("With let:")
  for (let j = 0; j < 3; j++) {
    setTimeout(() => {
      console.log("let j =", j)
    }, 100)
  }
  // Callbacks will print "let j = 0", "let j = 1", "let j = 2" because each iteration
  // has its own scoped variable
}

loopExample()
