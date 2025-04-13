// Control Structures - Exercises
// ============================

// Exercise 1: FizzBuzz
// ------------------
// Write a program that prints numbers from 1 to 100
// For multiples of 3, print "Fizz" instead of the number
// For multiples of 5, print "Buzz" instead of the number
// For multiples of both 3 and 5, print "FizzBuzz"
// Your code here:

// Exercise 2: Grade Calculator
// --------------------------
// Write a function that takes a score (0-100) and returns a letter grade
// A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: 0-59
// Your code here:

// Exercise 3: Prime Number Checker
// -----------------------------
// Write a function that checks if a number is prime
// Your code here:

// Exercise 4: Pattern Printing
// -------------------------
// Write a program that prints the following pattern:
// *
// **
// ***
// ****
// *****
// Your code here:

// Exercise 5: Sum of Even Numbers
// ----------------------------
// Calculate the sum of all even numbers from 1 to 100
// Your code here:

// ========== SOLUTIONS ==========
/*
// Exercise 1 Solution:
console.log("FizzBuzz Solution:");
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Exercise 2 Solution:
function calculateGrade(score) {
  if (score >= 90 && score <= 100) {
    return 'A';
  } else if (score >= 80 && score < 90) {
    return 'B';
  } else if (score >= 70 && score < 80) {
    return 'C';
  } else if (score >= 60 && score < 70) {
    return 'D';
  } else if (score >= 0 && score < 60) {
    return 'F';
  } else {
    return 'Invalid score';
  }
}

console.log("\nGrade Calculator:");
console.log(`Score 95: ${calculateGrade(95)}`);
console.log(`Score 82: ${calculateGrade(82)}`);
console.log(`Score 71: ${calculateGrade(71)}`);
console.log(`Score 65: ${calculateGrade(65)}`);
console.log(`Score 45: ${calculateGrade(45)}`);

// Exercise 3 Solution:
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  
  return true;
}

console.log("\nPrime Number Checker:");
console.log(`Is 7 prime? ${isPrime(7)}`);
console.log(`Is 10 prime? ${isPrime(10)}`);
console.log(`Is 23 prime? ${isPrime(23)}`);
console.log(`Is 35 prime? ${isPrime(35)}`);

// Exercise 4 Solution:
console.log("\nPattern Printing:");
for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '*';
  }
  console.log(row);
}

// Exercise 5 Solution:
let sum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log("\nSum of Even Numbers from 1 to 100:");
console.log(sum);
*/
