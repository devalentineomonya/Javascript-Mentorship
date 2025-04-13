/*
 * Asynchronous JavaScript: Async/Await
 *
 * This file introduces async/await, a modern way to handle asynchronous operations
 * introduced in ES2017 (ECMAScript 2017).
 */

// Introduction to Async/Await
console.log("--- Introduction to Async/Await ---")

// Async/await is syntactic sugar built on top of Promises
// It makes asynchronous code look and behave more like synchronous code

// Basic Async Function
console.log("\n--- Basic Async Function ---")

// An async function always returns a Promise
async function simpleAsync() {
  return "Hello from async"
}

console.log("Function type:", simpleAsync)
console.log("Function call returns:", simpleAsync())

// Using the returned Promise
simpleAsync().then((result) => {
  console.log("Async result:", result)
})

// Basic Await Usage
console.log("\n--- Basic Await Usage ---")

// The await keyword can only be used inside async functions
// It pauses the execution of the function until the Promise resolves
async function delayedGreeting(name) {
  console.log("Function started")

  // Simulate a delay with a Promise
  const greeting = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Hello, ${name}!`)
    }, 1000)
  })

  console.log("After await")
  return greeting
}

// Execute the async function
console.log("Before calling async function")
delayedGreeting("Alice").then((result) => {
  console.log("Result:", result)
})
console.log("After calling async function")

// Error Handling with Async/Await
console.log("\n--- Error Handling with Async/Await ---")

// Using try/catch with async/await
async function fetchData(shouldSucceed) {
  try {
    // Simulate an API call
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldSucceed) {
          resolve("Data fetched successfully")
        } else {
          reject(new Error("Failed to fetch data"))
        }
      }, 1000)
    })

    console.log("Data:", data)
    return data
  } catch (error) {
    console.error("Error caught in async function:", error.message)
    // You can return a default value or rethrow the error
    return "Default data after error"
  }
}

// Success case
fetchData(true).then((result) => {
  console.log("Final result (success):", result)
})

// Error case
fetchData(false).then((result) => {
  console.log("Final result (after error):", result)
})

// Async/Await with Promise Rejection
console.log("\n--- Async/Await with Promise Rejection ---")

// If you don't use try/catch, the error will propagate to the Promise returned by the async function
async function fetchWithoutTryCatch(shouldSucceed) {
  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve("Data fetched successfully")
      } else {
        reject(new Error("Failed to fetch data"))
      }
    }, 1000)
  })

  return data
}

// Success case
fetchWithoutTryCatch(true)
  .then((result) => {
    console.log("Success result:", result)
  })
  .catch((error) => {
    console.error("This won't execute for success case")
  })

// Error case
fetchWithoutTryCatch(false)
  .then((result) => {
    console.log("This won't execute for error case")
  })
  .catch((error) => {
    console.error("Error caught in Promise chain:", error.message)
  })

// Sequential vs Parallel Execution
console.log("\n--- Sequential vs Parallel Execution ---")

// Helper functions that return Promises
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John Doe" })
    }, 1000)
  })
}

function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Post 1" },
        { id: 2, title: "Post 2" },
      ])
    }, 1000)
  })
}

function fetchComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: "Comment 1" },
        { id: 2, text: "Comment 2" },
      ])
    }, 1000)
  })
}

// Sequential execution (one after another)
async function fetchDataSequentially() {
  console.time("Sequential")

  const user = await fetchUser()
  console.log("User:", user)

  const posts = await fetchPosts(user.id)
  console.log("Posts:", posts)

  const comments = await fetchComments(posts[0].id)
  console.log("Comments:", comments)

  console.timeEnd("Sequential")
  return { user, posts, comments }
}

// Parallel execution (all at once)
async function fetchDataInParallel() {
  console.time("Parallel")

  // Start all fetch operations without awaiting
  const userPromise = fetchUser()
  const postsPromise = fetchPosts(1) // We know the user ID is 1
  const commentsPromise = fetchComments(1) // We know the post ID is 1

  // Now await all results
  const user = await userPromise
  const posts = await postsPromise
  const comments = await commentsPromise

  console.log("Parallel results ready")
  console.timeEnd("Parallel")
  return { user, posts, comments }
}

// Using Promise.all for parallel execution
async function fetchDataWithPromiseAll() {
  console.time("Promise.all")

  // Execute all promises in parallel and wait for all to complete
  const [user, posts, comments] = await Promise.all([fetchUser(), fetchPosts(1), fetchComments(1)])

  console.log("Promise.all results ready")
  console.timeEnd("Promise.all")
  return { user, posts, comments }
}

// Uncomment to run the examples
// fetchDataSequentially().then(() => console.log("Sequential complete"));
// fetchDataInParallel().then(() => console.log("Parallel complete"));
// fetchDataWithPromiseAll().then(() => console.log("Promise.all complete"));

// Async/Await with Loops
console.log("\n--- Async/Await with Loops ---")

// Helper function that returns a Promise
function fetchItem(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: `Item ${id}` })
    }, 500)
  })
}

// Sequential processing with for loop
async function processItemsSequentially(ids) {
  console.time("Sequential loop")
  const results = []

  for (const id of ids) {
    // Each iteration waits for the previous one to complete
    const item = await fetchItem(id)
    results.push(item)
    console.log(`Processed item ${id}`)
  }

  console.timeEnd("Sequential loop")
  return results
}

// Parallel processing with Promise.all and map
async function processItemsInParallel(ids) {
  console.time("Parallel loop")

  // Create an array of Promises
  const promises = ids.map((id) => fetchItem(id))

  // Wait for all Promises to resolve
  const results = await Promise.all(promises)

  console.timeEnd("Parallel loop")
  return results
}

// Uncomment to run the examples
// processItemsSequentially([1, 2, 3, 4, 5]).then(results => console.log("Sequential results:", results));
// processItemsInParallel([1, 2, 3, 4, 5]).then(results => console.log("Parallel results:", results));

// Async IIFE (Immediately Invoked Function Expression)
console.log("\n--- Async IIFE ---")

// Using an async IIFE to use await at the top level
;(async () => {
  console.log("Inside async IIFE")
  const result = await simpleAsync()
  console.log("IIFE result:", result)
})()

// Async/Await with Class Methods
console.log("\n--- Async/Await with Class Methods ---")

class DataService {
  // Class methods can be async
  async fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data from service")
      }, 1000)
    })
  }

  async processData() {
    const data = await this.fetchData()
    return `Processed: ${data}`
  }
}

const service = new DataService()
service.processData().then((result) => {
  console.log("Class method result:", result)
})

// Best Practices
console.log("\n--- Best Practices ---")

// 1. Always handle errors with try/catch
async function bestPractice1() {
  try {
    const result = await fetchWithoutTryCatch(false) // This will throw
    return result
  } catch (error) {
    console.error("Error handled:", error.message)
    // Return a fallback or rethrow
    return "Fallback value"
  }
}

// 2. Remember that async functions always return Promises
async function bestPractice2() {
  return "This is wrapped in a Promise"
}

// 3. Use Promise.all for parallel operations
async function bestPractice3(ids) {
  // Process multiple items in parallel
  const results = await Promise.all(ids.map((id) => fetchItem(id)))
  return results
}

// 4. Avoid mixing await with Promise methods
async function bestPractice4() {
  // Good:
  try {
    const result = await fetchData(false)
    return result
  } catch (error) {
    return "Error handled"
  }

  // Avoid:
  // return fetchData(false).then(result => result);
}

// 5. Be careful with loops
async function bestPractice5(ids) {
  // Sequential when order matters
  const sequentialResults = []
  for (const id of ids) {
    const result = await fetchItem(id)
    sequentialResults.push(result)
  }

  // Parallel when order doesn't matter
  const parallelPromises = ids.map((id) => fetchItem(id))
  const parallelResults = await Promise.all(parallelPromises)

  return { sequentialResults, parallelResults }
}

// Limitations and Considerations
console.log("\n--- Limitations and Considerations ---")

// 1. Async/await is still built on Promises
// 2. You can't use await outside of an async function (except in modules with top-level await)
// 3. Error handling requires try/catch blocks
// 4. Sequential execution might be slower than parallel execution

// Conclusion
console.log("\n--- Conclusion ---")
console.log("Async/await provides a cleaner syntax for working with Promises")
console.log("It makes asynchronous code look more like synchronous code")
console.log("It's built on top of Promises, so understanding Promises is still important")
console.log("Modern JavaScript development heavily uses async/await for asynchronous operations")
