/*
 * JavaScript in the Browser: DOM Manipulation
 *
 * This file introduces the Document Object Model (DOM) and how to manipulate it with JavaScript.
 * Note: This code is meant to be run in a browser environment, not Node.js.
 */

// The Document Object Model (DOM)
// ===============================
// The DOM is a programming interface for HTML and XML documents.
// It represents the page so that programs can change the document structure, style, and content.

// Accessing DOM Elements
// =====================

// 1. By ID
// --------
// document.getElementById('elementId')
console.log("--- Accessing Elements by ID ---")
// Example:
// const header = document.getElementById('header');
// console.log(header);

// 2. By Class Name
// --------------
// document.getElementsByClassName('className')
console.log("\n--- Accessing Elements by Class Name ---")
// Example:
// const items = document.getElementsByClassName('item');
// console.log(items); // HTMLCollection
// console.log(items.length);
// console.log(items[0]);

// 3. By Tag Name
// ------------
// document.getElementsByTagName('tagName')
console.log("\n--- Accessing Elements by Tag Name ---")
// Example:
// const paragraphs = document.getElementsByTagName('p');
// console.log(paragraphs); // HTMLCollection
// console.log(paragraphs.length);

// 4. Query Selector (returns the first matching element)
// ---------------------------------------------------
// document.querySelector('selector')
console.log("\n--- Accessing Elements with Query Selector ---")
// Example:
// const firstButton = document.querySelector('button');
// const specificButton = document.querySelector('#submit-button');
// const firstItemWithClass = document.querySelector('.item');
// console.log(firstButton);

// 5. Query Selector All (returns all matching elements)
// --------------------------------------------------
// document.querySelectorAll('selector')
console.log("\n--- Accessing Elements with Query Selector All ---")
// Example:
// const allButtons = document.querySelectorAll('button');
// console.log(allButtons); // NodeList
// console.log(allButtons.length);
// allButtons.forEach(button => console.log(button));

// Manipulating DOM Elements
// ========================

// 1. Changing Text Content
// ----------------------
console.log("\n--- Changing Text Content ---")
// Example:
// const paragraph = document.querySelector('p');
// console.log('Original text:', paragraph.textContent);
// paragraph.textContent = 'This text has been changed';
// console.log('New text:', paragraph.textContent);

// 2. Changing HTML Content
// ----------------------
console.log("\n--- Changing HTML Content ---")
// Example:
// const container = document.querySelector('.container');
// console.log('Original HTML:', container.innerHTML);
// container.innerHTML = '<h2>New Content</h2><p>This is new HTML content</p>';
// console.log('New HTML:', container.innerHTML);

// 3. Changing Attributes
// -------------------
console.log("\n--- Changing Attributes ---")
// Example:
// const link = document.querySelector('a');
// console.log('Original href:', link.getAttribute('href'));
// link.setAttribute('href', 'https://www.example.com');
// link.setAttribute('target', '_blank');
// console.log('New href:', link.getAttribute('href'));

// 4. Changing Styles
// ---------------
console.log("\n--- Changing Styles ---")
// Example:
// const element = document.querySelector('.highlight');
// console.log('Original color:', element.style.color);
// element.style.color = 'red';
// element.style.backgroundColor = 'yellow';
// element.style.padding = '10px';
// element.style.borderRadius = '5px';
// console.log('New color:', element.style.color);

// 5. Adding and Removing Classes
// ---------------------------
console.log("\n--- Adding and Removing Classes ---")
// Example:
// const box = document.querySelector('.box');
// console.log('Original classes:', box.className);
// box.classList.add('highlight');
// console.log('After adding class:', box.className);
// box.classList.remove('box');
// console.log('After removing class:', box.className);
// box.classList.toggle('visible');
// console.log('After toggling class:', box.className);
// console.log('Has highlight class:', box.classList.contains('highlight'));

// Creating and Removing Elements
// ============================

// 1. Creating Elements
// -----------------
console.log("\n--- Creating Elements ---")
// Example:
// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'This is a new paragraph created with JavaScript';
// newParagraph.classList.add('dynamic');
// console.log(newParagraph);

// 2. Appending Elements
// ------------------
console.log("\n--- Appending Elements ---")
// Example:
// const container = document.querySelector('.container');
// container.appendChild(newParagraph);
// console.log('Container after append:', container.innerHTML);

// 3. Inserting Elements at Specific Positions
// ----------------------------------------
console.log("\n--- Inserting Elements at Specific Positions ---")
// Example:
// const list = document.querySelector('ul');
// const newItem = document.createElement('li');
// newItem.textContent = 'New Item';
// const secondItem = list.children[1];
// list.insertBefore(newItem, secondItem);
// console.log('List after insert:', list.innerHTML);

// Modern methods:
// parent.append(...nodes) - appends nodes or strings at the end
// parent.prepend(...nodes) - inserts nodes or strings at the beginning
// node.before(...nodes) - inserts nodes or strings before node
// node.after(...nodes) - inserts nodes or strings after node
// node.replaceWith(...nodes) - replaces node with the given nodes or strings

// 4. Removing Elements
// -----------------
console.log("\n--- Removing Elements ---")
// Example:
// const elementToRemove = document.querySelector('.remove-me');
// elementToRemove.remove();
// console.log('Element removed');

