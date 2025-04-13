/*
 * JavaScript Design Patterns
 *
 * Design patterns are reusable solutions to common problems in software design.
 * They provide templates for solving specific issues and make code more maintainable.
 */

// Creational Patterns
console.log("=== Creational Patterns ===")
/*
 * Creational patterns deal with object creation mechanisms, trying to create objects
 * in a manner suitable to the situation.
 */

// 1. Constructor Pattern
console.log("\n--- Constructor Pattern ---")
function Person(name, age) {
  this.name = name
  this.age = age

  this.sayHello = function () {
    return `Hello, my name is ${this.name}`
  }
}

const john = new Person("John", 30)
console.log(john.sayHello()) // Hello, my name is John

// 2. Factory Pattern
console.log("\n--- Factory Pattern ---")
const userFactory = {
  createUser: (type, userData) => {
    let user

    if (type === "admin") {
      user = new AdminUser(userData)
    } else if (type === "regular") {
      user = new RegularUser(userData)
    } else {
      user = new GuestUser()
    }

    return user
  },
}

function AdminUser(data) {
  this.name = data.name
  this.permissions = ["read", "write", "delete"]
  this.role = "admin"
}

function RegularUser(data) {
  this.name = data.name
  this.permissions = ["read", "write"]
  this.role = "regular"
}

function GuestUser() {
  this.name = "Guest"
  this.permissions = ["read"]
  this.role = "guest"
}

const admin = userFactory.createUser("admin", { name: "Admin User" })
console.log(admin.role, admin.permissions) // admin ['read', 'write', 'delete']

// 3. Singleton Pattern
console.log("\n--- Singleton Pattern ---")
const Database = (() => {
  let instance

  function createInstance() {
    return {
      data: [],
      add: function (item) {
        this.data.push(item)
      },
      get: function (id) {
        return this.data.find((item) => item.id === id)
      },
    }
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance()
      }
      return instance
    },
  }
})()

const db1 = Database.getInstance()
const db2 = Database.getInstance()

db1.add({ id: 1, name: "Item 1" })
console.log(db2.get(1)) // { id: 1, name: 'Item 1' }
console.log(db1 === db2) // true - same instance

// 4. Module Pattern
console.log("\n--- Module Pattern ---")
const calculatorModule = (() => {
  // Private variables and functions
  let result = 0

  function add(a, b) {
    return a + b
  }

  function subtract(a, b) {
    return a - b
  }

  // Public API
  return {
    add: (a, b) => {
      result = add(a, b)
      return result
    },
    subtract: (a, b) => {
      result = subtract(a, b)
      return result
    },
    getResult: () => result,
  }
})()

console.log(calculatorModule.add(5, 3)) // 8
console.log(calculatorModule.subtract(10, 4)) // 6
console.log(calculatorModule.getResult()) // 6

// Structural Patterns
console.log("\n=== Structural Patterns ===")
/*
 * Structural patterns deal with object composition and typically identify simple ways
 * to realize relationships between different objects.
 */

// 1. Adapter Pattern
console.log("\n--- Adapter Pattern ---")
// Old API
function OldCalculator() {
  this.operations = (term1, term2, operation) => {
    switch (operation) {
      case "add":
        return term1 + term2
      case "sub":
        return term1 - term2
      default:
        return Number.NaN
    }
  }
}

// New API
function NewCalculator() {
  this.add = (term1, term2) => term1 + term2
  this.sub = (term1, term2) => term1 - term2
}

// Adapter
function CalculatorAdapter() {
  const newCalc = new NewCalculator()

  this.operations = (term1, term2, operation) => {
    switch (operation) {
      case "add":
        return newCalc.add(term1, term2)
      case "sub":
        return newCalc.sub(term1, term2)
      default:
        return Number.NaN
    }
  }
}

const oldCalc = new OldCalculator()
const newCalc = new NewCalculator()
const adaptedCalc = new CalculatorAdapter()

console.log(oldCalc.operations(10, 5, "add")) // 15
console.log(newCalc.add(10, 5)) // 15
console.log(adaptedCalc.operations(10, 5, "add")) // 15

// 2. Decorator Pattern
console.log("\n--- Decorator Pattern ---")
function Coffee() {
  this.cost = () => 5
  this.description = () => "Basic coffee"
}

// Decorator
function MilkDecorator(coffee) {
  const cost = coffee.cost()
  const description = coffee.description()

  coffee.cost = () => cost + 1.5
  coffee.description = () => description + ", milk"

  return coffee
}

// Decorator
function SugarDecorator(coffee) {
  const cost = coffee.cost()
  const description = coffee.description()

  coffee.cost = () => cost + 0.5
  coffee.description = () => description + ", sugar"

  return coffee
}

let myCoffee = new Coffee()
console.log(myCoffee.description(), "-", myCoffee.cost()) // Basic coffee - 5

myCoffee = MilkDecorator(myCoffee)
console.log(myCoffee.description(), "-", myCoffee.cost()) // Basic coffee, milk - 6.5

myCoffee = SugarDecorator(myCoffee)
console.log(myCoffee.description(), "-", myCoffee.cost()) // Basic coffee, milk, sugar - 7

// 3. Facade Pattern
console.log("\n--- Facade Pattern ---")
// Complex subsystems
const CPU = {
  freeze: () => {
    console.log("CPU: Freezing processor")
  },
  jump: (position) => {
    console.log(`CPU: Jumping to position ${position}`)
  },
  execute: () => {
    console.log("CPU: Executing commands")
  },
}

