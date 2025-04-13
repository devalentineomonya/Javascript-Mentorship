/*
 * Exercises: Scope and Closures
 *
 * This file contains exercises to practice your understanding of scope and closures in JavaScript.
 */

// Exercise 1: Fix the scope issues in the following code
// The goal is to make the counter increment each time the button is clicked
function exercise1() {
  // Original code with scope issues
  /*
  function setupCounter() {
    var count = 0;
    
    function displayCount() {
      console.log(count);
    }
    
    var button = document.createElement('button');
    button.textContent = 'Increment';
    button.addEventListener('click', function() {
      count = count + 1;
      displayCount();
    });
    
    document.body.appendChild(button);
  }
  */

  // Your solution here
  function setupCounter() {
    let count = 0

    function displayCount() {
      console.log(count)
    }

    const button = document.createElement("button")
    button.textContent = "Increment"
    button.addEventListener("click", () => {
      count = count + 1
      displayCount()
    })

    document.body.appendChild(button)

    // Initial display
    displayCount()
  }

  // Uncomment to test
  // setupCounter();
}

// Exercise 2: Create a function factory using closures
function exercise2() {
  // Create a function that generates greeting functions
  function createGreeter(greeting) {
    return (name) => `${greeting}, ${name}!`
  }

  // Test your solution
  const greetHello = createGreeter("Hello")
  const greetHi = createGreeter("Hi")

  console.log(greetHello("Alice")) // Should output: "Hello, Alice!"
  console.log(greetHi("Bob")) // Should output: "Hi, Bob!"
}

// Exercise 3: Create a private counter using closures
function exercise3() {
  // Create a counter object with increment, decrement, and value methods
  // The count variable should not be directly accessible from outside
  function createCounter(initialValue = 0) {
    let count = initialValue

    return {
      increment: () => {
        count++
        return count
      },
      decrement: () => {
        count--
        return count
      },
      value: () => count,
    }
  }

  // Test your solution
  const counter = createCounter(5)
  console.log(counter.value()) // Should output: 5
  console.log(counter.increment()) // Should output: 6
  console.log(counter.increment()) // Should output: 7
  console.log(counter.decrement()) // Should output: 6

  // This should not work if your implementation is correct:
  console.log(counter.count) // Should output: undefined
}

// Exercise 4: Implement a memoization function using closures
function exercise4() {
  // Create a function that caches the results of another function
  function memoize(fn) {
    const cache = {}

    return (...args) => {
      const key = JSON.stringify(args)

      if (key in cache) {
        console.log("Fetching from cache")
        return cache[key]
      } else {
        console.log("Calculating result")
        const result = fn(...args)
        cache[key] = result
        return result
      }
    }
  }

  // Test with a function that calculates fibonacci numbers
  function fibonacci(n) {
    if (n <= 1) return n
    return fibonacci(n - 1) + fibonacci(n - 2)
  }

  const memoizedFibonacci = memoize((n) => {
    if (n <= 1) return n
    return memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2)
  })

  // Test your solution
  console.time("Regular")
  console.log(fibonacci(20))
  console.timeEnd("Regular")

  console.time("Memoized")
  console.log(memoizedFibonacci(20))
  console.timeEnd("Memoized")

  // Call again to see the caching in action
  console.time("Memoized again")
  console.log(memoizedFibonacci(20))
  console.timeEnd("Memoized again")
}

// Run the exercises
// exercise1();
// exercise2();
// exercise3();
// exercise4();
