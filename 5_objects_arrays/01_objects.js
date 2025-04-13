// Objects in JavaScript
// ===================

// 1. Creating Objects
// ----------------

// Object literal notation (most common)
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john.doe@example.com",
  isEmployed: true,
  hobbies: ["reading", "hiking", "coding"],
}

// Empty object
const emptyObject = {}

// Using the Object constructor
const anotherObject = new Object()
anotherObject.property = "value"

// 2. Accessing Object Properties
// ---------------------------

// Dot notation
console.log(person.firstName) // "John"
console.log(person.age) // 30

// Bracket notation (useful when property name is dynamic or has special characters)
console.log(person["lastName"]) // "Doe"

const propertyName = "email"
console.log(person[propertyName]) // "john.doe@example.com"

// 3. Adding and Modifying Properties
// -------------------------------

// Adding new properties
person.address = "123 Main St"
person["phoneNumber"] = "555-1234"

// Modifying existing properties
person.age = 31
person["isEmployed"] = false

console.log(person)

// 4. Deleting Properties
// -------------------

delete person.phoneNumber
console.log(person.phoneNumber) // undefined

// 5. Object Methods
// --------------

// Adding methods to objects
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  // Shorthand method syntax (ES6)
  multiply(a, b) {
    return a * b
  },
  divide(a, b) {
    if (b === 0) {
      return "Cannot divide by zero"
    }
    return a / b
  },
}

console.log(calculator.add(5, 3)) // 8
console.log(calculator.multiply(4, 2)) // 8

// 6. 'this' Keyword in Object Methods
// --------------------------------

const user = {
  name: "Alice",
  greet: function () {
    return `Hello, my name is ${this.name}`
  },
  updateName(newName) {
    this.name = newName
    return `Name updated to ${this.name}`
  },
}

console.log(user.greet()) // "Hello, my name is Alice"
console.log(user.updateName("Alicia")) // "Name updated to Alicia"
console.log(user.greet()) // "Hello, my name is Alicia"

// 7. Object Property Attributes
// --------------------------

// Using Object.defineProperty to set property attributes
const product = {}

Object.defineProperty(product, "name", {
  value: "Laptop",
  writable: true, // Can be changed
  enumerable: true, // Shows up in loops
  configurable: true, // Can be deleted or modified
})

Object.defineProperty(product, "id", {
  value: "P1001",
  writable: false, // Read-only
  enumerable: true,
  configurable: false, // Cannot be deleted or reconfigured
})

product.name = "Desktop" // Works because writable is true
console.log(product.name) // "Desktop"

product.id = "P1002" // Doesn't work because writable is false
console.log(product.id) // Still "P1001"

// 8. Object Property Descriptors
// ---------------------------

const descriptor = Object.getOwnPropertyDescriptor(product, "id")
console.log(descriptor)
// { value: "P1001", writable: false, enumerable: true, configurable: false }

// 9. Object.keys, Object.values, Object.entries (ES8/ES2017)
// ------------------------------------------------------

const employee = {
  id: "E001",
  name: "Jane Smith",
  position: "Developer",
  salary: 75000,
}

// Get all property keys
console.log(Object.keys(employee))
// ["id", "name", "position", "salary"]

// Get all property values
console.log(Object.values(employee))
// ["E001", "Jane Smith", "Developer", 75000]

// Get all key-value pairs as arrays
console.log(Object.entries(employee))
// [["id", "E001"], ["name", "Jane Smith"], ["position", "Developer"], ["salary", 75000]]

// 10. Object Destructuring (ES6)
// ---------------------------

const { name, position, salary } = employee
console.log(name) // "Jane Smith"
console.log(position) // "Developer"

// Destructuring with different variable names
const { name: employeeName, salary: employeeSalary } = employee
console.log(employeeName) // "Jane Smith"
console.log(employeeSalary) // 75000

// Default values
const { department = "Engineering" } = employee
console.log(department) // "Engineering" (default value since it doesn't exist)

// 11. Checking if a Property Exists
// -----------------------------

// Using the in operator
console.log("name" in employee) // true
console.log("age" in employee) // false

// Using hasOwnProperty method
console.log(employee.hasOwnProperty("salary")) // true
console.log(employee.hasOwnProperty("toString")) // false (inherited from prototype)

// 12. Object Spread Operator (ES9/ES2018)
// ------------------------------------

// Copying objects
const employeeCopy = { ...employee }
console.log(employeeCopy) // Same as employee

// Merging objects
const employeeWithDetails = {
  ...employee,
  department: "IT",
  startDate: "2022-01-15",
}

console.log(employeeWithDetails)

// 13. Object.assign (ES6)
// --------------------

// Another way to copy/merge objects
const anotherCopy = Object.assign({}, employee)
console.log(anotherCopy) // Same as employee

const mergedObject = Object.assign({}, employee, {
  department: "IT",
  startDate: "2022-01-15",
})

console.log(mergedObject) // Similar to employeeWithDetails

// 14. Object.freeze and Object.seal
// ------------------------------

// Object.freeze - prevents all changes to the object
const frozenObj = Object.freeze({ x: 1, y: 2 })
frozenObj.x = 10 // This will be ignored in strict mode or fail silently
console.log(frozenObj.x) // Still 1

// Object.seal - prevents adding/removing properties but allows modifying existing ones
const sealedObj = Object.seal({ a: 1, b: 2 })
sealedObj.a = 10 // This works
sealedObj.c = 3 // This will be ignored
delete sealedObj.b // This will be ignored
console.log(sealedObj) // { a: 10, b: 2 }

// 15. Computed Property Names (ES6)
// ------------------------------

const propName = "dynamicProperty"
const dynamicObject = {
  [propName]: "This property name was computed",
  [`calculated_${propName}`]: "Another computed property",
}

console.log(dynamicObject.dynamicProperty) // "This property name was computed"
console.log(dynamicObject.calculated_dynamicProperty) // "Another computed property"
