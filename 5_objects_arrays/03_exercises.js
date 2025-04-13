// Objects and Arrays - Exercises
// ============================

// Exercise 1: Object Manipulation
// ----------------------------
// Create an object representing a car with properties for make, model, year, and color
// Then add a method that returns the car's full description
// Your code here:

// Exercise 2: Array Transformation
// -----------------------------
// Given an array of numbers, create a new array that contains the square of each number
// Then filter out any squares that are odd numbers
// Your code here:

// Exercise 3: Object Destructuring
// -----------------------------
// Create an object representing a user with properties for name, email, age, and address
// Use destructuring to extract the name, email, and age into separate variables
// Your code here:

// Exercise 4: Array Methods
// ----------------------
// Given an array of student objects with properties for name and score,
// find the student with the highest score
// Your code here:

// Exercise 5: Deep Clone
// -------------------
// Write a function that creates a deep clone of an object
// (Hint: You can use JSON.parse and JSON.stringify for a simple solution)
// Your code here:

// ========== SOLUTIONS ==========
/*
// Exercise 1 Solution:
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
  color: "Silver",
  getDescription: function() {
    return `${this.year} ${this.make} ${this.model}, ${this.color}`;
  }
};

console.log(car.getDescription()); // "2022 Toyota Camry, Silver"

// Exercise 2 Solution:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squares = numbers.map(num => num * num);
const evenSquares = squares.filter(square => square % 2 === 0);

console.log("Original numbers:", numbers);
console.log("All squares:", squares);
console.log("Even squares only:", evenSquares);

// Exercise 3 Solution:
const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  age: 28,
  address: {
    street: "123 Main St",
    city: "Boston",
    state: "MA",
    zip: "02101"
  }
};

const { name, email, age } = user;

console.log("Name:", name);
console.log("Email:", email);
console.log("Age:", age);

// Exercise 4 Solution:
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 88 },
  { name: "Diana", score: 95 },
  { name: "Evan", score: 79 }
];

// Method 1: Using reduce
const topStudent = students.reduce((highest, current) => {
  return current.score > highest.score ? current : highest;
}, students[0]);

// Method 2: Using sort
// const sortedStudents = [...students].sort((a, b) => b.score - a.score);
// const topStudent = sortedStudents[0];

console.log("Student with highest score:", topStudent.name, "with", topStudent.score, "points");

// Exercise 5 Solution:
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Alternative solution without JSON methods (handles more cases but more complex)
function deepCloneAdvanced(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  // Handle Date
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }
  
  // Handle Array
  if (Array.isArray(obj)) {
    return obj.map(item => deepCloneAdvanced(item));
  }
  
  // Handle Object
  const clonedObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clonedObj[key] = deepCloneAdvanced(obj[key]);
    }
  }
  
  return clonedObj;
}

const original = {
  name: "Original",
  details: {
    created: new Date(),
    stats: [1, 2, 3]
  }
};

const cloned = deepClone(original);
cloned.name = "Cloned";
cloned.details.stats.push(4);

console.log("Original:", original);
console.log("Cloned:", cloned);
*/
