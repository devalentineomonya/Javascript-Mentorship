/*
 * JavaScript Memory Management
 *
 * Understanding how JavaScript manages memory is crucial for writing efficient code
 * and avoiding memory leaks.
 */

// Memory Lifecycle
console.log("=== Memory Lifecycle ===")
/*
 * 1. Allocation: JavaScript automatically allocates memory when objects are created
 * 2. Usage: Reading from or writing to memory
 * 3. Release: Garbage collection frees memory when objects are no longer needed
 */

// Memory Allocation
console.log("\n=== Memory Allocation ===")

// Primitive values
const number = 42 // Allocates memory for a number
const string = "Hello" // Allocates memory for a string
const boolean = true // Allocates memory for a boolean

// Objects and Arrays
const object = { name: "John", age: 30 } // Allocates memory for an object and its properties
const array = [1, 2, 3, 4, 5] // Allocates memory for an array and its elements

// Functions
function createFunction() {
  const message = "Hello, world!"
  return () => {
    console.log(message) // Closure keeps reference to message
  }
}

const myFunction = createFunction() // Allocates memory for the function and its closure

// Garbage Collection
console.log("\n=== Garbage Collection ===")
/*
 * JavaScript uses automatic garbage collection to free memory that's no longer needed.
 * The main algorithm is "Mark and Sweep":
 *
 * 1. The garbage collector identifies "roots" (global objects)
 * 2. It marks all objects referenced from these roots
 * 3. It marks all objects referenced from marked objects
 * 4. It collects all unmarked objects (unreachable objects)
 */

// Example of objects eligible for garbage collection
function createObjects() {
  const obj1 = { data: "temporary" }
  const obj2 = { data: "also temporary" }

  return { kept: "this object is returned and referenced" }
}

const result = createObjects()
// obj1 and obj2 are now eligible for garbage collection
// result is still referenced and not eligible

// Memory Leaks
console.log("\n=== Memory Leaks ===")
/*
 * Memory leaks occur when memory that is no longer needed is not released.
 * Common causes of memory leaks in JavaScript:
 */

// 1. Unintended global variables
function leakyFunction() {
  var leakyVariable = "I'm not using var, let, or const!" // Becomes a global variable
}
// leakyFunction();  // Uncomment to create a global variable

// 2. Forgotten timers or callbacks
function startTimer() {
  const largeData = new Array(1000000).fill("data")

  setInterval(() => {
    // This reference to largeData prevents it from being garbage collected
    console.log("Timer using", largeData.length)
  }, 1000)
}
// startTimer();  // Uncomment to create a memory leak

// 3. Closures that hold references to large objects
function createClosure() {
  const largeData = new Array(1000000).fill("data")

  return () => {
    // This closure keeps a reference to largeData
    console.log("Closure using", largeData.length)
  }
}
// const closure = createClosure();  // Uncomment to create a potential memory leak

// 4. DOM references outside of the DOM
function setupDOM() {
  // In a browser environment:
  // const button = document.getElementById('myButton');
  // const elements = [];
  //
  // function handleClick() {
  //     // Do something
  // }
  //
  // button.addEventListener('click', handleClick);
  // elements.push(button);  // Storing DOM reference
  //
  // // Later, if we remove the button from the DOM but keep the elements array:
  // // document.body.removeChild(button);
  // // The button is still referenced in the elements array and by the event listener
}

// Best Practices
console.log("\n=== Best Practices ===")

// 1. Avoid creating unnecessary objects
function inefficient(items) {
  return items.map((item) => {
    // Creates a new object for each item
    return { value: item, processed: true }
  })
}

function efficient(items) {
  // Reuses the same object structure
  return items.map((item) =>
    Object.create(null, {
      value: { value: item, enumerable: true },
      processed: { value: true, enumerable: true },
    }),
  )
}

// 2. Nullify references to help garbage collection
function processData() {
  let largeData = new Array(1000000).fill("data")

  // Process the data
  console.log("Processing", largeData.length, "items")

  // Explicitly nullify the reference when done
  largeData = null
}
processData()

// 3. Be careful with closures
function createCounter() {
  let count = 0

  return () => ++count
}

const counter = createCounter()
console.log(counter()) // 1
console.log(counter()) // 2

// 4. Clean up event listeners
function addAndRemoveListener() {
  // In a browser environment:
  // const button = document.getElementById('myButton');
  //
  // function handleClick() {
  //     console.log('Button clicked');
  //     // Clean up by removing the event listener
  //     button.removeEventListener('click', handleClick);
  // }
  //
  // button.addEventListener('click', handleClick);
}

// 5. Use WeakMap and WeakSet for object references
const cache = new WeakMap()

function processObject(obj) {
  if (cache.has(obj)) {
    return cache.get(obj)
  }

  const result = /* expensive computation */ obj
  cache.set(obj, result)
  return result
}

// Memory Profiling
console.log("\n=== Memory Profiling ===")
/*
 * In a browser environment, you can use Chrome DevTools to profile memory:
 * 1. Performance tab: Record and analyze memory usage over time
 * 2. Memory tab: Take heap snapshots to find memory leaks
 * 3. Use console.memory to get information about memory usage
 */

// In Node.js, you can use:
// 1. process.memoryUsage() to get memory usage information
// 2. --inspect flag to connect Chrome DevTools
// 3. heapdump module to generate heap snapshots

// Example of checking memory usage in Node.js
console.log("Memory usage:", process.memoryUsage())
