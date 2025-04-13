/*
 * Asynchronous JavaScript: Promises
 *
 * This file introduces Promises, a more structured way to handle asynchronous operations
 * introduced in ES6 (ECMAScript 2015).
 */

// Introduction to Promises
console.log("--- Introduction to Promises ---")

// A Promise is an object representing the eventual completion or failure of an asynchronous operation
// It has three states: pending, fulfilled (resolved), or rejected

// Creating a Promise
const simplePromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  setTimeout(() => {
    const success = true // Simulate success

    if (success) {
      resolve("Operation completed successfully")
    } else {
      reject(new Error("Operation failed"))
    }
  }, 1000)
})

console.log("Promise created:", simplePromise) // Promise in pending state

// Using a Promise with then/catch
simplePromise
  .then((result) => {
    console.log("Promise resolved:", result)
  })
  .catch((error) => {
    console.error("Promise rejected:", error.message)
  })

// Promise States
console.log("\n--- Promise States ---")

// 1. Pending: Initial state, neither fulfilled nor rejected
const pendingPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("I will be resolved after 5 seconds")
  }, 5000)
})

console.log("Pending promise:", pendingPromise)

// 2. Fulfilled: The operation completed successfully
const fulfilledPromise = Promise.resolve("I am already fulfilled")
fulfilledPromise.then((value) => {
  console.log("Fulfilled promise:", value)
})

// 3. Rejected: The operation failed
const rejectedPromise = Promise.reject(new Error("I am rejected"))
rejectedPromise.catch((error) => {
  console.log("Rejected promise:", error.message)
})

// Promise Chaining
console.log("\n--- Promise Chaining ---")

// Promises can be chained to handle sequential asynchronous operations
function getUserId() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(123)
    }, 1000)
  })
}

function getUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId) {
        resolve({
          id: userId,
          name: "Alice",
          email: "alice@example.com",
        })
      } else {
        reject(new Error("Invalid user ID"))
      }
    }, 1000)
  })
}

function getUserPosts(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: user,
        posts: [
          { id: 1, title: "Promise Basics" },
          { id: 2, title: "Promise Chaining" },
        ],
      })
    }, 1000)
  })
}

// Chain promises to get user data and posts
getUserId()
  .then((userId) => {
    console.log("Got user ID:", userId)
    return getUserData(userId)
  })
  .then((userData) => {
    console.log("Got user data:", userData)
    return getUserPosts(userData)
  })
  .then((result) => {
    console.log("Got user posts:", result)
  })
  .catch((error) => {
    console.error("Error in promise chain:", error.message)
  })

// Error Handling in Promises
console.log("\n--- Error Handling in Promises ---")

// Errors propagate down the promise chain until caught
function fetchData(shouldSucceed) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve("Data fetched successfully")
      } else {
        reject(new Error("Failed to fetch data"))
      }
    }, 1000)
  })
}

function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        resolve(`Processed: ${data}`)
      } else {
        reject(new Error("No data to process"))
      }
    }, 1000)
  })
}

// Success case
fetchData(true)
  .then((data) => {
    console.log("Fetch successful:", data)
    return processData(data)
  })
  .then((result) => {
    console.log("Process successful:", result)
  })
  .catch((error) => {
    console.error("Error in promise chain:", error.message)
  })

// Error case
fetchData(false)
  .then((data) => {
    console.log("Fetch successful:", data)
    return processData(data)
  })
  .then((result) => {
    console.log("Process successful:", result)
  })
  .catch((error) => {
    console.error("Error in promise chain:", error.message)
    // The error is caught here, and the chain stops
  })

// Handling errors at specific points
fetchData(true)
  .then((data) => {
    console.log("Fetch successful:", data)
    // Simulate an error in the middle of the chain
    throw new Error("Something went wrong during processing")
    // The following code won't execute
    return processData(data)
  })
  .then((result) => {
    console.log("Process successful:", result)
  })
  .catch((error) => {
    console.error("Caught an error:", error.message)
    // Return a default value to continue the chain
    return "Default result after error"
  })
  .then((fallbackData) => {
    console.log("Continuing after error with:", fallbackData)
  })

// Promise.all
console.log("\n--- Promise.all ---")

// Promise.all takes an array of promises and returns a new promise
// that resolves when all input promises have resolved
const promise1 = Promise.resolve("First result")
const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Second result")
  }, 1000)
})
const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Third result")
  }, 2000)
})

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log("All promises resolved:", results)
    // results is an array of the resolved values
    // in the same order as the promises array
  })
  .catch((error) => {
    console.error("At least one promise rejected:", error.message)
  })

// If any promise rejects, Promise.all rejects immediately
const promise4 = Promise.resolve("Fourth result")
const promise5 = Promise.reject(new Error("Fifth promise failed"))
const promise6 = Promise.resolve("Sixth result")

Promise.all([promise4, promise5, promise6])
  .then((results) => {
    console.log("This will not execute")
  })
  .catch((error) => {
    console.error("Promise.all rejected:", error.message)
  })

// Promise.race
console.log("\n--- Promise.race ---")

// Promise.race takes an array of promises and returns a new promise
// that resolves or rejects as soon as one of the promises resolves or rejects
const slow = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Slow operation finished")
  }, 2000)
})

const fast = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Fast operation finished")
  }, 1000)
})

