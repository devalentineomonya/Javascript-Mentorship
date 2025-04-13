// Conditional Statements: if, else if, else
// ========================================

// 1. Basic if statement
// -------------------
// The code inside the if block executes only if the condition is true
const age = 18

if (age >= 18) {
  console.log("You are an adult.")
}

// 2. if...else statement
// --------------------
// Provides an alternative block of code to execute when the condition is false
const temperature = 15

if (temperature > 30) {
  console.log("It's hot outside!")
} else {
  console.log("It's not that hot today.")
}

// 3. if...else if...else statement
// ------------------------------
// Allows testing multiple conditions in sequence
const score = 85

if (score >= 90) {
  console.log("Grade: A")
} else if (score >= 80) {
  console.log("Grade: B")
} else if (score >= 70) {
  console.log("Grade: C")
} else if (score >= 60) {
  console.log("Grade: D")
} else {
  console.log("Grade: F")
}

// 4. Nested if statements
// ---------------------
// You can place if statements inside other if statements
const isLoggedIn = true
const isAdmin = true

if (isLoggedIn) {
  console.log("Welcome back!")

  if (isAdmin) {
    console.log("You have admin privileges.")
  } else {
    console.log("You have user privileges.")
  }
} else {
  console.log("Please log in to continue.")
}

// 5. Conditional (Ternary) Operator
// -------------------------------
// A shorthand way to write simple if...else statements
// syntax: condition ? expressionIfTrue : expressionIfFalse
const userAge = 20
const message = userAge >= 18 ? "You can vote" : "You cannot vote yet"
console.log(message)

// Ternary operators can be chained (similar to else if)
const grade = 88
const letterGrade = grade >= 90 ? "A" : grade >= 80 ? "B" : grade >= 70 ? "C" : grade >= 60 ? "D" : "F"
console.log(`Your grade is ${letterGrade}`)

// 6. Truthy and Falsy Values
// ------------------------
// In JavaScript, values are automatically converted to boolean when used in a condition

// Falsy values:
// - false
// - 0, -0, 0n (BigInt zero)
// - "" (empty string)
// - null
// - undefined
// - NaN

// Truthy values:
// - Everything else is truthy, including:
// - true
// - Any number other than 0
// - Any string that's not empty
// - All objects and arrays (even empty ones)

// Examples:
if ("hello") {
  console.log("'hello' is truthy") // This will execute
}

if (0) {
  console.log("This won't execute because 0 is falsy")
} else {
  console.log("0 is falsy") // This will execute
}

if ([]) {
  console.log("Empty array is truthy") // This will execute
}

if ({}) {
  console.log("Empty object is truthy") // This will execute
}

// 7. Logical Operators in Conditions
// --------------------------------
const hasDriversLicense = true
const hasGoodVision = true
const isTired = false

// AND operator (&&)
if (hasDriversLicense && hasGoodVision) {
  console.log("You can drive!")
} else {
  console.log("Someone else should drive...")
}

// AND and NOT operators
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("You can drive safely!")
} else {
  console.log("Better not drive right now.")
}

// 8. Switch as an Alternative to Multiple if...else
// ----------------------------------------------
// See the switch.js file for detailed examples
