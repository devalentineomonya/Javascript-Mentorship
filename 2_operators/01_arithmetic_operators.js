// Arithmetic Operators in JavaScript
// =================================

// 1. Basic Arithmetic Operators
// ----------------------------

// Addition (+)
const sum = 5 + 3
console.log("5 + 3 =", sum)

// Subtraction (-)
const difference = 10 - 4
console.log("10 - 4 =", difference)

// Multiplication (*)
const product = 6 * 7
console.log("6 * 7 =", product)

// Division (/)
const quotient = 20 / 4
console.log("20 / 4 =", quotient)

// Modulus (%) - returns the remainder of a division
const remainder = 17 % 5
console.log("17 % 5 =", remainder) // 17 ÷ 5 = 3 with remainder 2

// Exponentiation (**) - introduced in ES2016
const power = 2 ** 3
console.log("2 ** 3 =", power) // 2³ = 8

// 2. Increment and Decrement Operators
// -----------------------------------

// Increment (++)
let count = 5
count++ // Post-increment: returns the value, then increments
console.log("After count++:", count) // 6

let preCount = 5
++preCount // Pre-increment: increments first, then returns the value
console.log("After ++preCount:", preCount) // 6

// Decrement (--)
let downCount = 5
downCount-- // Post-decrement: returns the value, then decrements
console.log("After downCount--:", downCount) // 4

let preDownCount = 5
--preDownCount // Pre-decrement: decrements first, then returns the value
console.log("After --preDownCount:", preDownCount) // 4

// 3. Assignment Operators
// ---------------------

// Simple assignment (=)
let x = 10
console.log("x =", x)

// Addition assignment (+=)
x += 5 // Equivalent to: x = x + 5
console.log("After x += 5:", x)

// Subtraction assignment (-=)
x -= 3 // Equivalent to: x = x - 3
console.log("After x -= 3:", x)

// Multiplication assignment (*=)
x *= 2 // Equivalent to: x = x * 2
console.log("After x *= 2:", x)

// Division assignment (/=)
x /= 4 // Equivalent to: x = x / 4
console.log("After x /= 4:", x)

// Modulus assignment (%=)
x %= 3 // Equivalent to: x = x % 3
console.log("After x %= 3:", x)

// Exponentiation assignment (**=)
x **= 2 // Equivalent to: x = x ** 2
console.log("After x **= 2:", x)

// 4. Special Cases
// --------------

// Division by zero
const divByZero = 10 / 0
console.log("10 / 0 =", divByZero) // Infinity

// Dividing zero by zero
const zeroByZero = 0 / 0
console.log("0 / 0 =", zeroByZero) // NaN (Not a Number)

// String concatenation with +
const firstName = "John"
const lastName = "Doe"
const fullName = firstName + " " + lastName
console.log("String concatenation:", fullName)

// Mixing numbers and strings
console.log("5" + 3) // "53" (string concatenation)
console.log(5 + "3") // "53" (string concatenation)
console.log("5" - 3) // 2 (numeric subtraction)
console.log(5 - "3") // 2 (numeric subtraction)
