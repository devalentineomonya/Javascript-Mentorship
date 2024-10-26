// JavaScript Variables Explained

// Variables are like containers that store values. We can define them using 'var', 'let', or 'const'.
var name = "Alice"; // 'var' is function-scoped and can be re-assigned.
let age = 25;       // 'let' is block-scoped and allows re-assignment within its scope.
const country = "Canada"; // 'const' is block-scoped and cannot be re-assigned.

console.log("Name:", name);
console.log("Age:", age);
console.log("Country:", country);

// Practical Use Cases
let message = "Hello, " + name + "!";
console.log(message); // Outputs: Hello, Alice!

// 'let' and 'const' are more commonly used in modern JavaScript because they provide stricter scoping rules.

// Use Case Example
let score = 50;
score += 10; // This adds 10 to score
console.log("New score:", score); // Outputs: New score: 60
