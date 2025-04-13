/*
 * Project: Todo List Application
 *
 * This project demonstrates how to build a simple todo list application
 * using vanilla JavaScript. It covers DOM manipulation, event handling,
 * local storage, and basic CRUD operations.
 */

// In a browser environment, this would be wrapped in a DOMContentLoaded event listener
// document.addEventListener('DOMContentLoaded', function() {
//     // Initialize the application
//     initTodoApp();
// });

/*
 * Todo Item  function() {
//     // Initialize the application
//     initTodoApp();
// });

/*
 * Todo Item
 * Represents a single todo item with properties and methods
 */
class TodoItem {
  constructor(id, title, completed = false) {
    this.id = id
    this.title = title
    this.completed = completed
    this.createdAt = new Date()
  }

  toggle() {
    this.completed = !this.completed
  }
}

/*
 * Todo List
 * Manages the collection of todo items and provides CRUD operations
 */
class TodoList {
  constructor() {
    this.todos = []
    this.loadFromLocalStorage()
  }

  addTodo(title) {
    const id = Date.now().toString()
    const todo = new TodoItem(id, title)
    this.todos.push(todo)
    this.saveToLocalStorage()
    return todo
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id)
    this.saveToLocalStorage()
  }

  toggleTodo(id) {
    const todo = this.todos.find((todo) => todo.id === id)
    if (todo) {
      todo.toggle()
      this.saveToLocalStorage()
    }
  }

  clearCompleted() {
    this.todos = this.todos.filter((todo) => !todo.completed)
    this.saveToLocalStorage()
  }

  saveToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  loadFromLocalStorage() {
    const storedTodos = localStorage.getItem("todos")
    if (storedTodos) {
      const parsedTodos = JSON.parse(storedTodos)
      this.todos = parsedTodos.map((todo) => {
        const newTodo = new TodoItem(todo.id, todo.title, todo.completed)
        newTodo.createdAt = new Date(todo.createdAt)
        return newTodo
      })
    }
  }
}

/*
 * UI Controller
 * Handles the user interface and DOM interactions
 */
class TodoUI {
  constructor(todoList) {
    this.todoList = todoList

    // DOM Elements
    this.todoForm = document.getElementById("todo-form")
    this.todoInput = document.getElementById("todo-input")
    this.todoList = document.getElementById("todo-list")
    this.clearCompletedBtn = document.getElementById("clear-completed")
    this.todoCount = document.getElementById("todo-count")
    this.filterAll = document.getElementById("filter-all")
    this.filterActive = document.getElementById("filter-active")
    this.filterCompleted = document.getElementById("filter-completed")

    // Event Listeners
    this.todoForm.addEventListener("submit", this.handleAddTodo.bind(this))
    this.todoList.addEventListener("click", this.handleTodoClick.bind(this))
    this.clearCompletedBtn.addEventListener("click", this.handleClearCompleted.bind(this))
    this.filterAll.addEventListener("click", () => this.filterTodos("all"))
    this.filterActive.addEventListener("click", () => this.filterTodos("active"))
    this.filterCompleted.addEventListener("click", () => this.filterTodos("completed"))

    // Initial render
    this.renderTodos()
  }

  handleAddTodo(e) {
    e.preventDefault()
    const title = this.todoInput.value.trim()

    if (title) {
      this.todoList.addTodo(title)
      this.todoInput.value = ""
      this.renderTodos()
    }
  }

  handleTodoClick(e) {
    const todoItem = e.target.closest(".todo-item")

    if (!todoItem) return

    const id = todoItem.dataset.id

    if (e.target.classList.contains("todo-checkbox")) {
      this.todoList.toggleTodo(id)
      this.renderTodos()
    } else if (e.target.classList.contains("todo-delete")) {
      this.todoList.removeTodo(id)
      this.renderTodos()
    }
  }

  handleClearCompleted() {
    this.todoList.clearCompleted()
    this.renderTodos()
  }

  filterTodos(filter) {
    this.currentFilter = filter

    // Update active filter
    this.filterAll.classList.remove("active")
    this.filterActive.classList.remove("active")
    this.filterCompleted.classList.remove("active")

    if (filter === "all") this.filterAll.classList.add("active")
    if (filter === "active") this.filterActive.classList.add("active")
    if (filter === "completed") this.filterCompleted.classList.add("active")

    this.renderTodos()
  }

  renderTodos() {
    // Clear the list
    this.todoList.innerHTML = ""

    // Filter todos based on current filter
    let filteredTodos = this.todoList.todos

    if (this.currentFilter === "active") {
      filteredTodos = filteredTodos.filter((todo) => !todo.completed)
    } else if (this.currentFilter === "completed") {
      filteredTodos = filteredTodos.filter((todo) => todo.completed)
    }

    // Render each todo
    filteredTodos.forEach((todo) => {
      const todoEl = document.createElement("li")
      todoEl.className = "todo-item"
      todoEl.dataset.id = todo.id

      todoEl.innerHTML = `
                <input type="checkbox" class="todo-checkbox" ${todo.completed ? "checked" : ""}>
                <span class="todo-title ${todo.completed ? "completed" : ""}">${todo.title}</span>
                <button class="todo-delete">×</button>
            `

      this.todoList.appendChild(todoEl)
    })

    // Update todo count
    const activeTodos = this.todoList.todos.filter((todo) => !todo.completed).length
    this.todoCount.textContent = `${activeTodos} item${activeTodos !== 1 ? "s" : ""} left`
  }
}

/*
 * Initialize the Todo App
 */
function initTodoApp() {
  const todoList = new TodoList()
  const todoUI = new TodoUI(todoList)
}

// HTML Structure for reference:
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo App</title>
    <style>
        /* CSS styles would go here */
</style>
</head>
<body>
    <div
class="todo-app">
        <h1>Todo List</h1>
        
        <form id="todo-form">
            <input type="text" id="todo-input" placeholder="What needs to be done?">
        </form>
        
        <ul id="todo-list"></ul>
        
        <div class="todo-footer">
            <span id="todo-count">0 items left</span>
            
            <div class="filters">
                <button id="filter-all" class="active">All</button>
                <button id="filter-active">Active</button>
                <button id="filter-completed">Completed</button>
            </div>
            
            <button id="clear-completed">Clear completed</button>
        </div>
    </div>
    
    <script src="todo-app.js"></script>
</body>
</html>
*/
