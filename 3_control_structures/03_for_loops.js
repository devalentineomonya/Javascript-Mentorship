// For Loops in JavaScript
// =====================

// 1. Basic for loop
// ---------------
// The most common loop structure with initialization, condition, and increment/decrement
console.log("Basic for loop:")
for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i}`)
}

// 2. Loop components explained
// --------------------------
// for (initialization; condition; increment/decrement) { code block }
// - Initialization: Executed once before the loop starts
// - Condition: Evaluated before each iteration; loop continues if true
// - Increment/Decrement: Executed after each iteration
// - Code Block: Executed during each iteration if the condition is true

// 3. Looping through arrays
// ----------------------
const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"]

console.log("\nLooping through array:")
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${i + 1}: ${fruits[i]}`)
}

// 4. Nested for loops
// ----------------
// A loop inside another loop
console.log("\nNested for loops (multiplication table):")
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} × ${j} = ${i * j}`)
  }
  console.log("---") // Separator between tables
}

// 5. Loop control statements
// -----------------------

// break: Terminates the loop
console.log("\nUsing break:")
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("Breaking the loop at i = 5")
    break
  }
  console.log(`Iteration ${i}`)
}

// continue: Skips the current iteration
console.log("\nUsing continue:")
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    console.log("Skipping iteration 2")
    continue
  }
  console.log(`Iteration ${i}`)
}

// 6. for...in loop
// --------------
// Iterates over the enumerable properties of an object
console.log("\nfor...in loop with object:")
const person = {
  name: "John",
  age: 30,
  job: "Developer",
}

for (const key in person) {
  console.log(`${key}: ${person[key]}`)
}

// Using for...in with arrays (not recommended)
console.log("\nfor...in loop with array (not recommended):")
for (const index in fruits) {
  console.log(`${index}: ${fruits[index]}`)
}
// Note: for...in is designed for objects, not arrays
// It can include properties from the prototype chain and may not iterate in order

// 7. for...of loop (ES6)
// -------------------
// Iterates over iterable objects (arrays, strings, maps, sets, etc.)
console.log("\nfor...of loop with array:")
for (const fruit of fruits) {
  console.log(fruit)
}

// for...of with strings
console.log("\nfor...of loop with string:")
const greeting = "Hello"
for (const char of greeting) {
  console.log(char)
}

// 8. Variations and patterns
// -----------------------

// Counting backwards
console.log("\nCounting backwards:")
for (let i = 5; i >= 0; i--) {
  console.log(i)
}

// Multiple variables
console.log("\nMultiple variables in for loop:")
for (let i = 0, j = 10; i <= 5; i++, j--) {
  console.log(`i = ${i}, j = ${j}`)
}

// Infinite loop (be careful!)
// for (let i = 0; true; i++) {
//   console.log(i);
//   if (i >= 1000) break; // Safety exit
// }

// 9. Performance considerations
// --------------------------
// Store array length in a variable for better performance
console.log("\nOptimized array loop:")
for (let i = 0, len = fruits.length; i < len; i++) {
  console.log(fruits[i])
}
