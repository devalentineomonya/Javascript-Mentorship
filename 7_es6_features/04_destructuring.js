/*
 * ES6 Features: Destructuring
 *
 * This file introduces destructuring assignment, a convenient way to extract
 * values from arrays or properties from objects, introduced in ES6.
 */

// Object Destructuring
console.log("--- Object Destructuring ---")

// Traditional way of accessing object properties
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  job: "Developer",
  address: {
    city: "New York",
    country: "USA",
  },
}

// Old way
const firstNameOld = person.firstName
const lastNameOld = person.lastName
const ageOld = person.age

console.log("Old way:", firstNameOld, lastNameOld, ageOld)

// Using destructuring
const { firstName, lastName, age } = person
console.log("Destructured:", firstName, lastName, age)

// Assigning to different variable names
const { firstName: fName, lastName: lName } = person
console.log("With aliases:", fName, lName)

// Default values
const { job, salary = "Not specified" } = person
console.log("With defaults:", job, salary)

// Nested destructuring
const {
  address: { city, country },
} = person
console.log("Nested:", city, country)

// Rest operator with destructuring
const { firstName: fname, ...rest } = person
console.log("Rest operator:", fname)
console.log("Remaining properties:", rest)

// Array Destructuring
console.log("\n--- Array Destructuring ---")

const colors = ["red", "green", "blue", "yellow", "purple"]

// Old way
const firstColorOld = colors[0]
const secondColorOld = colors[1]
console.log("Old way:", firstColorOld, secondColorOld)

// Using destructuring
const [firstColor, secondColor] = colors
console.log("Destructured:", firstColor, secondColor)

// Skipping elements
const [, , thirdColor] = colors
console.log("Skipped elements:", thirdColor)

// Default values
const [primary, secondary, tertiary, quaternary, quinary, senary = "black"] = colors
console.log("With defaults:", primary, secondary, tertiary, quaternary, quinary, senary)

// Swapping variables
let a = 1
let b = 2
;[a, b] = [b, a]
console.log("Swapped variables:", a, b)

// Rest operator with arrays
const [head, ...tail] = colors
console.log("Head:", head)
console.log("Tail:", tail)

// Nested array destructuring
const nestedArray = [1, [2, 3], 4]
const [first, [second, third], fourth] = nestedArray
console.log("Nested array:", first, second, third, fourth)

// Function Parameter Destructuring
console.log("\n--- Function Parameter Destructuring ---")

// Object parameter destructuring
function printPersonInfo({ firstName, lastName, age = "unknown" }) {
  console.log(`Name: ${firstName} ${lastName}, Age: ${age}`)
}

printPersonInfo(person)
printPersonInfo({ firstName: "Jane", lastName: "Smith" })

// Array parameter destructuring
function printColorInfo([primary, secondary]) {
  console.log(`Primary: ${primary}, Secondary: ${secondary}`)
}

printColorInfo(colors)

// Combined with default parameters
function createUser({ name, role = "user", ...otherProps } = {}) {
  console.log(`Created ${role} named ${name}`)
  console.log("Other properties:", otherProps)
  return { name, role, ...otherProps }
}

createUser({ name: "Alice", age: 25 })
createUser({ name: "Bob", role: "admin", department: "IT" })
createUser() // Uses empty object default

// Practical Examples
console.log("\n--- Practical Examples ---")

// 1. API Response Handling
const apiResponse = {
  status: 200,
  data: {
    user: {
      id: 123,
      username: "johndoe",
      email: "john@example.com",
    },
    posts: [
      { id: 1, title: "Hello World" },
      { id: 2, title: "ES6 Features" },
    ],
  },
  error: null,
}

// Extract specific data
const {
  status,
  data: {
    user: { username, email },
    posts: [firstPost, ...otherPosts],
  },
} = apiResponse

console.log("API data:", status, username, email)
console.log("First post:", firstPost)
console.log("Other posts:", otherPosts)

// 2. Module Imports
// In a real module system, you might do:
// import { useState, useEffect } from 'react';

// 3. Returning multiple values from a function
function getMinMax(numbers) {
  return [Math.min(...numbers), Math.max(...numbers)]
}

const [min, max] = getMinMax([5, 2, 8, 1, 9])
console.log("Min and Max:", min, max)

// 4. Iterating with destructuring
const users = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "user" },
  { id: 3, name: "Charlie", role: "user" },
]

users.forEach(({ id, name, role }) => {
  console.log(`User ${id}: ${name} (${role})`)
})

// 5. Destructuring with regular expressions
function parseURL(url) {
  const [, protocol, hostname, path] = /^(https?):\/\/([^/]+)\/(.*)$/.exec(url) || []
  return { protocol, hostname, path }
}

const urlParts = parseURL("https://example.com/path/to/resource")
console.log("URL parts:", urlParts)

// Best Practices
console.log("\n--- Best Practices ---")

// 1. Use destructuring for cleaner function parameters
function goodFunction({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`)
}

// Instead of:
function badFunction(person) {
  const name = person.name
  const age = person.age
  console.log(`Name: ${name}, Age: ${age}`)
}

// 2. Provide defaults for missing properties
const { missing = "default value" } = {}
console.log("Default value:", missing)

// 3. Use destructuring in loops for cleaner code
for (const { name, role } of users) {
  console.log(`${name} is a ${role}`)
}

// 4. Destructure only what you need
const { firstName: justName } = person
console.log("Just what I need:", justName)

// 5. Be careful with deeply nested destructuring
// It can make code harder to read if overused