Promise.race([slow, fast])
  .then((result) => {
    console.log("Race winner:", result) // Will be 'Fast operation finished'
  })
  .catch((error) => {
    console.error("Race error:", error.message)
  })

// Promise.race with a timeout
const dataFetch = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data fetched")
  }, 3000)
})

const timeout = new Promise((_, reject) => {
  setTimeout(() => {
    reject(new Error("Operation timed out"))
  }, 2000)
})

Promise.race([dataFetch, timeout])
  .then((result) => {
    console.log("Operation result:", result)
  })
  .catch((error) => {
    console.error("Operation failed:", error.message) // Will be 'Operation timed out'
  })

// Promise.allSettled
console.log("\n--- Promise.allSettled ---")

// Promise.allSettled takes an array of promises and returns a new promise
// that resolves after all promises have settled (either resolved or rejected)
const mixedPromises = [Promise.resolve("Success 1"), Promise.reject(new Error("Error 1")), Promise.resolve("Success 2")]

Promise.allSettled(mixedPromises).then((results) => {
  console.log("All promises settled:")
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Promise ${index + 1} fulfilled with value:`, result.value)
    } else {
      console.log(`Promise ${index + 1} rejected with reason:`, result.reason.message)
    }
  })
})

// Promise.any (ES2021)
console.log("\n--- Promise.any ---")

// Promise.any takes an array of promises and returns a new promise
// that resolves as soon as one of the promises resolves
const promises = [
  new Promise((resolve, reject) => setTimeout(reject, 1000, new Error("Error 1"))),
  new Promise((resolve, reject) => setTimeout(resolve, 2000, "Success 1")),
  new Promise((resolve, reject) => setTimeout(resolve, 3000, "Success 2")),
]

// Note: Promise.any might not be available in all environments
if (typeof Promise.any === "function") {
  Promise.any(promises)
    .then((result) => {
      console.log("First promise to fulfill:", result) // Will be 'Success 1'
    })
    .catch((error) => {
      console.error("All promises rejected:", error)
    })
} else {
  console.log("Promise.any is not supported in this environment")
}

// Converting Callbacks to Promises
console.log("\n--- Converting Callbacks to Promises ---")

// Traditional callback-based function
function traditionalCallback(value, callback) {
  setTimeout(() => {
    if (value > 0) {
      callback(null, value * 2)
    } else {
      callback(new Error("Value must be positive"), null)
    }
  }, 1000)
}

// Promisified version
function promisified(value) {
  return new Promise((resolve, reject) => {
    traditionalCallback(value, (error, result) => {
      if (error) {
        reject(error)
      } else {
        resolve(result)
      }
    })
  })
}

// Using the promisified function
promisified(5)
  .then((result) => {
    console.log("Promisified success:", result)
  })
  .catch((error) => {
    console.error("Promisified error:", error.message)
  })

promisified(-5)
  .then((result) => {
    console.log("This will not execute")
  })
  .catch((error) => {
    console.error("Promisified error:", error.message)
  })

// Utility function to promisify any callback-based function
function promisify(fn) {
  return (...args) =>
    new Promise((resolve, reject) => {
      fn(...args, (error, result) => {
        if (error) {
          reject(error)
        } else {
          resolve(result)
        }
      })
    })
}

const promisifiedFunction = promisify(traditionalCallback)
promisifiedFunction(10)
  .then((result) => {
    console.log("Generic promisify success:", result)
  })
  .catch((error) => {
    console.error("Generic promisify error:", error.message)
  })

// Best Practices
console.log("\n--- Best Practices ---")

// 1. Always return promises from functions that perform asynchronous operations
function goodAsyncFunction(value) {
  return new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(() => {
      resolve(value)
    }, 1000)
  })
}

// 2. Always handle promise rejections
goodAsyncFunction(42)
  .then((result) => {
    console.log("Result:", result)
  })
  .catch((error) => {
    console.error("Error:", error)
  })

// 3. Use Promise.all for parallel operations
function fetchAllData() {
  return Promise.all([goodAsyncFunction("data1"), goodAsyncFunction("data2"), goodAsyncFunction("data3")])
}

fetchAllData()
  .then((results) => {
    console.log("All data:", results)
  })
  .catch((error) => {
    console.error("Error fetching data:", error)
  })

// 4. Avoid nesting promises (use chaining instead)
// Bad:
goodAsyncFunction("step1").then((result1) => {
  console.log("Step 1:", result1)
  goodAsyncFunction("step2").then((result2) => {
    console.log("Step 2:", result2)
  })
})

// Good:
goodAsyncFunction("step1")
  .then((result1) => {
    console.log("Step 1:", result1)
    return goodAsyncFunction("step2")
  })
  .then((result2) => {
    console.log("Step 2:", result2)
  })
  .catch((error) => {
    console.error("Error in steps:", error)
  })

// 5. Use finally for cleanup
goodAsyncFunction("data")
  .then((result) => {
    console.log("Success:", result)
  })
  .catch((error) => {
    console.error("Error:", error)
  })
  .finally(() => {
    console.log("This runs regardless of success or failure")
  })

// Conclusion
console.log("\n--- Conclusion ---")
console.log("Promises provide a more structured way to handle asynchronous operations")
console.log("They solve the callback hell problem and provide better error handling")
console.log("Modern JavaScript has even better solutions with async/await (covered next)")
