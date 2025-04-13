/*
 * Advanced JavaScript Exercises
 */

// Exercise 1: Memory Management
console.log("=== Exercise 1: Memory Management ===")
/*
 * Identify and fix the memory leak in the following code:
 */

// Original code with memory leak
function createButtons() {
  const buttons = []
  const body = document.body

  for (let i = 0; i < 10; i++) {
    const button = document.createElement("button")
    button.innerText = `Button ${i}`

    // This creates a closure that holds a reference to the button
    button.addEventListener("click", () => {
      console.log(`Button ${i} clicked`)
      console.log(button)
    })

    buttons.push(button)
    body.appendChild(button)
  }

  // Later, we remove the buttons but the event listeners still hold references
  buttons.forEach((button) => {
    body.removeChild(button)
  })
}

// Fixed version
function createButtonsFixed() {
  const buttons = []
  const body = document.body

  for (let i = 0; i < 10; i++) {
    const button = document.createElement("button")
    button.innerText = `Button ${i}`

    // Store the handler function so we can remove it later
    const clickHandler = () => {
      console.log(`Button ${i} clicked`)
    }

    button.addEventListener("click", clickHandler)
    button.clickHandler = clickHandler // Store reference to the handler

    buttons.push(button)
    body.appendChild(button)
  }

  // Properly remove event listeners before removing buttons
  buttons.forEach((button) => {
    button.removeEventListener("click", button.clickHandler)
    body.removeChild(button)
  })
}

// Exercise 2: Design Patterns
console.log("\n=== Exercise 2: Design Patterns ===")
/*
 * Implement a shopping cart using the Observer pattern:
 * 1. Create a ShoppingCart class that acts as the subject
 * 2. Create observer classes: Logger, TaxCalculator, and ShippingCalculator
 * 3. When items are added or removed from the cart, all observers should be notified
 */

// Solution
class ShoppingCart {
  constructor() {
    this.items = []
    this.observers = []
  }

  addItem(item) {
    this.items.push(item)
    this.notifyObservers("add", item)
  }

  removeItem(itemId) {
    const index = this.items.findIndex((item) => item.id === itemId)
    if (index !== -1) {
      const item = this.items[index]
      this.items.splice(index, 1)
      this.notifyObservers("remove", item)
    }
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0)
  }

  addObserver(observer) {
    this.observers.push(observer)
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer)
    if (index !== -1) {
      this.observers.splice(index, 1)
    }
  }

  notifyObservers(action, item) {
    this.observers.forEach((observer) => {
      observer.update(this, action, item)
    })
  }
}

class Logger {
  update(cart, action, item) {
    if (action === "add") {
      console.log(`Logger: Added ${item.name} to cart. New total: $${cart.getTotal()}`)
    } else if (action === "remove") {
      console.log(`Logger: Removed ${item.name} from cart. New total: $${cart.getTotal()}`)
    }
  }
}

class TaxCalculator {
  constructor(taxRate = 0.1) {
    this.taxRate = taxRate
  }

  update(cart) {
    const tax = cart.getTotal() * this.taxRate
    console.log(`TaxCalculator: Current tax: $${tax.toFixed(2)}`)
  }
}

class ShippingCalculator {
  update(cart) {
    const itemCount = cart.items.length
    let shipping = 0

    if (itemCount > 0) {
      shipping = 5 + (itemCount - 1) * 2
    }

    console.log(`ShippingCalculator: Shipping cost: $${shipping.toFixed(2)}`)
  }
}

// Test the shopping cart
const cart = new ShoppingCart()
const logger = new Logger()
const taxCalculator = new TaxCalculator(0.08)
const shippingCalculator = new ShippingCalculator()

cart.addObserver(logger)
cart.addObserver(taxCalculator)
cart.addObserver(shippingCalculator)

cart.addItem({ id: 1, name: "Book", price: 20 })
cart.addItem({ id: 2, name: "Laptop", price: 1000 })
cart.removeItem(1)

