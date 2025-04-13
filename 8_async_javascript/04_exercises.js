/*
 * Asynchronous JavaScript: Exercises
 *
 * This file contains exercises to practice asynchronous JavaScript concepts.
 */

// Exercise 1: Basic Callback
// -------------------------
// Create a function that takes a number and a callback.
// The function should square the number and pass the result to the callback.

function squareWithCallback(number, callback) {
  // Your code here
  setTimeout(() => {
    const result = number * number
    callback(result)
  }, 1000)
}

// Test
console.log("Exercise 1: Basic Callback")
squareWithCallback(5, (result) => {
  console.log("The square is:", result) // Should output: The square is: 25
})

// Exercise 2: Error-First Callback
// ------------------------------
// Create a function that divides two numbers using an error-first callback pattern.
// If the second number is zero, pass an error to the callback.

function divideWithCallback(a, b, callback) {
  // Your code here
  setTimeout(() => {
    if (b === 0) {
      callback(new Error("Cannot divide by zero"), null)
    } else {
      callback(null, a / b)
    }
  }, 1000)
}

// Test
console.log("\nExercise 2: Error-First Callback")
divideWithCallback(10, 2, (error, result) => {
  if (error) {
    console.error("Error:", error.message)
  } else {
    console.log("Result:", result) // Should output: Result: 5
  }
})

divideWithCallback(10, 0, (error, result) => {
  if (error) {
    console.error("Error:", error.message) // Should output: Error: Cannot divide by zero
  } else {
    console.log("Result:", result)
  }
})

// Exercise 3: Basic Promise
// -----------------------
// Create a function that returns a Promise which resolves with a message after a delay.

function delayedMessage(message, delay) {
  // Your code here
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message)
    }, delay)
  })
}

// Test
console.log("\nExercise 3: Basic Promise")
delayedMessage("Promise resolved after delay", 2000).then((message) => {
  console.log(message) // Should output after 2 seconds: Promise resolved after delay
})

// Exercise 4: Promise with Rejection
// -------------------------------
// Create a function that returns a Promise which checks if a number is positive.
// If positive, resolve with the number. If not, reject with an error message.

function checkPositive(number) {
  // Your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number > 0) {
        resolve(number)
      } else {
        reject(new Error("Number is not positive"))
      }
    }, 1000)
  })
}

// Test
console.log("\nExercise 4: Promise with Rejection")
checkPositive(5)
  .then((number) => {
    console.log("Number is positive:", number) // Should output: Number is positive: 5
  })
  .catch((error) => {
    console.error("Error:", error.message)
  })

checkPositive(-5)
  .then((number) => {
    console.log("Number is positive:", number)
  })
  .catch((error) => {
    console.error("Error:", error.message) // Should output: Error: Number is not positive
  })

// Exercise 5: Promise Chaining
// --------------------------
// Create three functions that return Promises and chain them together.
// 1. First function doubles a number
// 2. Second function adds 10 to the result
// 3. Third function squares the result

function doubleNumber(number) {
  // Your code here
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number * 2)
    }, 1000)
  })
}

function addTen(number) {
  // Your code here
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number + 10)
    }, 1000)
  })
}

function squareNumber(number) {
  // Your code here
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number * number)
    }, 1000)
  })
}

// Test
console.log("\nExercise 5: Promise Chaining")
doubleNumber(5)
  .then((result) => {
    console.log("After doubling:", result) // Should be 10
    return addTen(result)
  })
  .then((result) => {
    console.log("After adding 10:", result) // Should be 20
    return squareNumber(result)
  })
  .then((result) => {
    console.log("After squaring:", result) // Should be 400
  })

// Exercise 6: Promise.all
// ---------------------
// Create a function that uses Promise.all to fetch data from multiple sources simultaneously.
// Simulate fetching user data, user posts, and user comments.

function fetchUserData(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: "User " + userId })
    }, 2000)
  })
}

function fetchUserPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Post 1 by User " + userId },
        { id: 2, title: "Post 2 by User " + userId },
      ])
    }, 1500)
  })
}

function fetchUserComments(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: "Comment 1 by User " + userId },
        { id: 2, text: "Comment 2 by User " + userId },
      ])
    }, 1000)
  })
}

function fetchAllUserData(userId) {
  // Your code here
  return Promise.all([fetchUserData(userId), fetchUserPosts(userId), fetchUserComments(userId)])
}

// Test
console.log("\nExercise 6: Promise.all")
fetchAllUserData(123).then(([userData, userPosts, userComments]) => {
  console.log("User Data:", userData)
  console.log("User Posts:", userPosts)
  console.log("User Comments:", userComments)
})

// Exercise 7: Async/Await Basic
// ---------------------------
// Rewrite the Promise chain from Exercise 5 using async/await.

