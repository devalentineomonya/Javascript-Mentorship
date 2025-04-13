// Arrays in JavaScript
// ==================

// 1. Creating Arrays
// ---------------

// Array literal notation (most common)
const fruits = ["apple", "banana", "orange", "mango"]

// Empty array
const emptyArray = []

// Using the Array constructor
const numbers = new Array(1, 2, 3, 4, 5)

// Be careful with single argument - creates array with that length
const arrayWithLength = new Array(5) // Creates array with 5 empty slots
console.log(arrayWithLength.length) // 5

// Array with mixed data types
const mixedArray = [1, "hello", true, null, { name: "John" }, [1, 2, 3]]

// 2. Accessing Array Elements
// ------------------------

// Using index (zero-based)
console.log(fruits[0]) // "apple"
console.log(fruits[2]) // "orange"

// Using at() method (ES2022) - supports negative indices
console.log(fruits.at(1)) // "banana"
console.log(fruits.at(-1)) // "mango" (last element)

// 3. Array Properties and Basic Methods
// ---------------------------------

// Length property
console.log(fruits.length) // 4

// Adding elements to the end
fruits.push("grape")
console.log(fruits) // ["apple", "banana", "orange", "mango", "grape"]

// Removing elements from the end
const lastFruit = fruits.pop()
console.log(lastFruit) // "grape"
console.log(fruits) // ["apple", "banana", "orange", "mango"]

// Adding elements to the beginning
fruits.unshift("strawberry")
console.log(fruits) // ["strawberry", "apple", "banana", "orange", "mango"]

// Removing elements from the beginning
const firstFruit = fruits.shift()
console.log(firstFruit) // "strawberry"
console.log(fruits) // ["apple", "banana", "orange", "mango"]

// 4. Finding Elements in Arrays
// --------------------------

// indexOf - returns the first index or -1 if not found
console.log(fruits.indexOf("banana")) // 1
console.log(fruits.indexOf("grape")) // -1

// lastIndexOf - searches from the end
const repeatedNumbers = [1, 2, 3, 2, 1]
console.log(repeatedNumbers.lastIndexOf(2)) // 3

// includes - returns boolean (ES7/ES2016)
console.log(fruits.includes("mango")) // true
console.log(fruits.includes("grape")) // false

// find - returns the first element that satisfies a condition (ES6)
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "oranges", quantity: 5 },
]

const found = inventory.find((item) => item.name === "oranges")
console.log(found) // { name: "oranges", quantity: 5 }

// findIndex - like find but returns the index (ES6)
const foundIndex = inventory.findIndex((item) => item.quantity === 0)
console.log(foundIndex) // 1

// 5. Transforming Arrays
// -------------------

// map - creates a new array by transforming each element
const numbers1to5 = [1, 2, 3, 4, 5]
const squared = numbers1to5.map((num) => num * num)
console.log(squared) // [1, 4, 9, 16, 25]

// filter - creates a new array with elements that pass a test
const evenNumbers = numbers1to5.filter((num) => num % 2 === 0)
console.log(evenNumbers) // [2, 4]

// reduce - reduces the array to a single value
const sum = numbers1to5.reduce((accumulator, current) => accumulator + current, 0)
console.log(sum) // 15 (1+2+3+4+5)

// flatMap - maps and then flattens (ES10/ES2019)
const sentences = ["hello world", "goodbye space"]
const words = sentences.flatMap((sentence) => sentence.split(" "))
console.log(words) // ["hello", "world", "goodbye", "space"]

// 6. Sorting and Reversing
// ---------------------

// sort - sorts the array in place
const unsortedFruits = ["orange", "apple", "banana", "mango"]
unsortedFruits.sort()
console.log(unsortedFruits) // ["apple", "banana", "mango", "orange"]

// Custom sort function
const unsortedNumbers = [10, 5, 40, 25, 100]
unsortedNumbers.sort((a, b) => a - b) // Ascending
console.log(unsortedNumbers) // [5, 10, 25, 40, 100]

// reverse - reverses the array in place
unsortedNumbers.reverse()
console.log(unsortedNumbers) // [100, 40, 25, 10, 5]

// 7. Slicing and Splicing
// --------------------

