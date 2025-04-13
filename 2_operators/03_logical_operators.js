// Logical Operators in JavaScript
// ==============================

// 1. Logical AND (&&)
// ------------------
// Returns the first falsy value or the last value if all are truthy

console.log("true && true:", true && true) // true
console.log("true && false:", true && false) // false
console.log("false && true:", false && true) // false
console.log("false && false:", false && false) // false

// Short-circuit evaluation: if the first operand is falsy,
// the second operand is not evaluated
let x = 10
false && (x = 20) // x remains 10 because the second part is not executed
console.log("x after false && (x = 20):", x)

true && (x = 30) // x becomes 30 because both parts are evaluated
console.log("x after true && (x = 30):", x)

// Using && with non-boolean values
console.log("'Hello' && 'World':", "Hello" && "World") // "World" (both truthy, returns last value)
console.log("'' && 'World':", "" && "World") // "" (first is falsy, returns it)
console.log("'Hello' && 0:", "Hello" && 0) // 0 (second is falsy, returns it)
console.log("'Hello' && null && 'World':", "Hello" && null && "World") // null (first falsy value)

// 2. Logical OR (||)
// -----------------
// Returns the first truthy value or the last value if all are falsy

console.log("true || true:", true || true) // true
console.log("true || false:", true || false) // true
console.log("false || true:", false || true) // true
console.log("false || false:", false || false) // false

// Short-circuit evaluation: if the first operand is truthy,
// the second operand is not evaluated
let y = 10
true || (y = 20) // y remains 10 because the second part is not executed
console.log("y after true || (y = 20):", y)

false || (y = 30) // y becomes 30 because the first part is false
console.log("y after false || (y = 30):", y)

// Using || with non-boolean values
console.log("'Hello' || 'World':", "Hello" || "World") // "Hello" (first is truthy, returns it)
console.log("'' || 'World':", "" || "World") // "World" (first is falsy, tries next)
console.log("'' || 0 || null || 'Last':", "" || 0 || null || "Last") // "Last" (first truthy value)
console.log("'' || 0 || null || undefined:", "" || 0 || null || undefined) // undefined (all falsy, returns last)

// 3. Logical NOT (!)
// ----------------
// Converts the operand to boolean and returns the opposite

console.log("!true:", !true) // false
console.log("!false:", !false) // true

// Double NOT (!!) - converts a value to its boolean equivalent
console.log("!!'Hello':", !!"Hello") // true (truthy value)
console.log("!!'':", !!"") // false (falsy value)
console.log("!!0:", !!0) // false (falsy value)
console.log("!!42:", !!42) // true (truthy value)
console.log("!!null:", !!null) // false (falsy value)
console.log("!!undefined:", !!undefined) // false (falsy value)

// 4. Nullish Coalescing Operator (??) - ES2020
// -----------------------------------------
// Returns the right-hand operand when the left is null or undefined
// (but not other falsy values)

console.log("null ?? 'Default':", null ?? "Default") // "Default"
console.log("undefined ?? 'Default':", undefined ?? "Default") // "Default"
console.log("0 ?? 'Default':", 0 ?? "Default") // 0 (not null or undefined)
console.log("'' ?? 'Default':", "" ?? "Default") // "" (not null or undefined)
console.log("false ?? 'Default':", false ?? "Default") // false (not null or undefined)

// Comparison with ||
console.log("0 || 'Default':", 0 || "Default") // "Default" (0 is falsy)
console.log("'' || 'Default':", "" || "Default") // "Default" ('' is falsy)
console.log("false || 'Default':", false || "Default") // "Default" (false is falsy)

// 5. Optional Chaining Operator (?.) - ES2020
// ----------------------------------------
// Allows reading properties from nested objects without checking if each reference is valid

const user = {
  name: "John",
  address: {
    street: "123 Main St",
  },
}

const emptyUser = {}

// Without optional chaining
// console.log(emptyUser.address.street); // Error: Cannot read property 'street' of undefined

// With optional chaining
console.log("user?.address?.street:", user?.address?.street) // "123 Main St"
console.log("emptyUser?.address?.street:", emptyUser?.address?.street) // undefined (no error)

// Works with function calls too
const userWithMethod = {
  getFullName: () => "John Doe",
}

console.log("userWithMethod.getFullName?.():", userWithMethod.getFullName?.()) // "John Doe"
console.log("emptyUser.getFullName?.():", emptyUser.getFullName?.()) // undefined (no error)
