/*
 * Asynchronous JavaScript: Callbacks
 *
 * This file introduces callbacks, the traditional way to handle asynchronous operations in JavaScript.
 */

// Synchronous vs Asynchronous Code
console.log("--- Synchronous vs Asynchronous ---")

// Synchronous code executes in sequence
console.log("First")
console.log("Second")
console.log("Third")

// Asynchronous code doesn't block execution
console.log("\nAsynchronous example:")
console.log("Before setTimeout")

setTimeout(() => {
  console.log("Inside setTimeout (after 1 second)")
}, 1000)

console.log("After setTimeout")

// Basic Callbacks
console.log("\n--- Basic Callbacks ---")

// Callbacks are functions passed as arguments to other functions
function greet(name, callback) {
  console.log(`Hello, ${name}!`)
  callback()
}

function sayGoodbye() {
  console.log("Goodbye!")
}

greet("Alice", sayGoodbye)

// Anonymous function as callback
greet("Bob", () => {
  console.log("See you later!")
})

// Arrow function as callback
greet("Charlie", () => {
  console.log("Take care!")
})

// Callbacks with Parameters
console.log("\n--- Callbacks with Parameters ---")

function processUserInput(name, age, callback) {
  const userInfo = {
    name: name,
    age: age,
  }

  callback(userInfo)
}

processUserInput("David", 30, (user) => {
  console.log(`Processed user: ${user.name}, ${user.age} years old`)
})

// Asynchronous Callbacks
console.log("\n--- Asynchronous Callbacks ---")

// setTimeout is a common example of asynchronous callback
function delayedGreeting(name) {
  setTimeout(() => {
    console.log(`Delayed greeting: Hello, ${name}!`)
  }, 1000)

  console.log("Greeting will appear after delay")
}

delayedGreeting("Eve")

// Event-based callbacks (simulated DOM event)
function simulateButtonClick() {
  console.log("Button element created")

  // Simulate a button click after 1.5 seconds
  setTimeout(() => {
    console.log("Button clicked")
    // This is where the event callback would be called
    handleButtonClick()
  }, 1500)
}

function handleButtonClick() {
  console.log("Button click handled")
}

simulateButtonClick()

// Callback Hell
console.log("\n--- Callback Hell ---")

// Nested callbacks can lead to "callback hell" or "pyramid of doom"
function getUserData(userId, callback) {
  console.log(`Fetching user data for user ${userId}...`)

  // Simulate API call
  setTimeout(() => {
    const user = {
      id: userId,
      name: "Frank",
      email: "frank@example.com",
    }

    console.log("User data received")
    callback(null, user)
  }, 1000)
}

function getUserPosts(userId, callback) {
  console.log(`Fetching posts for user ${userId}...`)

  // Simulate API call
  setTimeout(() => {
    const posts = [
      { id: 1, title: "First Post" },
      { id: 2, title: "Second Post" },
    ]

    console.log("Posts received")
    callback(null, posts)
  }, 1000)
}

function getPostComments(postId, callback) {
  console.log(`Fetching comments for post ${postId}...`)

  // Simulate API call
  setTimeout(() => {
    const comments = [
      { id: 1, text: "Great post!" },
      { id: 2, text: "I learned a lot" },
    ]

    console.log("Comments received")
    callback(null, comments)
  }, 1000)
}

// Callback hell example
function fetchUserDataAndPosts() {
  getUserData(123, (error, user) => {
    if (error) {
      console.error("Error fetching user:", error)
      return
    }

    getUserPosts(user.id, (error, posts) => {
      if (error) {
        console.error("Error fetching posts:", error)
        return
      }

      getPostComments(posts[0].id, (error, comments) => {
        if (error) {
          console.error("Error fetching comments:", error)
          return
        }

        // Finally we have all the data
        console.log("All data received:")
        console.log("User:", user.name)
        console.log("First post:", posts[0].title)
        console.log("First comment:", comments[0].text)
      })
    })
  })
}

// Uncomment to run the callback hell example
// fetchUserDataAndPosts();

// Error Handling with Callbacks
console.log("\n--- Error Handling with Callbacks ---")