async function processNumber(number) {
  // Your code here
  const doubled = await doubleNumber(number)
  console.log("After doubling:", doubled)

  const added = await addTen(doubled)
  console.log("After adding 10:", added)

  const squared = await squareNumber(added)
  console.log("After squaring:", squared)

  return squared
}

// Test
console.log("\nExercise 7: Async/Await Basic")
processNumber(5).then((result) => {
  console.log("Final result:", result) // Should be 400
})

// Exercise 8: Async/Await with Error Handling
// ----------------------------------------
// Create an async function that uses try/catch to handle errors.

async function safeProcessNumber(number) {
  // Your code here
  try {
    const isPositive = await checkPositive(number)
    const doubled = await doubleNumber(isPositive)
    const added = await addTen(doubled)
    const squared = await squareNumber(added)
    return squared
  } catch (error) {
    console.error("Error in processing:", error.message)
    return null
  }
}

// Test
console.log("\nExercise 8: Async/Await with Error Handling")
safeProcessNumber(5).then((result) => {
  console.log("Success result:", result) // Should be a number
})

safeProcessNumber(-5).then((result) => {
  console.log("Failure result:", result) // Should be null
})

// Exercise 9: Parallel vs Sequential with Async/Await
// ------------------------------------------------
// Create two async functions: one that fetches data sequentially and one that fetches in parallel.
// Compare the execution time.

async function fetchSequentially() {
  console.time("Sequential")

  // Your code here - fetch each item one after another
  const user = await fetchUserData(456)
  const posts = await fetchUserPosts(456)
  const comments = await fetchUserComments(456)

  console.timeEnd("Sequential")
  return { user, posts, comments }
}

async function fetchInParallel() {
  console.time("Parallel")

  // Your code here - fetch all items in parallel
  const [user, posts, comments] = await Promise.all([fetchUserData(456), fetchUserPosts(456), fetchUserComments(456)])

  console.timeEnd("Parallel")
  return { user, posts, comments }
}

// Test
console.log("\nExercise 9: Parallel vs Sequential")
// Uncomment to run
// fetchSequentially().then(data => console.log("Sequential fetch complete"));
// fetchInParallel().then(data => console.log("Parallel fetch complete"));

// Exercise 10: Real-world Async Function
// -----------------------------------
// Create an async function that simulates a more complex real-world scenario:
// 1. Fetch a user
// 2. Based on user type, fetch different data
// 3. Process that data
// 4. Return a final result

function fetchUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: userId,
        name: "User " + userId,
        type: userId % 2 === 0 ? "premium" : "regular",
      })
    }, 1000)
  })
}

function fetchPremiumData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        features: ["Advanced Analytics", "Priority Support", "Custom Themes"],
      })
    }, 1000)
  })
}

function fetchRegularData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        features: ["Basic Analytics", "Standard Support", "Default Themes"],
      })
    }, 500)
  })
}

function processFeatures(features) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(features.map((feature) => feature.toUpperCase()))
    }, 800)
  })
}

async function getUserFeatures(userId) {
  // Your code here
  try {
    // 1. Fetch the user
    const user = await fetchUser(userId)
    console.log(`Fetched user: ${user.name} (${user.type})`)

    // 2. Based on user type, fetch different data
    let userData
    if (user.type === "premium") {
      userData = await fetchPremiumData()
    } else {
      userData = await fetchRegularData()
    }
    console.log(`Fetched features for ${user.type} user:`, userData.features)

    // 3. Process the data
    const processedFeatures = await processFeatures(userData.features)
    console.log("Processed features:", processedFeatures)

    // 4. Return final result
    return {
      user: user,
      features: processedFeatures,
    }
  } catch (error) {
    console.error("Error getting user features:", error.message)
    return null
  }
}

// Test
console.log("\nExercise 10: Real-world Async Function")
getUserFeatures(123).then((result) => {
  console.log("Final result for regular user:", result)
})

getUserFeatures(124).then((result) => {
  console.log("Final result for premium user:", result)
})

// Bonus Exercise: Implement a timeout wrapper
// ----------------------------------------
// Create a function that wraps a Promise and rejects if it doesn't resolve within a specified time.

function withTimeout(promise, timeoutMs) {
  // Your code here
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error(`Operation timed out after ${timeoutMs}ms`))
      }, timeoutMs)
    }),
  ])
}

// Test
console.log("\nBonus Exercise: Timeout Wrapper")
const slowOperation = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Slow operation completed")
  }, 3000)
})

withTimeout(slowOperation, 2000)
  .then((result) => {
    console.log("Result:", result)
  })
  .catch((error) => {
    console.error("Error:", error.message) // Should output: Error: Operation timed out after 2000ms
  })

withTimeout(slowOperation, 4000)
  .then((result) => {
    console.log("Result:", result) // Should output: Result: Slow operation completed
  })
  .catch((error) => {
    console.error("Error:", error.message)
  })

// Note: Some of these exercises might take several seconds to complete due to the timeouts.
