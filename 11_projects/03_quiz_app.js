/*
 * Project: Quiz Application
 *
 * This project demonstrates how to build an interactive quiz application
 * that presents questions, tracks scores, and provides feedback. It covers
 * state management, event handling, and DOM manipulation.
 */

// In a browser environment, this would be wrapped in a DOMContentLoaded event listener
// document.addEventListener('DOMContentLoaded', function() {
//     // Initialize the application
//     initQuizApp();
// });

/*
 * Quiz Data
 * Contains the questions, options, and correct answers
 */
const quizData = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    correctAnswer: "JavaScript",
  },
  {
    question: "What does CSS stand for?",
    options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
    correctAnswer: "Cascading Style Sheets",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hypertext Markdown Language",
      "Hyperloop Machine Language",
      "Helicopters Terminals Motorboats Lamborginis",
    ],
    correctAnswer: "Hypertext Markup Language",
  },
  {
    question: "What year was JavaScript launched?",
    options: ["1996", "1995", "1994", "None of the above"],
    correctAnswer: "1995",
  },
  {
    question: "Which of these is NOT a JavaScript framework?",
    options: ["React", "Angular", "Vue", "Java Spring"],
    correctAnswer: "Java Spring",
  },
]

/*
 * Quiz Model
 * Manages the quiz state and logic
 */
class QuizModel {
  constructor(quizData) {
    this.quizData = quizData
    this.currentQuestionIndex = 0
    this.score = 0
    this.userAnswers = []
  }

  getCurrentQuestion() {
    return this.quizData[this.currentQuestionIndex]
  }

  submitAnswer(answer) {
    const currentQuestion = this.getCurrentQuestion()
    const isCorrect = answer === currentQuestion.correctAnswer

    this.userAnswers.push({
      question: currentQuestion.question,
      userAnswer: answer,
      correctAnswer: currentQuestion.correctAnswer,
      isCorrect,
    })

    if (isCorrect) {
      this.score++
    }

    return isCorrect
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.quizData.length - 1) {
      this.currentQuestionIndex++
      return true
    }
    return false
  }

  isLastQuestion() {
    return this.currentQuestionIndex === this.quizData.length - 1
  }

  getScore() {
    return {
      score: this.score,
      total: this.quizData.length,
      percentage: Math.round((this.score / this.quizData.length) * 100),
    }
  }

  getUserAnswers() {
    return this.userAnswers
  }

  reset() {
    this.currentQuestionIndex = 0
    this.score = 0
    this.userAnswers = []
  }
}

/*
 * Quiz UI
 * Handles the user interface and DOM interactions
 */
class QuizUI {
  constructor(quizModel) {
    this.quizModel = quizModel

    // DOM Elements
    this.quizContainer = document.getElementById("quiz-container")
    this.questionElement = document.getElementById("question")
    this.optionsContainer = document.getElementById("options-container")
    this.nextButton = document.getElementById("next-button")
    this.resultContainer = document.getElementById("result-container")
    this.scoreElement = document.getElementById("score")
    this.answersContainer = document.getElementById("answers-container")
    this.restartButton = document.getElementById("restart-button")
    this.progressBar = document.getElementById("progress-bar")
    this.progressText = document.getElementById("progress-text")

    // Event Listeners
    this.nextButton.addEventListener("click", this.handleNextQuestion.bind(this))
    this.restartButton.addEventListener("click", this.restartQuiz.bind(this))

    // Initialize the quiz
    this.loadQuestion()
  }

  loadQuestion() {
    const currentQuestion = this.quizModel.getCurrentQuestion()
    const currentIndex = this.quizModel.currentQuestionIndex
    const totalQuestions = this.quizModel.quizData.length

    // Update question text
    this.questionElement.textContent = currentQuestion.question

    // Clear previous options
    this.optionsContainer.innerHTML = ""

    // Create option elements
    currentQuestion.options.forEach((option) => {
      const optionElement = document.createElement("div")
      optionElement.className = "option"
      optionElement.textContent = option
      optionElement.addEventListener("click", () => this.selectOption(optionElement, option))
      this.optionsContainer.appendChild(optionElement)
    })

    // Update progress
    this.updateProgress(currentIndex, totalQuestions)

    // Disable next button until an option is selected
    this.nextButton.disabled = true

    // Update button text for last question
    if (this.quizModel.isLastQuestion()) {
      this.nextButton.textContent = "Finish Quiz"
    } else {
      this.nextButton.textContent = "Next Question"
    }
  }

  selectOption(optionElement, answer) {
    // Remove previous selections
    const options = this.optionsContainer.querySelectorAll(".option")
    options.forEach((option) => {
      option.classList.remove("selected", "correct", "incorrect")
    })

    // Mark selected option
    optionElement.classList.add("selected")

    // Check if answer is correct
    const isCorrect = this.quizModel.submitAnswer(answer)

    // Show feedback
    if (isCorrect) {
      optionElement.classList.add("correct")
    } else {
      optionElement.classList.add("incorrect")
      // Highlight correct answer
      options.forEach((option) => {
        if (option.textContent === this.quizModel.getCurrentQuestion().correctAnswer) {
          option.classList.add("correct")
        }
      })
    }

    // Disable all options after selection
    options.forEach((option) => {
      option.style.pointerEvents = "none"
    })

    // Enable next button
    this.nextButton.disabled = false
  }

  handleNextQuestion() {
    const hasNextQuestion = this.quizModel.nextQuestion()

    if (hasNextQuestion) {
      this.loadQuestion()
    } else {
      this.showResults()
    }
  }

  showResults() {
    // Hide quiz container
    this.quizContainer.style.display = "none"

    // Show result container
    this.resultContainer.style.display = "block"

    // Display score
    const scoreData = this.quizModel.getScore()
    this.scoreElement.textContent = `You scored ${scoreData.score} out of ${scoreData.total} (${scoreData.percentage}%)`

    // Display answers
    this.displayAnswers()
  }

  displayAnswers() {
    // Clear previous answers
    this.answersContainer.innerHTML = ""

    // Get user answers
    const userAnswers = this.quizModel.getUserAnswers()

    // Create answer elements
    userAnswers.forEach((answer, index) => {
      const answerElement = document.createElement("div")
      answerElement.className = `answer ${answer.isCorrect ? "correct" : "incorrect"}`

      answerElement.innerHTML = `
                <div class="answer-question">${index + 1}. ${answer.question}</div>
                <div class="answer-result">
                    <div>Your answer: <span class="${
                      answer.isCorrect ? "correct-text" : "incorrect-text"
                    }">${answer.userAnswer}</span></div>
                    ${
                      !answer.isCorrect
                        ? `<div>Correct answer: <span class="correct-text">${answer.correctAnswer}</span></div>`
                        : ""
                    }
                </div>
            `

      this.answersContainer.appendChild(answerElement)
    })
  }

  updateProgress(current, total) {
    const percentage = ((current + 1) / total) * 100
    this.progressBar.style.width = `${percentage}%`
    this.progressText.textContent = `Question ${current + 1} of ${total}`
  }

  restartQuiz() {
    // Reset quiz model
    this.quizModel.reset()

    // Hide result container
    this.resultContainer.style.display = "none"

    // Show quiz container
    this.quizContainer.style.display = "block"

    // Load first question
    this.loadQuestion()
  }
}

/*
 * Initialize the Quiz App
 */
function initQuizApp() {
  const quizModel = new QuizModel(quizData)
  const quizUI = new QuizUI(quizModel)
}

// HTML Structure for reference:
/*
The HTML structure is not part of the JavaScript file and should be in a separate HTML file.
*/
