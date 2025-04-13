// Switch Statement in JavaScript
// ============================

// The switch statement evaluates an expression and matches it against multiple case clauses
// It's often cleaner than multiple if...else statements when comparing a single value

// 1. Basic switch statement
// -----------------------
const day = 3

switch (day) {
  case 1:
    console.log("Monday")
    break
  case 2:
    console.log("Tuesday")
    break
  case 3:
    console.log("Wednesday")
    break
  case 4:
    console.log("Thursday")
    break
  case 5:
    console.log("Friday")
    break
  case 6:
    console.log("Saturday")
    break
  case 7:
    console.log("Sunday")
    break
  default:
    console.log("Invalid day")
}

// 2. The importance of the break statement
// -------------------------------------
// Without break, execution "falls through" to the next case
const fruit = "apple"

switch (fruit) {
  case "apple":
    console.log("This is an apple")
  // No break here, so execution continues to the next case
  case "banana":
    console.log("This is a yellow fruit")
    break
  case "orange":
    console.log("This is an orange")
    break
}
// Output:
// "This is an apple"
// "This is a yellow fruit"

// 3. Multiple cases with the same code
// ----------------------------------
const month = "Feb"

switch (month) {
  case "Jan":
  case "Mar":
  case "May":
  case "Jul":
  case "Aug":
  case "Oct":
  case "Dec":
    console.log("This month has 31 days")
    break
  case "Apr":
  case "Jun":
  case "Sep":
  case "Nov":
    console.log("This month has 30 days")
    break
  case "Feb":
    console.log("This month has 28 or 29 days")
    break
  default:
    console.log("Invalid month")
}

// 4. Switch with expressions in case statements
// ------------------------------------------
// Note: case values must be constants or literals, not variables or expressions
const score = 85

switch (true) {
  case score >= 90:
    console.log("Grade: A")
    break
  case score >= 80:
    console.log("Grade: B")
    break
  case score >= 70:
    console.log("Grade: C")
    break
  case score >= 60:
    console.log("Grade: D")
    break
  default:
    console.log("Grade: F")
}

// 5. Switch with strict equality
// ----------------------------
// Switch uses strict equality (===) for comparison
const value = "10"

switch (value) {
  case 10: // This won't match because "10" !== 10
    console.log("Number 10")
    break
  case "10": // This will match because "10" === "10"
    console.log("String 10")
    break
  default:
    console.log("Something else")
}

// 6. Default case placement
// -----------------------
// The default case doesn't have to be the last one
const errorCode = 404

switch (errorCode) {
  default:
    console.log("Unknown error")
    break // Break is still needed here
  case 404:
    console.log("Not Found")
    break
  case 500:
    console.log("Server Error")
    break
}

// 7. Switch vs if...else
// --------------------
// Switch is often more readable when comparing a single value against multiple options
// If...else is more flexible for complex conditions

// Example: Converting switch to if...else
const dayNumber = 3
let dayName

// Using switch
switch (dayNumber) {
  case 1:
    dayName = "Monday"
    break
  case 2:
    dayName = "Tuesday"
    break
  case 3:
    dayName = "Wednesday"
    break
  case 4:
    dayName = "Thursday"
    break
  case 5:
    dayName = "Friday"
    break
  case 6:
    dayName = "Saturday"
    break
  case 7:
    dayName = "Sunday"
    break
  default:
    dayName = "Invalid day"
}

// Equivalent if...else
if (dayNumber === 1) {
  dayName = "Monday"
} else if (dayNumber === 2) {
  dayName = "Tuesday"
} else if (dayNumber === 3) {
  dayName = "Wednesday"
} else if (dayNumber === 4) {
  dayName = "Thursday"
} else if (dayNumber === 5) {
  dayName = "Friday"
} else if (dayNumber === 6) {
  dayName = "Saturday"
} else if (dayNumber === 7) {
  dayName = "Sunday"
} else {
  dayName = "Invalid day"
}

console.log(dayName)