// Exercise 3: Functional Programming
console.log("\n=== Exercise 3: Functional Programming ===")
/*
 * Implement a function pipeline that:
 * 1. Takes an array of user objects with name, age, and purchases properties
 * 2. Filters out users under 18
 * 3. Calculates the total purchases for each user
 * 4. Sorts users by their total purchases (highest first)
 * 5. Returns an array of objects with name and totalPurchases properties
 */

// Sample data
const users = [
  { name: "Alice", age: 25, purchases: [100, 200, 300] },
  { name: "Bob", age: 16, purchases: [50, 100] },
  { name: "Charlie", age: 30, purchases: [200, 50, 100, 150] },
  { name: "David", age: 20, purchases: [500] },
  { name: "Eve", age: 17, purchases: [300, 200, 100] },
]

// Solution using functional programming
function processUsers(users) {
  return users
    .filter((user) => user.age >= 18)
    .map((user) => ({
      name: user.name,
      totalPurchases: user.purchases.reduce((sum, purchase) => sum + purchase, 0),
    }))
    .sort((a, b) => b.totalPurchases - a.totalPurchases)
}

const processedUsers = processUsers(users)
console.log("Processed users:", processedUsers)

// Exercise 4: Advanced Asynchronous Patterns
console.log("\n=== Exercise 4: Advanced Asynchronous Patterns ===")
/*
 * Implement a function that:
 * 1. Fetches data from multiple APIs in parallel
 * 2. Has a timeout mechanism
 * 3. Implements retry logic for failed requests
 * 4. Returns a combined result when all requests succeed
 */

// Mock API functions
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    const shouldSucceed = Math.random() > 0.3
    setTimeout(
      () => {
        if (shouldSucceed) {
          resolve({ id: userId, name: `User ${userId}`, email: `user${userId}@example.com` })
        } else {
          reject(new Error(`Failed to fetch user ${userId}`))
        }
      },
      500 + Math.random() * 1000,
    )
  })
}

function fetchUserPosts(userId) {
  return new Promise((resolve, reject) => {
    const shouldSucceed = Math.random() > 0.3
    setTimeout(
      () => {
        if (shouldSucceed) {
          resolve([
            { id: 1, userId, title: "Post 1" },
            { id: 2, userId, title: "Post 2" },
          ])
        } else {
          reject(new Error(`Failed to fetch posts for user ${userId}`))
        }
      },
      500 + Math.random() * 1000,
    )
  })
}

// Solution
async function fetchWithRetry(fetchFn, maxRetries = 3, delay = 1000) {
  let lastError

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fetchFn()
    } catch (error) {
      console.log(`Attempt ${attempt} failed: ${error.message}`)
      lastError = error

      if (attempt < maxRetries) {
        console.log(`Retrying in ${delay}ms...`)
        await new Promise((resolve) => setTimeout(resolve, delay))
        delay *= 2 // Exponential backoff
      }
    }
  }

  throw lastError
}

async function fetchWithTimeout(fetchFn, timeoutMs = 5000) {
  return Promise.race([
    fetchFn(),
    new Promise((_, reject) => setTimeout(() => reject(new Error("Request timed out")), timeoutMs)),
  ])
}

async function fetchUserInfo(userId) {
  try {
    const [userData, userPosts] = await Promise.all([
      fetchWithRetry(() => fetchWithTimeout(() => fetchUserData(userId))),
      fetchWithRetry(() => fetchWithTimeout(() => fetchUserPosts(userId))),
    ])

    return {
      user: userData,
      posts: userPosts,
    }
  } catch (error) {
    console.error(`Failed to fetch user info: ${error.message}`)
    throw error
  }
}

// Uncomment to test:
// fetchUserInfo(123)
//     .then(result => console.log('User info:', result))
//     .catch(error => console.error('Error:', error));
