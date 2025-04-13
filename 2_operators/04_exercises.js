// Operators and Expressions - Exercises
// ===================================

// Exercise 1: Arithmetic Operations
// -------------------------------
// Calculate the area and perimeter of a rectangle with width 5 and height 8
// Your code here:

// Exercise 2: Temperature Conversion
// --------------------------------
// Convert 77 degrees Fahrenheit to Celsius (Formula: (F - 32) * 5/9)
// Your code here:

// Exercise 3: Logical Expressions
// -----------------------------
// Write expressions to check if:
// 1. A number is between 10 and 20 (inclusive)
// 2. A string is either "admin" or "superuser"
// Your code here:

// Exercise 4: Default Values
// ------------------------
// Use the nullish coalescing operator to provide default values for potentially null/undefined variables
// Your code here:

// Exercise 5: Comparison Chain
// --------------------------
// Check if a number is positive, negative, or zero
// Your code here:

// ========== SOLUTIONS ==========
/*
// Exercise 1 Solution:
const width = 5;
const height = 8;

const area = width * height;
const perimeter = 2 * (width + height);

console.log(`Rectangle with width ${width} and height ${height}:`);
console.log(`Area: ${area}`);
console.log(`Perimeter: ${perimeter}`);

// Exercise 2 Solution:
const fahrenheit = 77;
const celsius = (fahrenheit - 32) * 5/9;

console.log(`${fahrenheit}°F = ${celsius.toFixed(2)}°C`);

// Exercise 3 Solution:
const num = 15;
const isBetween10And20 = num >= 10 && num <= 20;
console.log(`${num} is between 10 and 20: ${isBetween10And20}`);

const role = "admin";
const isAdminOrSuperuser = role === "admin" || role === "superuser";
console.log(`Role "${role}" is admin or superuser: ${isAdminOrSuperuser}`);

// Exercise 4 Solution:
const username = null;
const defaultUsername = username ?? "Guest";

const preferences = undefined;
const defaultPreferences = preferences ?? { theme: "light", notifications: true };

console.log(`Username: ${defaultUsername}`);
console.log("Preferences:", defaultPreferences);

// Exercise 5 Solution:
const checkNumber = (num) => {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
};

console.log(`Number 5 is ${checkNumber(5)}`);
console.log(`Number -3 is ${checkNumber(-3)}`);
console.log(`Number 0 is ${checkNumber(0)}`);
*/
