// JavaScript Data Types
// ====================

// 1. Primitive Data Types
// -----------------------

// String - for text
const name = "John Doe"
const greeting = "Hello World" // Single or double quotes are both valid
const template = `Hello, ${name}` // Template literals (ES6)

// Number - for integers and floating point numbers
const age = 25
const price = 19.99
const negativeNumber = -42

// Boolean - true or false
const isActive = true
const isCompleted = false

// Undefined - a variable that has been declared but not assigned a value
let undefinedVariable

// Null - represents the intentional absence of any value
const emptyValue = null

// Symbol - unique and immutable primitive value (ES6)
const uniqueSymbol = Symbol("description")

// BigInt - for integers larger than the Number type can handle (ES2020)
const bigNumber = 9007199254740991n

// 2. Reference Data Types
// ----------------------

// Object - collection of key-value pairs
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
}

// Array - ordered collection of values
const colors = ["red", "green", "blue"]

// Function - reusable block of code
function greet() {
  return "Hello!"
}

// Date - represents a single moment in time
const today = new Date()

// 3. Checking Data Types
// ---------------------
console.log("Type of name:", typeof name)
console.log("Type of age:", typeof age)
console.log("Type of isActive:", typeof isActive)
console.log("Type of undefinedVariable:", typeof undefinedVariable)
console.log("Type of emptyValue:", typeof emptyValue) // Note: typeof null returns "object" (this is a known JavaScript quirk)
console.log("Type of uniqueSymbol:", typeof uniqueSymbol)
console.log("Type of person:", typeof person)
console.log("Type of colors:", typeof colors) // Note: typeof array returns "object"
console.log("Type of greet:", typeof greet)

// 4. Type Conversion
// -----------------
// String to Number
const stringNumber = "42"
const convertedNumber = Number(stringNumber)
console.log("Converted string to number:", convertedNumber)

// Number to String
const numberValue = 100
const convertedString = String(numberValue)
console.log("Converted number to string:", convertedString)

// Boolean conversion
console.log("Number to boolean:", Boolean(1)) // true
console.log("Empty string to boolean:", Boolean("")) // false
