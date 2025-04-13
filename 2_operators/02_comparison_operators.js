// Comparison Operators in JavaScript
// =================================

// 1. Equality Operators
// --------------------

// Equal (==) - compares values, performs type coercion
console.log("5 == 5:", 5 == 5) // true
console.log("5 == '5':", 5 == "5") // true (string '5' is coerced to number 5)
console.log("0 == false:", 0 == false) // true (false is coerced to 0)
console.log("'' == false:", "" == false) // true (both coerced to 0)

// Strict Equal (===) - compares values AND types, no type coercion
console.log("5 === 5:", 5 === 5) // true
console.log("5 === '5':", 5 === "5") // false (different types)
console.log("0 === false:", 0 === false) // false (different types)
console.log("'' === false:", "" === false) // false (different types)

// Not Equal (!=) - compares values, performs type coercion
console.log("5 != 8:", 5 != 8) // true
console.log("5 != '5':", 5 != "5") // false (they are equal after coercion)
console.log("0 != false:", 0 != false) // false (they are equal after coercion)

// Strict Not Equal (!==) - compares values AND types, no type coercion
console.log("5 !== 8:", 5 !== 8) // true
console.log("5 !== '5':", 5 !== "5") // true (different types)
console.log("0 !== false:", 0 !== false) // true (different types)

// 2. Relational Operators
// ---------------------

// Greater Than (>)
console.log("10 > 5:", 10 > 5) // true
console.log("5 > 10:", 5 > 10) // false
console.log("10 > 10:", 10 > 10) // false

// Less Than (<)
console.log("5 < 10:", 5 < 10) // true
console.log("10 < 5:", 10 < 5) // false
console.log("10 < 10:", 10 < 10) // false

// Greater Than or Equal To (>=)
console.log("10 >= 5:", 10 >= 5) // true
console.log("5 >= 10:", 5 >= 10) // false
console.log("10 >= 10:", 10 >= 10) // true

// Less Than or Equal To (<=)
console.log("5 <= 10:", 5 <= 10) // true
console.log("10 <= 5:", 10 <= 5) // false
console.log("10 <= 10:", 10 <= 10) // true

// 3. Comparing Different Types
// --------------------------

// String comparison (compares character codes)
console.log("'apple' < 'banana':", "apple" < "banana") // true
console.log("'apple' < 'Apple':", "apple" < "Apple") // false (lowercase has higher char code)
console.log("'10' < '2':", "10" < "2") // true (compares first char '1' < '2')

// Comparing numbers and strings
console.log("5 > '3':", 5 > "3") // true (string '3' is coerced to number 3)
console.log("'5' > 3:", "5" > 3) // true (string '5' is coerced to number 5)
console.log("'hello' > 5:", "hello" > 5) // false ('hello' becomes NaN, and NaN comparisons are always false)

// 4. Object Comparisons
// -------------------

// Objects are compared by reference, not by content
const obj1 = { name: "John" }
const obj2 = { name: "John" }
const obj3 = obj1

console.log("obj1 == obj2:", obj1 == obj2) // false (different references)
console.log("obj1 === obj2:", obj1 === obj2) // false (different references)
console.log("obj1 == obj3:", obj1 == obj3) // true (same reference)
console.log("obj1 === obj3:", obj1 === obj3) // true (same reference)

// 5. Special Cases
// --------------

// Comparing with null and undefined
console.log("null == undefined:", null == undefined) // true
console.log("null === undefined:", null === undefined) // false (different types)
console.log("null == 0:", null == 0) // false
console.log("undefined == 0:", undefined == 0) // false

// NaN comparisons
console.log("NaN == NaN:", Number.NaN == Number.NaN) // false (NaN is not equal to anything, including itself)
console.log("NaN === NaN:", Number.NaN === Number.NaN) // false
console.log("isNaN(NaN):", isNaN(Number.NaN)) // true (proper way to check for NaN)
console.log("Number.isNaN(NaN):", Number.isNaN(Number.NaN)) // true (more reliable way in ES6)
