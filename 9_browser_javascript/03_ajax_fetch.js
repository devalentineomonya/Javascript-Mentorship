/*
 * AJAX and Fetch API
 *
 * AJAX (Asynchronous JavaScript and XML) allows web pages to be updated asynchronously
 * by exchanging data with a server behind the scenes, without reloading the entire page.
 *
 * The Fetch API provides a modern interface for making HTTP requests, replacing the older
 * XMLHttpRequest.
 */

// Traditional AJAX with XMLHttpRequest
console.log("=== XMLHttpRequest ===")

function makeXHRRequest() {
  const xhr = new XMLHttpRequest()

  // Configure the request
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true)

  // Set up event handlers
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("XHR Success:", JSON.parse(xhr.responseText))
    } else {
      console.error("XHR Error:", xhr.statusText)
    }
  }

  xhr.onerror = () => {
    console.error("Network Error")
  }

  // Send the request
  xhr.send()
}

// Uncomment to run:
// makeXHRRequest();

// Modern approach: Fetch API
console.log("\n=== Fetch API ===")

function makeFetchRequest() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return response.json() // Parse JSON response
    })
    .then((data) => {
      console.log("Fetch Success:", data)
    })
    .catch((error) => {
      console.error("Fetch Error:", error)
    })
}

// Uncomment to run:
// makeFetchRequest();

// Fetch with async/await
console.log("\n=== Fetch with Async/Await ===")

async function fetchWithAsyncAwait() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    console.log("Async/Await Fetch Success:", data)
  } catch (error) {
    console.error("Async/Await Fetch Error:", error)
  }
}

// Uncomment to run:
// fetchWithAsyncAwait();

// POST request with Fetch
console.log("\n=== POST Request with Fetch ===")

function postData() {
  const newPost = {
    title: "New Post Title",
    body: "This is the content of the new post.",
    userId: 1,
  }

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Post created:", data)
    })
    .catch((error) => {
      console.error("Error creating post:", error)
    })
}

// Uncomment to run:
// postData();

// Handling different response types
console.log("\n=== Handling Different Response Types ===")

function handleDifferentResponses() {
  // For JSON response
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => console.log("JSON response:", data))

  // For text response
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.text())
    .then((text) => console.log("Text response:", text))

  // For blob response (e.g., for images)
  // fetch('https://example.com/image.jpg')
  //     .then(response => response.blob())
  //     .then(blob => {
  //         const imageUrl = URL.createObjectURL(blob);
  //         console.log('Blob URL:', imageUrl);
  //     });
}

// Uncomment to run:
// handleDifferentResponses();

// Fetch with timeout
console.log("\n=== Fetch with Timeout ===")

function fetchWithTimeout(url, options = {}, timeout = 5000) {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) => setTimeout(() => reject(new Error("Request timed out")), timeout)),
  ])
}

// Uncomment to run:
// fetchWithTimeout('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())
//     .then(data => console.log('Fetch with timeout success:', data))
//     .catch(error => console.error('Fetch with timeout error:', error));

// Aborting fetch requests
console.log("\n=== Aborting Fetch Requests ===")

function abortableFetch() {
  const controller = new AbortController()
  const signal = controller.signal

  fetch("https://jsonplaceholder.typicode.com/posts", { signal })
    .then((response) => response.json())
    .then((data) => console.log("Fetch completed:", data))
    .catch((error) => {
      if (error.name === "AbortError") {
        console.log("Fetch was aborted")
      } else {
        console.error("Fetch error:", error)
      }
    })

  // Abort the fetch after 2 seconds
  setTimeout(() => {
    controller.abort()
    console.log("Fetch aborted after 2 seconds")
  }, 2000)
}

// Uncomment to run:
// abortableFetch();

// CORS (Cross-Origin Resource Sharing)
console.log("\n=== CORS ===")
/*
 * CORS is a security feature implemented by browsers that restricts web pages from making
 * requests to a different domain than the one that served the original page.
 *
 * When making cross-origin requests:
 * 1. The browser adds an Origin header to the request
 * 2. The server must include appropriate CORS headers in its response
 * 3. If the server doesn't allow the origin, the browser blocks the response
 *
 * Common CORS headers:
 * - Access-Control-Allow-Origin: specifies which origins can access the resource
 * - Access-Control-Allow-Methods: specifies the allowed HTTP methods
 * - Access-Control-Allow-Headers: specifies which headers can be used
 */

// Example of a CORS request (may fail if the server doesn't allow it)
// fetch('https://api.example.com/data', {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     mode: 'cors' // 'cors', 'no-cors', 'same-origin', 'navigate'
// })
// .then(response => response.json())
// .then(data => console.log('CORS request successful:', data))
// .catch(error => console.error('CORS error:', error));

// Best practices
console.log("\n=== Best Practices ===")
/*
 * 1. Always handle errors properly
 * 2. Use try/catch with async/await
 * 3. Consider implementing timeouts for requests
 * 4. Use appropriate request modes and credentials
 * 5. Cache responses when appropriate
 * 6. Be mindful of CORS restrictions
 * 7. Use AbortController to cancel requests when needed
 */
