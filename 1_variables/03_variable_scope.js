// Variable Scope in JavaScript
// ===========================

// 1. Global Scope
// --------------
// Variables declared outside of any function or block have global scope
const globalVariable = "I'm a global variable"

// 2. Function Scope
// ----------------
// Variables declared inside a function are only accessible within that function
function functionScopeExample() {
  const functionVariable = "I'm a function-scoped variable"
  console.log(functionVariable) // Accessible
  console.log(globalVariable) // Global variables are accessible inside functions
}

// console.log(functionVariable); // Error: functionVariable is not defined

// 3. Block Scope (introduced with let and const in ES6)
// ------------
// Variables declared inside a block (enclosed by curly braces) are only accessible within that block
if (true) {
  const blockVariable = "I'm a block-scoped variable"
  const anotherBlockVariable = "I'm also block-scoped"
  var notBlockScoped = "I'm not block-scoped (because I use var)"

  console.log(blockVariable) // Accessible
  console.log(anotherBlockVariable) // Accessible
}

// console.log(blockVariable);        // Error: blockVariable is not defined
// console.log(anotherBlockVariable); // Error: anotherBlockVariable is not defined
console.log(notBlockScoped) // Accessible (var ignores block scope)

// 4. Lexical Scope (Nested Functions)
// ---------------------------------
function outerFunction() {
  const outerVariable = "I'm from the outer function"

  function innerFunction() {
    const innerVariable = "I'm from the inner function"
    console.log(outerVariable) // Inner function can access outer function's variables
    console.log(innerVariable) // Inner function can access its own variables
    console.log(globalVariable) // Inner function can access global variables
  }

  innerFunction()
  // console.log(innerVariable); // Error: innerVariable is not defined
}

outerFunction()

// 5. Temporal Dead Zone (TDZ)
// --------------------------
// Variables declared with let and const exist in the TDZ from the start of the block until the declaration is executed
function temporalDeadZoneExample() {
  // console.log(tdz); // Error: Cannot access 'tdz' before initialization
  const tdz = "Temporal Dead Zone variable"
  console.log(tdz) // Works fine after declaration
}

temporalDeadZoneExample()