// slice - returns a shallow copy of a portion of an array
const originalArray = ["a", "b", "c", "d", "e"]
const slicedArray = originalArray.slice(1, 4)
console.log(slicedArray) // ["b", "c", "d"]
console.log(originalArray) // Original is unchanged: ["a", "b", "c", "d", "e"]

// splice - changes the contents by removing/replacing/adding elements
const months = ["Jan", "March", "April", "June"]
months.splice(1, 0, "Feb") // Insert at index 1, delete 0 elements
console.log(months) // ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May") // Replace 1 element at index 4
console.log(months) // ["Jan", "Feb", "March", "April", "May"]

const removed = months.splice(2, 2) // Remove 2 elements starting at index 2
console.log(removed) // ["March", "April"]
console.log(months) // ["Jan", "Feb", "May"]

// 8. Joining and Splitting
// ---------------------

// join - creates a string from array elements
const elements = ["Fire", "Air", "Water"]
console.log(elements.join()) // "Fire,Air,Water"
console.log(elements.join(" - ")) // "Fire - Air - Water"

// split - creates an array from a string (string method)
const csvString = "apple,banana,orange"
const fruitsArray = csvString.split(",")
console.log(fruitsArray) // ["apple", "banana", "orange"]

// 9. Array Spread Operator (ES6)
// ---------------------------

// Copying arrays
const originalFruits = ["apple", "banana"]
const fruitsCopy = [...originalFruits]
console.log(fruitsCopy) // ["apple", "banana"]

// Merging arrays
const moreFruits = ["orange", "mango"]
const allFruits = [...originalFruits, ...moreFruits]
console.log(allFruits) // ["apple", "banana", "orange", "mango"]

// 10. Array Destructuring (ES6)
// --------------------------

const rgb = [255, 140, 0]
const [red, green, blue] = rgb
console.log(red) // 255
console.log(green) // 140
console.log(blue) // 0

// Skipping elements
const [first, , third] = ["a", "b", "c", "d"]
console.log(first) // "a"
console.log(third) // "c"

// Rest pattern
const [head, ...tail] = [1, 2, 3, 4, 5]
console.log(head) // 1
console.log(tail) // [2, 3, 4, 5]

// 11. Array.from and Array.of (ES6)
// ------------------------------

// Array.from - creates arrays from array-like or iterable objects
const arrayFromString = Array.from("hello")
console.log(arrayFromString) // ["h", "e", "l", "l", "o"]

// With a mapping function
const mapped = Array.from([1, 2, 3], (x) => x * 2)
console.log(mapped) // [2, 4, 6]

// Array.of - creates an array from its arguments
const arrayOf = Array.of(1, 2, 3, 4, 5)
console.log(arrayOf) // [1, 2, 3, 4, 5]

// 12. Array Iteration Methods
// -----------------------

// forEach - executes a function for each element
const letters = ["a", "b", "c"]
letters.forEach((letter, index) => {
  console.log(`Letter at index ${index}: ${letter}`)
})

// every - tests if all elements pass a condition
const allPositive = [1, 2, 3, 4].every((num) => num > 0)
console.log(allPositive) // true

// some - tests if at least one element passes a condition
const hasNegative = [1, 2, -3, 4].some((num) => num < 0)
console.log(hasNegative) // true

// 13. Flattening Arrays (ES10/ES2019)
// --------------------------------

// flat - creates a new array with all sub-array elements concatenated
const nestedArray = [1, [2, 3], [4, [5, 6]]]
console.log(nestedArray.flat()) // [1, 2, 3, 4, [5, 6]]
console.log(nestedArray.flat(2)) // [1, 2, 3, 4, 5, 6]

// 14. Array Methods for Empty Slots
// -----------------------------

// Arrays can have "empty slots"
const sparseArray = [1, , 3]
console.log(sparseArray.length) // 3
console.log(sparseArray) // [1, empty, 3]

// Different methods handle empty slots differently
console.log(sparseArray.map((x) => x * 2)) // [2, empty, 6]
console.log(sparseArray.filter((x) => true)) // [1, 3] (skips empty slots)
console.log(sparseArray.forEach((x) => console.log(x))) // Logs 1 and 3 (skips empty)

// 15. Checking if a Value is an Array
// --------------------------------

console.log(Array.isArray([1, 2, 3])) // true
console.log(Array.isArray("hello")) // false
console.log(Array.isArray({ length: 5 })) // false
