/*
 * Browser JavaScript Exercises
 */

// Exercise 1: DOM Manipulation
console.log("=== Exercise 1: DOM Manipulation ===")
/*
 * Create a function that:
 * 1. Creates a new div element
 * 2. Sets its text content to "Hello, DOM!"
 * 3. Adds a "highlight" class to it
 * 4. Appends it to the body
 *
 * Then create another function that removes this element when called.
 */

// Solution:
function addElement() {
  // In a browser environment, you would do:
  // const newDiv = document.createElement('div');
  // newDiv.textContent = 'Hello, DOM!';
  // newDiv.classList.add('highlight');
  // newDiv.id = 'dynamic-element';
  // document.body.appendChild(newDiv);
  console.log("Created a new div with text 'Hello, DOM!' and class 'highlight'")
}

function removeElement() {
  // In a browser environment, you would do:
  // const element = document.getElementById('dynamic-element');
  // if (element) {
  //     element.remove();
  // }
  console.log("Removed the div with id 'dynamic-element'")
}

// Exercise 2: Event Handling
console.log("\n=== Exercise 2: Event Handling ===")
/*
 * Create a function that:
 * 1. Adds click event listeners to all buttons on a page
 * 2. When a button is clicked, it should change its text to "Clicked!"
 * 3. After 2 seconds, it should revert to its original text
 */

// Solution:
function setupButtonListeners() {
  // In a browser environment, you would do:
  // const buttons = document.querySelectorAll('button');
  //
  // buttons.forEach(button => {
  //     const originalText = button.textContent;
  //
  //     button.addEventListener('click', function() {
  //         button.textContent = 'Clicked!';
  //
  //         setTimeout(() => {
  //             button.textContent = originalText;
  //         }, 2000);
  //     });
  // });
  console.log("Set up click listeners for all buttons")
}

// Exercise 3: Fetch API
console.log("\n=== Exercise 3: Fetch API ===")
/*
 * Create a function that:
 * 1. Fetches data from 'https://jsonplaceholder.typicode.com/users'
 * 2. Creates a list of user names and emails
 * 3. Displays them in a list on the page
 * 4. Handles any potential errors
 */

// Solution:
async function fetchAndDisplayUsers() {
  try {
    // Fetch the data
    const response = await fetch("https://jsonplaceholder.typicode.com/users")

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const users = await response.json()

    // In a browser environment, you would do:
    // const userList = document.createElement('ul');
    //
    // users.forEach(user => {
    //     const listItem = document.createElement('li');
    //     listItem.textContent = `${user.name} (${user.email})`;
    //     userList.appendChild(listItem);
    // });
    //
    // // Clear any existing list
    // const container = document.getElementById('user-container');
    // container.innerHTML = '';
    // container.appendChild(userList);

    // For this exercise, we'll just log the users
    console.log("Fetched users:")
    users.forEach((user) => {
      console.log(`- ${user.name} (${user.email})`)
    })
  } catch (error) {
    console.error("Error fetching users:", error)

    // In a browser environment, you would do:
    // const container = document.getElementById('user-container');
    // container.innerHTML = `<p class="error">Error loading users: ${error.message}</p>`;
  }
}

// Uncomment to run:
// fetchAndDisplayUsers();

// Exercise 4: Form Validation
console.log("\n=== Exercise 4: Form Validation ===")
/*
 * Create a function that validates a form with the following requirements:
 * 1. Email must be in a valid format
 * 2. Password must be at least 8 characters
 * 3. Password confirmation must match the password
 * 4. Display appropriate error messages for invalid fields
 */

// Solution:
function validateForm(email, password, confirmPassword) {
  const errors = {}

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    errors.email = "Please enter a valid email address"
  }

  // Validate password
  if (password.length < 8) {
    errors.password = "Password must be at least 8 characters"
  }

  // Validate password confirmation
  if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords do not match"
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

// Test the validation
const validationResult = validateForm("test@example.com", "password123", "password123")
console.log("Form is valid:", validationResult.isValid)
console.log("Validation errors:", validationResult.errors)

const invalidResult = validateForm("invalid-email", "short", "different")
console.log("Form is valid:", invalidResult.isValid)
console.log("Validation errors:", invalidResult.errors)

// Exercise 5: Local Storage
console.log("\n=== Exercise 5: Local Storage ===")
/*
 * Create functions to:
 * 1. Save a user's preferences (theme, language) to localStorage
 * 2. Load these preferences when the page loads
 * 3. Clear all preferences
 */

// Solution:
function savePreferences(preferences) {
  // In a browser environment, you would do:
  // localStorage.setItem('userPreferences', JSON.stringify(preferences));
  console.log("Saved preferences:", preferences)
}

function loadPreferences() {
  // In a browser environment, you would do:
  // const preferences = localStorage.getItem('userPreferences');
  // return preferences ? JSON.parse(preferences) : null;
  console.log("Loaded preferences from localStorage")
  return { theme: "dark", language: "en" } // Simulated return value
}

function clearPreferences() {
  // In a browser environment, you would do:
  // localStorage.removeItem('userPreferences');
  console.log("Cleared preferences from localStorage")
}

// Test the functions
const userPrefs = { theme: "dark", language: "en" }
savePreferences(userPrefs)
const loadedPrefs = loadPreferences()
console.log("Loaded preferences:", loadedPrefs)
clearPreferences()