function fetchData(shouldSucceed, callback) {
  setTimeout(() => {
    if (shouldSucceed) {
      callback(null, "Data successfully fetched")
    } else {
      callback(new Error("Failed to fetch data"), null)
    }
  }, 1000)
}

// Success case
fetchData(true, (error, data) => {
  if (error) {
    console.error("Error:", error.message)
    return
  }

  console.log("Success:", data)
})

// Error case
fetchData(false, (error, data) => {
  if (error) {
    console.error("Error:", error.message)
    return
  }

  console.log("Success:", data)
})

// Callback Patterns
console.log("\n--- Callback Patterns ---")

// 1. Error-first callbacks (Node.js style)
function readFile(path, callback) {
  setTimeout(() => {
    if (path.endsWith(".txt")) {
      callback(null, "File content goes here")
    } else {
      callback(new Error("Invalid file format"), null)
    }
  }, 1000)
}

readFile("document.txt", (error, content) => {
  if (error) {
    console.error("Error reading file:", error.message)
    return
  }

  console.log("File content:", content)
})

// 2. Using named functions to avoid deep nesting
function handleUserData(error, user) {
  if (error) {
    console.error("Error fetching user:", error)
    return
  }

  console.log("User data:", user)
  getUserPosts(user.id, handleUserPosts)
}

function handleUserPosts(error, posts) {
  if (error) {
    console.error("Error fetching posts:", error)
    return
  }

  console.log("Posts:", posts)
  getPostComments(posts[0].id, handlePostComments)
}

function handlePostComments(error, comments) {
  if (error) {
    console.error("Error fetching comments:", error)
    return
  }

  console.log("Comments:", comments)
}

// This is more readable than the nested version
// getUserData(123, handleUserData);

// 3. Parallel execution with callbacks
function fetchMultipleData() {
  let completedRequests = 0
  const results = {
    users: null,
    posts: null,
    comments: null,
  }

  function checkAllComplete() {
    if (completedRequests === 3) {
      console.log("All data fetched in parallel:", results)
    }
  }

  // Fetch users
  setTimeout(() => {
    results.users = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ]
    completedRequests++
    checkAllComplete()
  }, 1000)

  // Fetch posts
  setTimeout(() => {
    results.posts = [
      { id: 1, title: "Post 1" },
      { id: 2, title: "Post 2" },
    ]
    completedRequests++
    checkAllComplete()
  }, 1500)

  // Fetch comments
  setTimeout(() => {
    results.comments = [
      { id: 1, text: "Comment 1" },
      { id: 2, text: "Comment 2" },
    ]
    completedRequests++
    checkAllComplete()
  }, 2000)
}

// Uncomment to run the parallel execution example
// fetchMultipleData();

// Best Practices
console.log("\n--- Best Practices ---")

// 1. Always handle errors
function bestPractice1(callback) {
  // Always check for errors
  if (!callback || typeof callback !== "function") {
    throw new Error("Callback must be a function")
  }

  // Always provide error as first parameter
  setTimeout(() => {
    callback(null, "Success")
  }, 100)
}

// 2. Keep callbacks small and focused
function processOrder(order, callback) {
  // Validate order
  if (!order.id) {
    callback(new Error("Order ID is required"))
    return
  }

  // Process order
  console.log(`Processing order ${order.id}`)
  callback(null, { status: "success", orderId: order.id })
}

// 3. Use meaningful names
function fetchUserProfile(userId, onSuccess, onError) {
  if (!userId) {
    onError(new Error("User ID is required"))
    return
  }

  // Fetch user profile
  setTimeout(() => {
    const user = { id: userId, name: "Grace" }
    onSuccess(user)
  }, 100)
}

// 4. Consider using libraries or modern alternatives (Promises, async/await)
console.log("Modern alternatives to callbacks are covered in the next files")

// Conclusion
console.log("\n--- Conclusion ---")
console.log("Callbacks are fundamental to asynchronous JavaScript")
console.log("However, they can lead to callback hell with complex nested operations")
console.log("Modern alternatives like Promises and async/await provide better solutions")
