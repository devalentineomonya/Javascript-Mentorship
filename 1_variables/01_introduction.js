// Introduction to Variables in JavaScript
// =======================================

// Variables are containers for storing data values.
// In JavaScript, we have three ways to declare variables:

// 1. Using 'var' (older way, function-scoped)
var oldWayVariable = "I'm declared using var"

// 2. Using 'let' (introduced in ES6, block-scoped, can be reassigned)
let modernVariable = "I'm declared using let"
modernVariable = "I can be changed!"

// 3. Using 'const' (introduced in ES6, block-scoped, cannot be reassigned)
const constantVariable = "I'm declared using const"
// constantVariable = "This will cause an error"; // Uncommenting this will cause an error

// Best practice: Use 'const' by default, and only use 'let' when you know the value will change
// Avoid using 'var' in modern JavaScript code

console.log("Variable declared with var:", oldWayVariable)
console.log("Variable declared with let:", modernVariable)
console.log("Variable declared with const:", constantVariable)
