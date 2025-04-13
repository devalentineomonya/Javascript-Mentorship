/*
 * ES6 Features: Template Literals
 *
 * This file introduces template literals, a new way to work with strings
 * introduced in ES6 (ECMAScript 2015).
 */

// Traditional string concatenation
console.log("--- Traditional String Concatenation ---")

const name = "Alice"
const age = 28

// Using the + operator
const greeting = "Hello, my name is " + name + " and I am " + age + " years old."
console.log(greeting)

// Using multiple concatenations
const multiline = "This is line 1.\n" + "This is line 2.\n" + "This is line 3."
console.log(multiline)

// Escaping quotes
const quote = 'She said, "JavaScript is fun!"'
console.log(quote)

// Template literals (template strings)
console.log("\n--- Template Literals ---")

// Basic syntax with ${expression}
const templateGreeting = `Hello, my name is ${name} and I am ${age} years old.`
console.log(templateGreeting)

// Multiline strings
const templateMultiline = `This is line 1.
This is line 2.
This is line 3.`
console.log(templateMultiline)

// Expressions in template literals
const a = 5
const b = 10
console.log(`The sum of ${a} and ${b} is ${a + b}.`)
console.log(`${a} times ${b} equals ${a * b}.`)

// Conditional expressions (ternary operator)
const isAdult = age >= 18
console.log(`${name} is ${isAdult ? "an adult" : "not an adult"}.`)

// Function calls in template literals
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

console.log(`Hello, ${capitalize(name)}!`)

// Nesting template literals
const nested = `${name} says: "${`I'm ${age} years old.`}"`
console.log(nested)

// Tagged templates
console.log("\n--- Tagged Templates ---")

// A tag function processes the template literal
function highlight(strings, ...values) {
  console.log("String parts:", strings)
  console.log("Interpolated values:", values)

  let result = ""
  strings.forEach((string, i) => {
    result += string
    if (i < values.length) {
      result += `<strong>${values[i]}</strong>`
    }
  })

  return result
}

const user = { name: "Bob", role: "Developer" }
const highlightedInfo = highlight`User ${user.name} is a ${user.role}.`
console.log("Highlighted:", highlightedInfo)

// HTML escaping with tagged templates
function safeHTML(strings, ...values) {
  const escapeHTML = (str) => {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
  }

  let result = strings[0]
  for (let i = 0; i < values.length; i++) {
    result += escapeHTML(values[i]) + strings[i + 1]
  }

  return result
}

const userInput = '<script>alert("XSS attack!")</script>'
const safeOutput = safeHTML`User input: ${userInput}`
console.log("Safe HTML:", safeOutput)

// Raw strings
console.log("\n--- Raw Strings ---")

// The raw property accesses the raw strings (without processing escape sequences)
console.log(`Line 1\nLine 2`) // Processed: shows two lines
console.log(String.raw`Line 1\nLine 2`) // Raw: shows \n as characters

// Practical examples
console.log("\n--- Practical Examples ---")

// 1. Building URLs
const baseURL = "https://api.example.com"
const endpoint = "users"
const id = 123
const apiURL = `${baseURL}/${endpoint}/${id}`
console.log("API URL:", apiURL)

// 2. Creating HTML templates
const product = {
  name: "Laptop",
  price: 999.99,
  description: "Powerful laptop with high-end specs",
}

const productHTML = `
  <div class="product">
    <h2>${product.name}</h2>
    <p class="price">$${product.price.toFixed(2)}</p>
    <p class="description">${product.description}</p>
    <button class="buy-now">Buy Now</button>
  </div>
`

console.log("Product HTML:", productHTML)

// 3. SQL queries
const tableName = "users"
const columns = ["name", "email", "created_at"]
const conditions = "age > 18"

const sqlQuery = `
  SELECT ${columns.join(", ")}
  FROM ${tableName}
  WHERE ${conditions}
  ORDER BY created_at DESC
  LIMIT 10
`

console.log("SQL Query:", sqlQuery)

// 4. Error messages
function generateError(code, message) {
  return `Error ${code}: ${message}`
}

console.log(generateError(404, "Page not found"))

// Best practices
console.log("\n--- Best Practices ---")

// 1. Use template literals for string interpolation
const bestPractice1 = `Hello, ${name}!`

// 2. Use template literals for multiline strings
const bestPractice2 = `
  This is a multiline string.
  It's much cleaner than concatenation.
  No need for \n characters.
`

// 3. Use tagged templates for advanced string processing
function currency(strings, ...values) {
  return strings[0] + "$" + values[0].toFixed(2)
}

console.log(currency`The total is ${19.99}`)

// 4. Be mindful of performance with large templates
// For very large string operations, consider using array join
const items = ["apple", "banana", "orange"]
const itemList = items.map((item) => `<li>${item}</li>`).join("")
const finalHTML = `<ul>${itemList}</ul>`
console.log("Final HTML:", finalHTML)
