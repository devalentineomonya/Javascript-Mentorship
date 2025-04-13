/*
 * Project: Weather Application
 *
 * This project demonstrates how to build a weather application that fetches
 * data from a weather API and displays it to the user. It covers API requests,
 * async/await, error handling, and DOM manipulation.
 */

// In a browser environment, this would be wrapped in a DOMContentLoaded event listener
// document.addEventListener('DOMContentLoaded', function() {
//     // Initialize the application
//     initWeatherApp();
// });

/*
 * Weather Service
 * Handles API requests to fetch weather data
 */
class WeatherService {
  constructor(apiKey) {
    this.apiKey = apiKey
    this.baseUrl = "https://api.openweathermap.org/data/2.5"
  }

  async getWeatherByCity(city) {
    try {
      const response = await fetch(`${this.baseUrl}/weather?q=${city}&units=metric&appid=${this.apiKey}`)

      if (!response.ok) {
        throw new Error(`Weather data not found (${response.status})`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error fetching weather:", error)
      throw error
    }
  }

  async getForecast(city) {
    try {
      const response = await fetch(`${this.baseUrl}/forecast?q=${city}&units=metric&appid=${this.apiKey}`)

      if (!response.ok) {
        throw new Error(`Forecast data not found (${response.status})`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error fetching forecast:", error)
      throw error
    }
  }
}

/*
 * Weather UI
 * Handles the user interface and DOM interactions
 */
class WeatherUI {
  constructor(weatherService) {
    this.weatherService = weatherService

    // DOM Elements
    this.searchForm = document.getElementById("search-form")
    this.cityInput = document.getElementById("city-input")
    this.currentWeather = document.getElementById("current-weather")
    this.forecast = document.getElementById("forecast")
    this.errorContainer = document.getElementById("error-container")

    // Event Listeners
    this.searchForm.addEventListener("submit", this.handleSearch.bind(this))

    // Load last searched city from localStorage
    const lastCity = localStorage.getItem("lastCity")
    if (lastCity) {
      this.cityInput.value = lastCity
      this.fetchWeatherData(lastCity)
    }
  }

  async handleSearch(e) {
    e.preventDefault()
    const city = this.cityInput.value.trim()

    if (city) {
      this.showLoading()
      try {
        await this.fetchWeatherData(city)
        localStorage.setItem("lastCity", city)
      } catch (error) {
        this.showError(error.message)
      } finally {
        this.hideLoading()
      }
    }
  }

  async fetchWeatherData(city) {
    try {
      const [weatherData, forecastData] = await Promise.all([
        this.weatherService.getWeatherByCity(city),
        this.weatherService.getForecast(city),
      ])

      this.renderCurrentWeather(weatherData)
      this.renderForecast(forecastData)
      this.hideError()
    } catch (error) {
      this.showError(`Could not fetch weather for ${city}. Please try again.`)
      throw error
    }
  }

  renderCurrentWeather(data) {
    const temp = Math.round(data.main.temp)
    const feelsLike = Math.round(data.main.feels_like)
    const weatherIcon = data.weather[0].icon
    const weatherDescription = data.weather[0].description
    const humidity = data.main.humidity
    const windSpeed = data.wind.speed

    this.currentWeather.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <div class="weather-main">
                <img src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="${weatherDescription}">
                <div class="temperature">${temp}°C</div>
            </div>
            <div class="weather-description">${weatherDescription}</div>
            <div class="weather-details">
                <div class="detail">
                    <span class="label">Feels like:</span>
                    <span class="value">${feelsLike}°C</span>
                </div>
                <div class="detail">
                    <span class="label">Humidity:</span>
                    <span class="value">${humidity}%</span>
                </div>
                <div class="detail">
                    <span class="label">Wind:</span>
                    <span class="value">${windSpeed} m/s</span>
                </div>
            </div>
        `
  }

  renderForecast(data) {
    // Clear previous forecast
    this.forecast.innerHTML = ""

    // Group forecast by day
    const dailyForecasts = this.groupForecastByDay(data.list)

    // Create forecast elements
    dailyForecasts.forEach((dayForecast) => {
      const date = new Date(dayForecast.dt * 1000)
      const dayName = this.getDayName(date)
      const temp = Math.round(dayForecast.main.temp)
      const weatherIcon = dayForecast.weather[0].icon
      const weatherDescription = dayForecast.weather[0].description

      const forecastEl = document.createElement("div")
      forecastEl.className = "forecast-item"
      forecastEl.innerHTML = `
                <div class="forecast-day">${dayName}</div>
                <img src="https://openweathermap.org/img/wn/${weatherIcon}.png" alt="${weatherDescription}">
                <div class="forecast-temp">${temp}°C</div>
                <div class="forecast-desc">${weatherDescription}</div>
            `

      this.forecast.appendChild(forecastEl)
    })
  }

  groupForecastByDay(forecastList) {
    const dailyForecasts = []
    const days = {}

    forecastList.forEach((forecast) => {
      const date = new Date(forecast.dt * 1000)
      const day = date.toDateString()

      // Take the forecast for midday (closest to 12:00) for each day
      if (!days[day] || Math.abs(date.getHours() - 12) < Math.abs(days[day].getHours() - 12)) {
        days[day] = {
          getHours: () => date.getHours(),
          forecast,
        }
      }
    })

    // Convert to array
    for (const day in days) {
      dailyForecasts.push(days[day].forecast)
    }

    return dailyForecasts
  }

  getDayName(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return days[date.getDay()]
  }

  showLoading() {
    const loadingEl = document.createElement("div")
    loadingEl.id = "loading"
    loadingEl.textContent = "Loading..."
    document.body.appendChild(loadingEl)
  }

  hideLoading() {
    const loadingEl = document.getElementById("loading")
    if (loadingEl) {
      loadingEl.remove()
    }
  }

  showError(message) {
    this.errorContainer.textContent = message
    this.errorContainer.style.display = "block"
  }

  hideError() {
    this.errorContainer.style.display = "none"
  }
}

/*
 * Initialize the Weather App
 */
function initWeatherApp() {
  // Replace 'YOUR_API_KEY' with an actual OpenWeatherMap API key
  const apiKey = "YOUR_API_KEY"
  const weatherService = new WeatherService(apiKey)
  const weatherUI = new WeatherUI(weatherService)
}

// HTML Structure for reference:
/*
The HTML structure is not part of the JavaScript code and should be in a separate HTML file.
*/
