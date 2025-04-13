// While and Do-While Loops in JavaScript
// ====================================

// 1. Basic while loop
// -----------------
// Executes a block of code as long as the condition is true
console.log("Basic while loop:")
let count = 0

while (count < 5) {
  console.log(`Count: ${count}`)
  count++
}

// 2. while loop structure
// ---------------------
// while (condition) { code block }
// - Condition is evaluated before each iteration
// - If the condition is initially false, the loop never executes

// 3. Infinite loops and how to avoid them
// ------------------------------------
// An infinite loop occurs when the condition never becomes false
// Always ensure there's a way for the condition to eventually become false
console.log("\nPotentially infinite loop with safety exit:")
let i = 0
while (true) {
  console.log(`Iteration ${i}`)
  i++
  if (i >= 5) {
    console.log("Breaking out of the loop")
    break // Exit the loop
  }
}

// 4. do...while loop
// ----------------
// Similar to while, but the condition is checked after the code block executes
// This ensures the code block runs at least once
console.log("\ndo...while loop:")
let j = 0

do {
  console.log(`Value of j: ${j}`)
  j++
} while (j < 5)

// Example where the condition is initially false
console.log("\ndo...while with initially false condition:")
const k = 10

do {
  console.log(`This will execute once even though k (${k}) is already >= 5`)
} while (k < 5)

// 5. while vs. for loops
// --------------------
// while loops are often used when the number of iterations is not known in advance
console.log("\nwhile loop for unknown number of iterations:")

// Simulating a random process until a condition is met
let target = false
let attempts = 0

while (!target) {
  attempts++
  // Simulate a random outcome
  const randomValue = Math.random()

  if (randomValue > 0.8) {
    target = true
    console.log(`Target achieved after ${attempts} attempts!`)
  }

  // Safety exit to prevent potential infinite loop
  if (attempts >= 20) {
    console.log("Maximum attempts reached")
    break
  }
}

// 6. Nested while loops
// ------------------
console.log("\nNested while loops:")
let outer = 1

while (outer <= 3) {
  console.log(`Outer loop: ${outer}`)

  let inner = 1
  while (inner <= 3) {
    console.log(`  Inner loop: ${inner}`)
    inner++
  }

  outer++
}

// 7. Common patterns with while loops
// --------------------------------

// Processing input until a sentinel value
console.log("\nProcessing until sentinel value:")
const inputs = [1, 5, 7, 9, -1, 12, 15] // Simulated input, -1 is sentinel
let index = 0
let sum = 0

while (index < inputs.length && inputs[index] !== -1) {
  sum += inputs[index]
  index++
}

console.log(`Sum before sentinel: ${sum}`)

// Reading until end of data
console.log("\nReading until end of data:")
const data = [10, 20, 30, 40, 50]
let dataIndex = 0

while (dataIndex < data.length) {
  console.log(`Data at position ${dataIndex}: ${data[dataIndex]}`)
  dataIndex++
}

// 8. while vs. do...while: choosing the right loop
// ---------------------------------------------
// Use while when you want to check the condition before the first iteration
// Use do...while when you want to execute the code at least once

// Example: Menu-driven program
console.log("\nMenu-driven program simulation:")

let option
// Simulating user input
const userInputs = ["view", "invalid", "exit"]
let inputIndex = 0

do {
  // Simulate getting user input
  option = userInputs[inputIndex++]
  console.log(`\nUser selected: ${option}`)

  switch (option) {
    case "view":
      console.log("Viewing data...")
      break
    case "edit":
      console.log("Editing data...")
      break
    case "exit":
      console.log("Exiting program...")
      break
    default:
      console.log("Invalid option, please try again")
  }
} while (option !== "exit" && inputIndex < userInputs.length)
