/*
 * ES6 Features: Spread and Rest Operators
 *
 * This file introduces the spread and rest operators (...),
 * which were introduced in ES6 (ECMAScript 2015).
 */

// Spread Operator with Arrays
console.log("--- Spread Operator with Arrays ---")

const numbers = [1, 2, 3]
const moreNumbers = [4, 5, 6]

// Combining arrays (old way)
const combinedOld = numbers.concat(moreNumbers)
console.log("Combined (old way):", combinedOld)

// Combining arrays with spread
const combined = [...numbers, ...moreNumbers]
console.log("Combined with spread:", combined)

// Adding elements
const withExtra = [...numbers, 10, 11, 12]
console.log("With extra elements:", withExtra)

// Inserting elements in the middle
const inserted = [...numbers.slice(0, 1), 99, ...numbers.slice(1)]
console.log("With inserted element:", inserted)

// Creating a copy of an array
const copy = [...numbers]
copy.push(4)
console.log("Original:", numbers)
console.log("Copy:", copy)

// Spread with function arguments
function sum(a, b, c) {
  return a + b + c
}

console.log("Sum with spread:", sum(...numbers))

// Converting iterables to arrays
const string = "hello"
const chars = [...string]
console.log("String to array:", chars)

// Spread Operator with Objects
console.log("\n--- Spread Operator with Objects ---")

const person = {
  name: "John",
  age: 30,
}

const job = {
  title: "Developer",
  company: "Tech Co",
}

// Combining objects (old way)
const personWithJobOld = Object.assign({}, person, job)
console.log("Combined (old way):", personWithJobOld)

// Combining objects with spread
const personWithJob = { ...person, ...job }
console.log("Combined with spread:", personWithJob)

// Adding properties
const personWithDetails = {
  ...person,
  email: "john@example.com",
  phone: "123-456-7890",
}
console.log("With additional properties:", personWithDetails)

// Overriding properties
const updatedPerson = {
  ...person,
  age: 31, // This overrides the age from person
}
console.log("With overridden property:", updatedPerson)

// Creating a shallow copy
const personCopy = { ...person }
personCopy.name = "Jane"
console.log("Original:", person)
console.log("Copy:", personCopy)

// Limitations: Spread only creates shallow copies
const nestedObject = {
  name: "Alice",
  address: {
    city: "New York",
    country: "USA",
  },
}

const nestedCopy = { ...nestedObject }
nestedCopy.address.city = "Boston" // This affects the original too!

console.log("Original nested:", nestedObject)
console.log("Nested copy:", nestedCopy)

// Rest Operator with Arrays
console.log("\n--- Rest Operator with Arrays ---")

// Collecting remaining elements
const [first, second, ...rest] = [1, 2, 3, 4, 5]
console.log("First:", first)
console.log("Second:", second)
console.log("Rest:", rest)

// Rest in function parameters
function sumAll(multiplier, ...numbers) {
  return multiplier * numbers.reduce((sum, num) => sum + num, 0)
}

console.log("Sum with rest:", sumAll(2, 1, 2, 3, 4)) // 2 * (1+2+3+4) = 20

// Rest Operator with Objects
console.log("\n--- Rest Operator with Objects ---")

// Collecting remaining properties
const { name, ...otherProps } = personWithDetails
console.log("Name:", name)
console.log("Other properties:", otherProps)

// Practical Examples
console.log("\n--- Practical Examples ---")

// 1. Function composition
function applyFunctions(value, ...functions) {
  return functions.reduce((result, func) => func(result), value)
}

const double = (x) => x * 2
const square = (x) => x * x
const addOne = (x) => x + 1

console.log("Composed functions:", applyFunctions(2, double, square, addOne)) // ((2*2)^2)+1 = 17

// 2. Merging configurations with defaults
const defaultConfig = {
  theme: "light",
  fontSize: 16,
  showSidebar: true,
}

function createConfig(userConfig) {
  return { ...defaultConfig, ...userConfig }
}

const finalConfig = createConfig({ theme: "dark", showNotifications: true })
console.log("Final config:", finalConfig)

// 3. Adding items to state immutably (React-like pattern)
const initialState = {
  users: ["John", "Jane"],
  isLoading: false,
}

// Adding a user immutably
const newState = {
  ...initialState,
  users: [...initialState.users, "Bob"],
}

console.log("New state:", newState)

// 4. Removing properties from objects
function removeProperty(obj, property) {
  const { [property]: removed, ...rest } = obj
  return rest
}

const withoutAge = removeProperty(person, "age")
console.log("Without age:", withoutAge)

// 5. Collecting function arguments
function logArguments(...args) {
  args.forEach((arg, index) => {
    console.log(`Argument ${index}:`, arg)
  })
}

logArguments("hello", 42, true, { key: "value" })

// Best Practices
console.log("\n--- Best Practices ---")

// 1. Use spread for immutable operations
const immutablePush = (array, item) => [...array, item]
const immutablePop = (array) => array.slice(0, -1)
const immutableReplace = (array, index, item) => [...array.slice(0, index), item, ...array.slice(index + 1)]

const original = [1, 2, 3]
console.log("Immutable push:", immutablePush(original, 4))
console.log("Immutable pop:", immutablePop(original))
console.log("Immutable replace:", immutableReplace(original, 1, 99))
console.log("Original unchanged:", original)

// 2. Use rest parameters instead of arguments object
function goodFunction(...args) {
  return args.reduce((sum, num) => sum + num, 0)
}

// Instead of:
function oldFunction() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log("Good function:", goodFunction(1, 2, 3))
console.log("Old function:", oldFunction(1, 2, 3))

// 3. Be careful with deep objects
// For deep cloning, consider:
const deepClone = (obj) => JSON.parse(JSON.stringify(obj))
// Or use a library like lodash's cloneDeep

// 4. Use parameter destructuring with rest
function processUser({ name, age, ...otherInfo }) {
  console.log(`Processing ${name}, ${age} years old`)
  console.log("Additional info:", otherInfo)
}

processUser({
  name: "Charlie",
  age: 35,
  email: "charlie@example.com",
  role: "manager",
})

// 5. Combine with destructuring for powerful patterns
const [firstItem, ...restItems] = [...numbers, ...moreNumbers]
console.log("First item:", firstItem)
console.log("Rest items:", restItems)
