/*
 * JavaScript Events
 *
 * Events are actions or occurrences that happen in the browser, which can be detected
 * by JavaScript to trigger code execution. Examples include clicks, key presses, form submissions,
 * page loads, and more.
 */

// Basic event handling
console.log("=== Basic Event Handling ===")

// In a browser environment, you would do:
// document.getElementById('myButton').addEventListener('click', function() {
//     console.log('Button was clicked!');
// });

// Event handler with named function
function handleClick() {
  console.log("Button clicked!")
}
// document.getElementById('myButton').addEventListener('click', handleClick);

// Removing event listeners
// document.getElementById('myButton').removeEventListener('click', handleClick);

/*
 * Common Event Types:
 * - click: when an element is clicked
 * - dblclick: when an element is double-clicked
 * - mousedown/mouseup: when mouse button is pressed/released
 * - mouseover/mouseout: when mouse enters/leaves an element
 * - keydown/keyup: when a key is pressed/released
 * - submit: when a form is submitted
 * - load: when a page or resource finishes loading
 * - resize: when the window is resized
 * - scroll: when the user scrolls
 */

// Event object
console.log("\n=== Event Object ===")
// document.getElementById('myButton').addEventListener('click', function(event) {
//     console.log('Event type:', event.type);
//     console.log('Target element:', event.target);
//     console.log('Mouse coordinates:', event.clientX, event.clientY);
//
//     // Prevent default behavior (e.g., for links or form submissions)
//     event.preventDefault();
//
//     // Stop event propagation
//     event.stopPropagation();
// });

// Event propagation: bubbling and capturing
console.log("\n=== Event Propagation ===")
/*
 * Event Bubbling: Events bubble up from the target element to its ancestors
 * Event Capturing: Events are first captured by the outermost element and propagated to the target
 *
 * The third parameter in addEventListener determines the phase:
 * - false (default): bubbling phase
 * - true: capturing phase
 */

// Example of event bubbling
// document.getElementById('child').addEventListener('click', function() {
//     console.log('Child clicked');
// });
//
// document.getElementById('parent').addEventListener('click', function() {
//     console.log('Parent clicked (bubbling)');
// });
//
// // Example of event capturing
// document.getElementById('parent').addEventListener('click', function() {
//     console.log('Parent clicked (capturing)');
// }, true);

// Event delegation
console.log("\n=== Event Delegation ===")
/*
 * Event delegation is a technique where you attach a single event listener to a parent element
 * to handle events for all its children, including those added dynamically.
 */

// Instead of adding event listeners to each button:
// document.getElementById('buttonContainer').addEventListener('click', function(event) {
//     if (event.target.tagName === 'BUTTON') {
//         console.log('Button clicked:', event.target.textContent);
//     }
// });

// Custom events
console.log("\n=== Custom Events ===")
// Creating a custom event
// const customEvent = new CustomEvent('userLogin', {
//     detail: { username: 'john_doe', timestamp: new Date() },
//     bubbles: true,
//     cancelable: true
// });
//
// // Dispatching the custom event
// document.dispatchEvent(customEvent);
//
// // Listening for the custom event
// document.addEventListener('userLogin', function(event) {
//     console.log('User logged in:', event.detail.username);
//     console.log('At:', event.detail.timestamp);
// });

// Best practices for event handling
console.log("\n=== Best Practices ===")
/*
 * 1. Use event delegation for multiple similar elements
 * 2. Remove event listeners when they're no longer needed to prevent memory leaks
 * 3. Debounce or throttle events that fire frequently (like resize, scroll)
 * 4. Keep event handlers small and focused
 * 5. Use custom events to decouple components
 */

// Example of debouncing (simplified)
function debounce(func, delay) {
  let timeout
  return function () {
    
    const args = arguments
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), delay)
  }
}

// Usage:
// const debouncedResize = debounce(function() {
//     console.log('Window resized (debounced)');
// }, 300);
//
// window.addEventListener('resize', debouncedResize);