const Memory = {
  load: (position, data) => {
    console.log(`Memory: Loading ${data} to position ${position}`)
  },
}

const HardDrive = {
  read: (sector, size) => {
    console.log(`HardDrive: Reading ${size} bytes from sector ${sector}`)
    return "data"
  },
}

// Facade
const ComputerFacade = {
  start: () => {
    CPU.freeze()
    Memory.load(0, HardDrive.read(0, 1024))
    CPU.jump(0)
    CPU.execute()
  },
}

// Client code
ComputerFacade.start()

// Behavioral Patterns
console.log("\n=== Behavioral Patterns ===")
/*
 * Behavioral patterns are concerned with algorithms and the assignment of responsibilities
 * between objects.
 */

// 1. Observer Pattern
console.log("\n--- Observer Pattern ---")
function Subject() {
  this.observers = []

  this.subscribe = function (observer) {
    this.observers.push(observer)
  }

  this.unsubscribe = function (observer) {
    this.observers = this.observers.filter((obs) => obs !== observer)
  }

  this.notify = function (data) {
    this.observers.forEach((observer) => observer.update(data))
  }
}

function Observer(name) {
  this.name = name

  this.update = function (data) {
    console.log(`${this.name} received: ${data}`)
  }
}

const subject = new Subject()
const observer1 = new Observer("Observer 1")
const observer2 = new Observer("Observer 2")

subject.subscribe(observer1)
subject.subscribe(observer2)
subject.notify("Hello observers!") // Both observers receive the notification

subject.unsubscribe(observer1)
subject.notify("Hello again!") // Only Observer 2 receives the notification

// 2. Strategy Pattern
console.log("\n--- Strategy Pattern ---")
// Strategies
const strategies = {
  normalTax: (amount) => amount * 0.21,
  reducedTax: (amount) => amount * 0.1,
  noTax: (amount) => 0,
}

// Context
function TaxCalculator(strategy) {
  this.strategy = strategy

  this.setStrategy = function (strategy) {
    this.strategy = strategy
  }

  this.calculate = function (amount) {
    return this.strategy(amount)
  }
}

const calculator = new TaxCalculator(strategies.normalTax)
console.log(calculator.calculate(100)) // 21

calculator.setStrategy(strategies.reducedTax)
console.log(calculator.calculate(100)) // 10

calculator.setStrategy(strategies.noTax)
console.log(calculator.calculate(100)) // 0

// 3. Command Pattern
console.log("\n--- Command Pattern ---")
// Receiver
const light = {
  turnOn: () => {
    console.log("Light is on")
  },
  turnOff: () => {
    console.log("Light is off")
  },
}

// Command objects
function TurnOnCommand(light) {
  this.execute = () => {
    light.turnOn()
  }
}

function TurnOffCommand(light) {
  this.execute = () => {
    light.turnOff()
  }
}

// Invoker
function RemoteControl() {
  this.command = null

  this.setCommand = function (command) {
    this.command = command
  }

  this.pressButton = function () {
    if (this.command) {
      this.command.execute()
    }
  }
}

const remote = new RemoteControl()
const turnOn = new TurnOnCommand(light)
const turnOff = new TurnOffCommand(light)

remote.setCommand(turnOn)
remote.pressButton() // Light is on

remote.setCommand(turnOff)
remote.pressButton() // Light is off

// Modern JavaScript Patterns
console.log("\n=== Modern JavaScript Patterns ===")

// 1. Module Pattern with ES6 Modules
console.log("\n--- ES6 Modules ---")
/*
// math.js
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

// main.js
import { add, subtract } from './math.js';

console.log(add(5, 3));      // 8
console.log(subtract(10, 4)); // 6
*/

// 2. Class-based patterns
console.log("\n--- Class-based Patterns ---")
class Animal {
  constructor(name) {
    this.name = name
  }

  speak() {
    console.log(`${this.name} makes a noise.`)
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`)
  }
}

const dog = new Dog("Rex")
dog.speak() // Rex barks.

// 3. Async patterns with Promises
console.log("\n--- Async Patterns ---")
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating an API call
    setTimeout(() => {
      resolve({ id: 1, name: "Data" })
    }, 1000)
  })
}

// Using Promise chaining
fetchData()
  .then((data) => {
    console.log("Data received:", data)
    return data.id
  })
  .then((id) => {
    console.log("ID:", id)
  })
  .catch((error) => {
    console.error("Error:", error)
  })

// Using async/await
async function processData() {
  try {
    const data = await fetchData()
    console.log("Data received with async/await:", data)
    return data.id
  } catch (error) {
    console.error("Error with async/await:", error)
  }
}

// processData().then(id => console.log('ID with async/await:', id));

// Summary
console.log("\n=== Summary ===")
/*
 * Design patterns provide proven solutions to common problems in software design.
 *
 * Key categories:
 * 1. Creational: Constructor, Factory, Singleton, Module
 * 2. Structural: Adapter, Decorator, Facade
 * 3. Behavioral: Observer, Strategy, Command
 *
 * Modern JavaScript introduces new ways to implement these patterns using:
 * - ES6 classes
 * - ES6 modules
 * - Arrow functions
 * - Promises and async/await
 */
