// Scope in JavaScript
// =================

// Scope determines the accessibility of variables, objects, and functions from different parts of the code

// 1. Global Scope
// -------------
// Variables declared outside of any function or block have global scope
// They can be accessed from anywhere in the code

const globalVariable = "I'm a global variable"

function accessGlobal() {
  console.log(globalVariable) // Accessible
}

accessGlobal()
console.log(globalVariable) // Also accessible here

// 2. Function Scope (Local Scope)
// ----------------------------
// Variables declared inside a function are only accessible within that function

function functionScope() {
  const localVariable = "I'm a local variable"
  console.log(localVariable) // Accessible
}

functionScope()
// console.log(localVariable) // Error: localVariable is not defined

// 3. Block Scope (introduced in ES6)
// ------------------------------
// Variables declared with let and const are block-scoped
// A block is defined by curly braces {}

if (true) {
  const blockScoped = "I'm block-scoped"
  const alsoBlockScoped = "I'm also block-scoped"
  var notBlockScoped = "I'm not block-scoped (function-scoped)"

  console.log(blockScoped) // Accessible
  console.log(alsoBlockScoped) // Accessible
}

// console.log(blockScoped) // Error: blockScoped is not defined
// console.log(alsoBlockScoped) // Error: alsoBlockScoped is not defined
console.log(notBlockScoped) // Accessible (var ignores block scope)

// 4. Lexical Scope (Static Scope)
// ----------------------------
// Inner functions have access to variables declared in their outer scope

function outerFunction() {
  const outerVariable = "I'm from the outer function"

  function innerFunction() {
    const innerVariable = "I'm from the inner function"
    console.log(outerVariable) // Can access outer function's variables
    console.log(innerVariable) // Can access its own variables
  }

  innerFunction()
  // console.log(innerVariable) // Error: innerVariable is not defined
}

outerFunction()

// 5. Scope Chain
// -----------
// When a variable is used, JavaScript looks up the scope chain:
// current scope → outer scope → outer's outer scope → ... → global scope

const top = "top level"

function level1() {
  const level1Var = "level 1"

  function level2() {
    const level2Var = "level 2"

    function level3() {
      const level3Var = "level 3"
      console.log(top) // Found in global scope
      console.log(level1Var) // Found in level1's scope
      console.log(level2Var) // Found in level2's scope
      console.log(level3Var) // Found in current scope
    }

    level3()
  }

  level2()
}

level1()

// 6. Variable Shadowing
// ------------------
// When a variable in an inner scope has the same name as a variable in an outer scope

const value = "global"

function shadowExample() {
  const value = "local" // Shadows the global value
  console.log(value) // "local"
}

shadowExample()
console.log(value) // "global" (unchanged)

// 7. Hoisting
// --------
// Variable and function declarations are moved to the top of their scope during compilation

// Function declarations are hoisted completely
hoistedFunction() // Works even before declaration

function hoistedFunction() {
  console.log("I'm hoisted!")
}

// Variable declarations are hoisted, but not their assignments
var hoistedVar
console.log(hoistedVar) // undefined (not an error)
hoistedVar = "I'm partially hoisted"
console.log(hoistedVar) // "I'm partially hoisted"

// let and const are hoisted but not initialized (Temporal Dead Zone)
// console.log(notHoisted) // Error: Cannot access before initialization
const notHoisted = "I'm not accessible before declaration"

// 8. Global Object
// -------------
// In browsers, the global scope is the window object
// In Node.js, it's the global object

// Browser example:
// var browserGlobal = "I'm attached to window";
// console.log(window.browserGlobal); // "I'm attached to window"

// Node.js example:
// var nodeGlobal = "I'm attached to global";
// console.log(global.nodeGlobal); // "I'm attached to global"

// 9. Module Scope (ES6 Modules)
// --------------------------
// Variables declared in a module are scoped to that module unless explicitly exported

// In module1.js:
// export const moduleVariable = "I'm from module1";

// In module2.js:
// import { moduleVariable } from './module1.js';
// console.log(moduleVariable); // "I'm from module1"

// 10. Strict Mode
// ------------
// Strict mode makes several changes to normal JavaScript semantics
// It eliminates some JavaScript silent errors by changing them to throw errors

// Enable strict mode for a script
;("use strict")

// Or for a function
function strictFunction() {
  // This would cause an error in strict mode
  // undeclaredVariable = "This will throw an error"
}
// 11. Practical Examples
// ------------------

// Example 1: Avoiding global variables with IIFE
// (Immediately Invoked Function Expression)
;(() => {
  // All variables are local to this function
  const privateData = "This is private"
  console.log(privateData)
})()

// Example 2: Creating private variables with closures
function createCounter() {
  let count = 0 // Private variable

  return {
    increment: () => {
      count++
      return count
    },
    decrement: () => {
      count--
      return count
    },
    getCount: () => count,
  }
}

const counter = createCounter()
console.log(counter.increment()) // 1
console.log(counter.increment()) // 2
console.log(counter.decrement()) // 1
// console.log(counter.count) // undefined (private)