// Older method:
// const child = document.querySelector('.child');
// const parent = child.parentNode;
// parent.removeChild(child);

// Traversing the DOM
// =================

// 1. Parent Nodes
// ------------
console.log("\n--- Parent Nodes ---")
// Example:
// const child = document.querySelector('.child');
// const parent = child.parentNode; // or child.parentElement
// console.log('Parent node:', parent);

// 2. Child Nodes
// -----------
console.log("\n--- Child Nodes ---")
// Example:
// const parent = document.querySelector('.parent');
// const children = parent.childNodes; // includes text nodes, comments, etc.
// console.log('Child nodes:', children);
// const elementChildren = parent.children; // only element nodes
// console.log('Element children:', elementChildren);
// console.log('First child:', parent.firstChild); // might be a text node
// console.log('First element child:', parent.firstElementChild);  // might be a text node
// console.log('First element child:', parent.firstElementChild);
// console.log('Last child:', parent.lastChild);
// console.log('Last element child:', parent.lastElementChild);

// 3. Sibling Nodes
// -------------
console.log("\n--- Sibling Nodes ---")
// Example:
// const middle = document.querySelector('.middle');
// console.log('Previous sibling:', middle.previousSibling); // might be a text node
// console.log('Previous element sibling:', middle.previousElementSibling);
// console.log('Next sibling:', middle.nextSibling); // might be a text node
// console.log('Next element sibling:', middle.nextElementSibling);

// DOM Manipulation Best Practices
// =============================

// 1. Minimize DOM Access
// -------------------
console.log("\n--- Minimizing DOM Access ---")
// Bad practice:
// for (let i = 0; i < 100; i++) {
//   document.getElementById('result').innerHTML += i + ', ';
// }

// Good practice:
// let result = '';
// for (let i = 0; i < 100; i++) {
//   result += i + ', ';
// }
// document.getElementById('result').innerHTML = result;

// 2. Use Document Fragments for Multiple Insertions
// ----------------------------------------------
console.log("\n--- Using Document Fragments ---")
// Example:
// const fragment = document.createDocumentFragment();
// for (let i = 0; i < 10; i++) {
//   const li = document.createElement('li');
//   li.textContent = `Item ${i}`;
//   fragment.appendChild(li);
// }
// document.querySelector('ul').appendChild(fragment);

// 3. Use Event Delegation
// --------------------
// (Covered in the events.js file)

// 4. Batch DOM Updates
// -----------------
console.log("\n--- Batching DOM Updates ---")
// Example:
// // Instead of multiple style changes:
// const element = document.getElementById('element');
// element.style.color = 'red';
// element.style.backgroundColor = 'black';
// element.style.fontSize = '20px';

// // Use a CSS class:
// element.classList.add('highlighted');

// 5. Cache DOM References
// --------------------
console.log("\n--- Caching DOM References ---")
// Bad practice:
// function updateHeader() {
//   document.getElementById('header').textContent = 'Updated';
// }

// Good practice:
// const header = document.getElementById('header');
// function updateHeader() {
//   header.textContent = 'Updated';
// }

// Modern DOM APIs
// =============

// 1. dataset (data-* attributes)
// ---------------------------
console.log("\n--- Using dataset ---")
// Example:
// <div id="user" data-id="123" data-user="john" data-date-of-birth="1990-10-05">John Doe</div>
// const user = document.getElementById('user');
// console.log('User ID:', user.dataset.id);
// console.log('Username:', user.dataset.user);
// console.log('Date of Birth:', user.dataset.dateOfBirth);
// user.dataset.role = 'admin';
// console.log('Updated data attributes:', user.outerHTML);

// 2. Element.closest()
// -----------------
console.log("\n--- Using Element.closest() ---")
// Example:
// const button = document.querySelector('.submit-button');
// const form = button.closest('form');
// console.log('Closest form:', form);

// 3. Element.matches()
// -----------------
console.log("\n--- Using Element.matches() ---")
// Example:
// const element = document.querySelector('.item');
// console.log('Matches .active:', element.matches('.active'));
// console.log('Matches .item:', element.matches('.item'));

// 4. Element.getBoundingClientRect()
// -------------------------------
console.log("\n--- Using getBoundingClientRect() ---")
// Example:
// const element = document.querySelector('.box');
// const rect = element.getBoundingClientRect();
// console.log('Element position and size:', rect);
// console.log('Top:', rect.top);
// console.log('Left:', rect.left);
// console.log('Width:', rect.width);
// console.log('Height:', rect.height);

// Cross-Browser Compatibility
// =========================
console.log("\n--- Cross-Browser Compatibility ---")
// Modern browsers have good compatibility for DOM methods
// For older browsers, you might need polyfills or libraries

// Performance Considerations
// ========================
console.log("\n--- Performance Considerations ---")
// 1. Reflows and repaints are expensive
// 2. Batch DOM manipulations
// 3. Use document fragments
// 4. Modify detached DOM nodes
// 5. Use requestAnimationFrame for animations

// Conclusion
// =========
console.log("\n--- Conclusion ---")
console.log("DOM manipulation is a core skill for front-end development")
console.log("Modern DOM APIs make manipulation easier and more efficient")
console.log("Always consider performance when working with the DOM")

// Note: To see this code in action, you would need to run it in a browser
// with appropriate HTML elements to manipulate.
