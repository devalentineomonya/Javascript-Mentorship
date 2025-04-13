// Variables and Data Types - Exercises
// ===================================

// Exercise 1: Variable Declaration
// -------------------------------
// Declare variables using let, const, and var with different data types
// Your code here:

// Exercise 2: Type Conversion
// --------------------------
// Convert the following variables to different types
const numberAsString = "42"
const booleanAsNumber = true
const stringToConvert = "Hello"

// Your code here:

// Exercise 3: Variable Scope
// -------------------------
// Create a function that demonstrates variable scope
// Your code here:

// Exercise 4: Working with Objects and Arrays
// -----------------------------------------
// Create an object representing a person and an array of hobbies
// Your code here:

// Exercise 5: Template Literals
// ---------------------------
// Use template literals to create a formatted string using variables
// Your code here:

// ========== SOLUTIONS ==========
/*
// Exercise 1 Solution:
let age = 25;
const name = "John";
var isStudent = true;
const person = { firstName: "Jane", lastName: "Doe" };
let hobbies = ["reading", "coding", "hiking"];
const nothing = null;
let undefinedVar;

// Exercise 2 Solution:
const convertedToNumber = Number(numberAsString);
console.log(convertedToNumber, typeof convertedToNumber);

const convertedToString = String(booleanAsNumber);
console.log(convertedToString, typeof convertedToString);

const stringLength = stringToConvert.length;
console.log(stringLength, typeof stringLength);

// Exercise 3 Solution:
function scopeExample() {
  const localVar = "I'm local";
  
  if (true) {
    const blockVar = "I'm in a block";
    console.log(localVar);    // Accessible
    console.log(blockVar);    // Accessible
  }
  
  // console.log(blockVar);   // Would cause an error
}

scopeExample();

// Exercise 4 Solution:
const student = {
  name: "Alex",
  age: 22,
  isEnrolled: true,
  courses: ["Math", "Physics", "Programming"]
};

const activities = ["swimming", "reading", "gaming", "traveling"];

console.log(student.name);
console.log(activities[2]);

// Exercise 5 Solution:
const productName = "Laptop";
const price = 999.99;
const inStock = true;

const productInfo = `Product: ${productName}
Price: $${price}
Available: ${inStock ? "Yes" : "No"}`;

console.log(productInfo);
*/
