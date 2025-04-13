/*
 * ES6 Features: Exercises
 *
 * This file contains exercises to practice your understanding of ES6 features.
 */

// Exercise 1: Convert the following function to use arrow syntax
// Original function
function multiply(a, b) {
  return a * b
}

// Your solution
const multiplyArrow = (a, b) => a * b

// Test
console.log("Exercise 1:", multiplyArrow(4, 5)) // Should output: 20

// Exercise 2: Use template literals to create a formatted string
function exercise2() {
  const name = "Sarah"
  const age = 28
  const occupation = "developer"

  // Use template literals to create a string: "My name is Sarah, I'm 28 years old, and I work as a developer."
  // Your solution
  const formattedString = `My name is ${name}, I'm ${age} years old, and I work as a ${occupation}.`

  // Test
  console.log("Exercise 2:", formattedString)
}

exercise2()

// Exercise 3: Use destructuring to extract values from an object
function exercise3() {
  const person = {
    name: "Alex",
    age: 32,
    location: {
      city: "San Francisco",
      country: "USA",
    },
    hobbies: ["reading", "hiking", "photography"],
  }

  // Use destructuring to extract name, city, and the first hobby
  // Your solution
  const {
    name,
    location: { city },
    hobbies: [firstHobby],
  } = person

  // Test
  console.log("Exercise 3:", name, city, firstHobby) // Should output: Alex San Francisco reading
}

exercise3()

// Exercise 4: Use the spread operator to combine arrays and objects
function exercise4() {
  const array1 = [1, 2, 3]
  const array2 = [4, 5, 6]

  const obj1 = { a: 1, b: 2 }
  const obj2 = { c: 3, d: 4 }

  // Use the spread operator to create a new array with all elements from array1 and array2
  // Your solution
  const combinedArray = [...array1, ...array2]

  // Use the spread operator to create a new object with all properties from obj1 and obj2
  // Your solution
  const combinedObject = { ...obj1, ...obj2 }

  // Test
  console.log("Exercise 4 (Array):", combinedArray) // Should output: [1, 2, 3, 4, 5, 6]
  console.log("Exercise 4 (Object):", combinedObject) // Should output: { a: 1, b: 2, c: 3, d: 4 }
}

exercise4()

// Exercise 5: Use the rest parameter to collect function arguments
function exercise5() {
  // Create a function that takes any number of arguments and returns their sum
  // Your solution
  const sum = (...numbers) => numbers.reduce((total, num) => total + num, 0)

  // Test
  console.log("Exercise 5:", sum(1, 2, 3, 4, 5)) // Should output: 15
}

exercise5()

// Exercise 6: Use let and const appropriately
function exercise6() {
  // Refactor this code to use let and const appropriately
  /*
  var x = 10;
  var y = 20;
  var sum = x + y;
  x = 30;
  var product = x * y;
  */

  // Your solution
  let x = 10
  const y = 20
  const sum = x + y
  x = 30
  const product = x * y

  // Test
  console.log("Exercise 6:", sum, product) // Should output: 30 600
}

exercise6()

// Exercise 7: Use default parameters
function exercise7() {
  // Create a function greet that takes a name and a greeting, with "Hello" as the default greeting
  // Your solution
  const greet = (name, greeting = "Hello") => `${greeting}, ${name}!`

  // Test
  console.log("Exercise 7:", greet("Alice")) // Should output: Hello, Alice!
  console.log("Exercise 7:", greet("Bob", "Hi")) // Should output: Hi, Bob!
}

exercise7()

// Exercise 8: Use destructuring in function parameters
function exercise8() {
  // Create a function formatPerson that takes a person object and returns a formatted string
  // The function should use destructuring in its parameters
  // Your solution
  const formatPerson = ({ name, age, occupation = "unemployed" }) => {
    return `${name} is ${age} years old and works as ${occupation}.`
  }

  // Test
  console.log("Exercise 8:", formatPerson({ name: "Charlie", age: 40, occupation: "designer" }))
  // Should output: Charlie is 40 years old and works as designer.

  console.log("Exercise 8:", formatPerson({ name: "Diana", age: 35 }))
  // Should output: Diana is 35 years old and works as unemployed.
}

exercise8()

// Exercise 9: Convert a function to use arrow syntax and template literals
function exercise9() {
  // Original function
  function createUserMessage(user, message) {
    return user.name + " says: " + message
  }

  // Your solution - convert to arrow function with template literals
  const createUserMessageArrow = (user, message) => `${user.name} says: ${message}`

  // Test
  const user = { name: "Eva" }
  console.log("Exercise 9:", createUserMessageArrow(user, "Hello, world!"))
  // Should output: Eva says: Hello, world!
}

exercise9()

// Exercise 10: Combine multiple ES6 features
function exercise10() {
  const users = [
    { id: 1, name: "Alice", age: 25, active: true },
    { id: 2, name: "Bob", age: 30, active: false },
    { id: 3, name: "Charlie", age: 35, active: true },
    { id: 4, name: "Diana", age: 40, active: false },
  ]

  // Use ES6 features to:
  // 1. Filter for active users
  // 2. Map to create formatted strings with name and age
  // 3. Store the result in a new array

  // Your solution
  const activeUserMessages = users.filter(({ active }) => active).map(({ name, age }) => `${name} is ${age} years old.`)

  // Test
  console.log("Exercise 10:", activeUserMessages)
  // Should output: ['Alice is 25 years old.', 'Charlie is 35 years old.']
}

exercise10()

// Bonus Exercise: Create a deep clone function using spread and recursion
function bonusExercise() {
  // Create a function that deep clones objects and arrays
  // Your solution
  const deepClone = (obj) => {
    // Handle primitive types and null/undefined
    if (obj === null || typeof obj !== "object") {
      return obj
    }

    // Handle arrays
    if (Array.isArray(obj)) {
      return obj.map((item) => deepClone(item))
    }

    // Handle objects
    return Object.keys(obj).reduce((clone, key) => {
      clone[key] = deepClone(obj[key])
      return clone
    }, {})
  }

  // Test
  const original = {
    name: "Test",
    details: {
      a: 1,
      b: 2,
      nested: {
        c: 3,
      },
    },
    items: [1, 2, { d: 4 }],
  }

  const clone = deepClone(original)
  clone.details.a = 99
  clone.details.nested.c = 99
  clone.items[2].d = 99

  console.log("Bonus Exercise (Original):", JSON.stringify(original))
  console.log("Bonus Exercise (Clone):", JSON.stringify(clone))
  // The original should be unchanged
}

bonusExercise()
