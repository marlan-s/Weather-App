// Mock Weather Data
const weatherData = {
    'san francisco': {
        city: "San Francisco, CA",
        current: {
            temp_f: 72,
            temp_c: 22,
            condition: "Partly Cloudy",
            icon: "⛅",
            humidity: 65,
            wind_mph: 12,
            wind_kph: 19,
            pressure: 1013,
            uv_index: 6,
            visibility_mi: 10,
            visibility_km: 16,
            feels_like_f: 70,
            feels_like_c: 21,
            cloud_cover: 45,
            dew_point_f: 58,
            dew_point_c: 14,
            sunrise: "6:42 AM",
            sunset: "7:28 PM"
        },
        hourly: [
            { time: "12 PM", temp_f: 68, temp_c: 20, icon: "⛅" },
            { time: "1 PM", temp_f: 70, temp_c: 21, icon: "⛅" },
            { time: "2 PM", temp_f: 72, temp_c: 22, icon: "☀️" },
            { time: "3 PM", temp_f: 74, temp_c: 23, icon: "☀️" },
            { time: "4 PM", temp_f: 73, temp_c: 23, icon: "⛅" },
            { time: "5 PM", temp_f: 71, temp_c: 22, icon: "⛅" }
        ],
        forecast: [
            { day: "Monday", high_f: 75, high_c: 24, low_f: 62, low_c: 17, condition: "Partly Cloudy", icon: "⛅" },
            { day: "Tuesday", high_f: 78, high_c: 26, low_f: 64, low_c: 18, condition: "Sunny", icon: "☀️" },
            { day: "Wednesday", high_f: 72, high_c: 22, low_f: 60, low_c: 16, condition: "Cloudy", icon: "☁️" },
            { day: "Thursday", high_f: 68, high_c: 20, low_f: 58, low_c: 14, condition: "Light Rain", icon: "🌧️" },
            { day: "Friday", high_f: 70, high_c: 21, low_f: 59, low_c: 15, condition: "Partly Cloudy", icon: "⛅" }
        ]
    },
    'new york': {
        city: "New York, NY",
        current: {
            temp_f: 68,
            temp_c: 20,
            condition: "Sunny",
            icon: "☀️",
            humidity: 55,
            wind_mph: 8,
            wind_kph: 13,
            pressure: 1015,
            uv_index: 7,
            visibility_mi: 10,
            visibility_km: 16,
            feels_like_f: 68,
            feels_like_c: 20,
            cloud_cover: 10,
            dew_point_f: 52,
            dew_point_c: 11,
            sunrise: "6:15 AM",
            sunset: "7:45 PM"
        },
        hourly: [
            { time: "12 PM", temp_f: 64, temp_c: 18, icon: "☀️" },
            { time: "1 PM", temp_f: 66, temp_c: 19, icon: "☀️" },
            { time: "2 PM", temp_f: 68, temp_c: 20, icon: "☀️" },
            { time: "3 PM", temp_f: 69, temp_c: 21, icon: "☀️" },
            { time: "4 PM", temp_f: 67, temp_c: 19, icon: "☀️" },
            { time: "5 PM", temp_f: 65, temp_c: 18, icon: "⛅" }
        ],
        forecast: [
            { day: "Monday", high_f: 70, high_c: 21, low_f: 58, low_c: 14, condition: "Sunny", icon: "☀️" },
            { day: "Tuesday", high_f: 72, high_c: 22, low_f: 60, low_c: 16, condition: "Partly Cloudy", icon: "⛅" },
            { day: "Wednesday", high_f: 68, high_c: 20, low_f: 56, low_c: 13, condition: "Cloudy", icon: "☁️" },
            { day: "Thursday", high_f: 65, high_c: 18, low_f: 54, low_c: 12, condition: "Light Rain", icon: "🌧️" },
            { day: "Friday", high_f: 69, high_c: 21, low_f: 57, low_c: 14, condition: "Sunny", icon: "☀️" }
        ]
    },
    'london': {
        city: "London, UK",
        current: {
            temp_f: 59,
            temp_c: 15,
            condition: "Rainy",
            icon: "🌧️",
            humidity: 85,
            wind_mph: 15,
            wind_kph: 24,
            pressure: 1008,
            uv_index: 2,
            visibility_mi: 6,
            visibility_km: 10,
            feels_like_f: 56,
            feels_like_c: 13,
            cloud_cover: 95,
            dew_point_f: 54,
            dew_point_c: 12,
            sunrise: "5:48 AM",
            sunset: "8:12 PM"
        },
        hourly: [
            { time: "12 PM", temp_f: 57, temp_c: 14, icon: "🌧️" },
            { time: "1 PM", temp_f: 58, temp_c: 14, icon: "🌧️" },
            { time: "2 PM", temp_f: 59, temp_c: 15, icon: "🌧️" },
            { time: "3 PM", temp_f: 59, temp_c: 15, icon: "☁️" },
            { time: "4 PM", temp_f: 58, temp_c: 14, icon: "☁️" },
            { time: "5 PM", temp_f: 57, temp_c: 14, icon: "☁️" }
        ],
        forecast: [
            { day: "Monday", high_f: 61, high_c: 16, low_f: 52, low_c: 11, condition: "Rainy", icon: "🌧️" },
            { day: "Tuesday", high_f: 58, high_c: 14, low_f: 50, low_c: 10, condition: "Cloudy", icon: "☁️" },
            { day: "Wednesday", high_f: 60, high_c: 16, low_f: 51, low_c: 11, condition: "Partly Cloudy", icon: "⛅" },
            { day: "Thursday", high_f: 62, high_c: 17, low_f: 53, low_c: 12, condition: "Light Rain", icon: "🌧️" },
            { day: "Friday", high_f: 59, high_c: 15, low_f: 51, low_c: 11, condition: "Rainy", icon: "🌧️" }
        ]
    },
    'tokyo': {
        city: "Tokyo, Japan",
        current: {
            temp_f: 75,
            temp_c: 24,
            condition: "Cloudy",
            icon: "☁️",
            humidity: 70,
            wind_mph: 10,
            wind_kph: 16,
            pressure: 1011,
            uv_index: 5,
            visibility_mi: 9,
            visibility_km: 14,
            feels_like_f: 75,
            feels_like_c: 24,
            cloud_cover: 80,
            dew_point_f: 64,
            dew_point_c: 18,
            sunrise: "5:30 AM",
            sunset: "6:50 PM"
        },
        hourly: [
            { time: "12 PM", temp_f: 72, temp_c: 22, icon: "☁️" },
            { time: "1 PM", temp_f: 73, temp_c: 23, icon: "☁️" },
            { time: "2 PM", temp_f: 75, temp_c: 24, icon: "☁️" },
            { time: "3 PM", temp_f: 76, temp_c: 24, icon: "⛅" },
            { time: "4 PM", temp_f: 74, temp_c: 23, icon: "⛅" },
            { time: "5 PM", temp_f: 72, temp_c: 22, icon: "☁️" }
        ],
        forecast: [
            { day: "Monday", high_f: 77, high_c: 25, low_f: 68, low_c: 20, condition: "Cloudy", icon: "☁️" },
            { day: "Tuesday", high_f: 79, high_c: 26, low_f: 70, low_c: 21, condition: "Partly Cloudy", icon: "⛅" },
            { day: "Wednesday", high_f: 76, high_c: 24, low_f: 67, low_c: 19, condition: "Sunny", icon: "☀️" },
            { day: "Thursday", high_f: 74, high_c: 23, low_f: 66, low_c: 19, condition: "Cloudy", icon: "☁️" },
            { day: "Friday", high_f: 75, high_c: 24, low_f: 68, low_c: 20, condition: "Light Rain", icon: "🌧️" }
        ]
    },
    'paris': {
        city: "Paris, France",
        current: {
            temp_f: 64,
            temp_c: 18,
            condition: "Light Rain",
            icon: "🌧️",
            humidity: 78,
            wind_mph: 14,
            wind_kph: 23,
            pressure: 1010,
            uv_index: 3,
            visibility_mi: 7,
            visibility_km: 11,
            feels_like_f: 62,
            feels_like_c: 17,
            cloud_cover: 85,
            dew_point_f: 57,
            dew_point_c: 14,
            sunrise: "6:20 AM",
            sunset: "8:35 PM"
        },
        hourly: [
            { time: "12 PM", temp_f: 62, temp_c: 17, icon: "🌧️" },
            { time: "1 PM", temp_f: 63, temp_c: 17, icon: "🌧️" },
            { time: "2 PM", temp_f: 64, temp_c: 18, icon: "🌧️" },
            { time: "3 PM", temp_f: 65, temp_c: 18, icon: "☁️" },
            { time: "4 PM", temp_f: 64, temp_c: 18, icon: "☁️" },
            { time: "5 PM", temp_f: 62, temp_c: 17, icon: "☁️" }
        ],
        forecast: [
            { day: "Monday", high_f: 66, high_c: 19, low_f: 56, low_c: 13, condition: "Light Rain", icon: "🌧️" },
            { day: "Tuesday", high_f: 68, high_c: 20, low_f: 58, low_c: 14, condition: "Cloudy", icon: "☁️" },
            { day: "Wednesday", high_f: 70, high_c: 21, low_f: 59, low_c: 15, condition: "Partly Cloudy", icon: "⛅" },
            { day: "Thursday", high_f: 67, high_c: 19, low_f: 57, low_c: 14, condition: "Rainy", icon: "🌧️" },
            { day: "Friday", high_f: 65, high_c: 18, low_f: 56, low_c: 13, condition: "Cloudy", icon: "☁️" }
        ]
    }
};

// Weather backgrounds
const weatherBackgrounds = {
    'Sunny': 'linear-gradient(135deg, #FDB99B 0%, #FCE77D 100%)',
    'Partly Cloudy': 'linear-gradient(135deg, #A8EDEA 0%, #FED6E3 100%)',
    'Cloudy': 'linear-gradient(135deg, #C9D6FF 0%, #E2E2E2 100%)',
    'Rainy': 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
    'Light Rain': 'linear-gradient(135deg, #89F7FE 0%, #66A6FF 100%)',
    'Thunderstorm': 'linear-gradient(135deg, #434343 0%, #000000 100%)',
    'Snowy': 'linear-gradient(135deg, #E6DADA 0%, #274046 100%)',
    'Foggy': 'linear-gradient(135deg, #D7D2CC 0%, #304352 100%)'
};

// State Management
let currentCity = 'san francisco';
let currentUnit = 'fahrenheit';
let savedLocations = [
    { city: 'San Francisco', key: 'san francisco' },
    { city: 'New York', key: 'new york' },
    { city: 'London', key: 'london' }
];

// Initialize App
function initApp() {
    setupNavigation();
    setupSearch();
    setupThemeToggle();
    setupUnitToggle();
    setupTemperatureRadio();
    setupLocationToggle();
    updateWeatherDisplay();
    renderSavedLocations();
}

// Navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link, .bottom-nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            navigateToPage(page);
        });
    });
}

function navigateToPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(`${pageId}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Update active nav links
    document.querySelectorAll('.nav-link, .bottom-nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageId) {
            link.classList.add('active');
        }
    });
    
    // Update page-specific data
    if (pageId === 'forecast') {
        renderForecast();
    } else if (pageId === 'details') {
        renderDetails();
    }
}

// Search Functionality
function setupSearch() {
    const searchInput = document.getElementById('city-search');
    const searchBtn = document.getElementById('search-btn');
    
    searchBtn.addEventListener('click', () => {
        performSearch();
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

function performSearch() {
    const searchInput = document.getElementById('city-search');
    const cityName = searchInput.value.trim().toLowerCase();
    
    if (cityName && weatherData[cityName]) {
        currentCity = cityName;
        updateWeatherDisplay();
        searchInput.value = '';
        
        // Show loading animation
        const weatherHero = document.getElementById('weather-hero');
        weatherHero.style.opacity = '0.5';
        setTimeout(() => {
            weatherHero.style.opacity = '1';
        }, 300);
    } else if (cityName) {
        alert('City not found. Try: San Francisco, New York, London, Tokyo, or Paris');
    }
}

// Weather Display Updates
function updateWeatherDisplay() {
    const data = weatherData[currentCity];
    if (!data) return;
    
    const isCelsius = currentUnit === 'celsius';
    
    // Update home page
    document.getElementById('city-name').textContent = data.city;
    document.getElementById('main-temp').textContent = isCelsius ? `${data.current.temp_c}°` : `${data.current.temp_f}°`;
    document.getElementById('weather-icon-large').textContent = data.current.icon;
    document.getElementById('condition-text').textContent = data.current.condition;
    document.getElementById('humidity').textContent = `${data.current.humidity}%`;
    document.getElementById('wind-speed').textContent = isCelsius ? `${data.current.wind_kph} km/h` : `${data.current.wind_mph} mph`;
    
    // Update background
    const weatherHero = document.getElementById('weather-hero');
    weatherHero.style.background = weatherBackgrounds[data.current.condition] || weatherBackgrounds['Partly Cloudy'];
}

// Unit Toggle
function setupUnitToggle() {
    const unitToggle = document.getElementById('unit-toggle');
    
    unitToggle.addEventListener('click', () => {
        currentUnit = currentUnit === 'fahrenheit' ? 'celsius' : 'fahrenheit';
        unitToggle.textContent = currentUnit === 'fahrenheit' ? '°F' : '°C';
        updateWeatherDisplay();
        renderForecast();
        renderDetails();
    });
}

function setupTemperatureRadio() {
    const radioInputs = document.querySelectorAll('input[name="temp-unit"]');
    
    radioInputs.forEach(radio => {
        radio.addEventListener('change', (e) => {
            currentUnit = e.target.value;
            document.getElementById('unit-toggle').textContent = currentUnit === 'fahrenheit' ? '°F' : '°C';
            updateWeatherDisplay();
            renderForecast();
            renderDetails();
        });
    });
}

// Forecast Rendering
function renderForecast() {
    const data = weatherData[currentCity];
    if (!data) return;
    
    const isCelsius = currentUnit === 'celsius';
    
    // 5-Day Forecast
    const forecastContainer = document.getElementById('five-day-forecast');
    forecastContainer.innerHTML = data.forecast.map(day => `
        <div class="forecast-card">
            <div class="forecast-day">${day.day}</div>
            <div class="forecast-icon">${day.icon}</div>
            <div class="forecast-temp">
                ${isCelsius ? `${day.high_c}° / ${day.low_c}°` : `${day.high_f}° / ${day.low_f}°`}
            </div>
            <div class="forecast-condition">${day.condition}</div>
        </div>
    `).join('');
    
    // Hourly Forecast
    const hourlyContainer = document.getElementById('hourly-forecast');
    hourlyContainer.innerHTML = data.hourly.map(hour => `
        <div class="hourly-card">
            <div class="hourly-time">${hour.time}</div>
            <div class="hourly-icon">${hour.icon}</div>
            <div class="hourly-temp">${isCelsius ? `${hour.temp_c}°` : `${hour.temp_f}°`}</div>
        </div>
    `).join('');
}

// Details Rendering
function renderDetails() {
    const data = weatherData[currentCity];
    if (!data) return;
    
    const isCelsius = currentUnit === 'celsius';
    
    document.getElementById('feels-like').textContent = isCelsius ? `${data.current.feels_like_c}°C` : `${data.current.feels_like_f}°F`;
    document.getElementById('pressure').textContent = `${data.current.pressure} hPa`;
    document.getElementById('uv-index').textContent = data.current.uv_index;
    document.getElementById('sunrise').textContent = data.current.sunrise;
    document.getElementById('sunset').textContent = data.current.sunset;
    document.getElementById('visibility').textContent = isCelsius ? `${data.current.visibility_km} km` : `${data.current.visibility_mi} mi`;
    document.getElementById('cloud-cover').textContent = `${data.current.cloud_cover}%`;
    document.getElementById('cloud-progress').style.width = `${data.current.cloud_cover}%`;
    document.getElementById('dew-point').textContent = isCelsius ? `${data.current.dew_point_c}°C` : `${data.current.dew_point_f}°F`;
    
    // UV Index Badge
    const uvBadge = document.getElementById('uv-badge');
    const uvIndex = data.current.uv_index;
    if (uvIndex <= 2) {
        uvBadge.textContent = 'Low';
        uvBadge.style.backgroundColor = '#2ECC71';
    } else if (uvIndex <= 5) {
        uvBadge.textContent = 'Moderate';
        uvBadge.style.backgroundColor = '#F39C12';
    } else if (uvIndex <= 7) {
        uvBadge.textContent = 'High';
        uvBadge.style.backgroundColor = '#E67E22';
    } else {
        uvBadge.textContent = 'Very High';
        uvBadge.style.backgroundColor = '#E74C3C';
    }
}

// Theme Toggle
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    
    themeToggle.addEventListener('change', (e) => {
        const theme = e.target.checked ? 'dark' : 'light';
        document.body.setAttribute('data-theme', theme);
    });
}

// Location Toggle
function setupLocationToggle() {
    const locationToggle = document.getElementById('location-toggle');
    
    locationToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            console.log('Auto-detect location enabled');
        } else {
            console.log('Auto-detect location disabled');
        }
    });
}

// Saved Locations
function renderSavedLocations() {
    const container = document.getElementById('saved-locations');
    const isCelsius = currentUnit === 'celsius';
    
    container.innerHTML = savedLocations.map((location, index) => {
        const data = weatherData[location.key];
        const temp = isCelsius ? `${data.current.temp_c}°C` : `${data.current.temp_f}°F`;
        
        return `
            <div class="location-item" data-city="${location.key}">
                <div>
                    <div class="location-name">${location.city}</div>
                    <div class="location-temp">${temp}</div>
                </div>
                <button class="btn-remove" data-index="${index}">Remove</button>
            </div>
        `;
    }).join('');
    
    // Add click handlers
    container.querySelectorAll('.location-item').forEach(item => {
        item.addEventListener('click', (e) => {
            if (!e.target.classList.contains('btn-remove')) {
                currentCity = item.dataset.city;
                updateWeatherDisplay();
                navigateToPage('home');
            }
        });
    });
    
    // Add remove handlers
    container.querySelectorAll('.btn-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const index = parseInt(btn.dataset.index);
            savedLocations.splice(index, 1);
            renderSavedLocations();
        });
    });
}

// Add Location Button
document.getElementById('add-location-btn').addEventListener('click', () => {
    const cityName = prompt('Enter city name (San Francisco, New York, London, Tokyo, Paris):');
    if (cityName) {
        const cityKey = cityName.toLowerCase();
        if (weatherData[cityKey] && !savedLocations.find(loc => loc.key === cityKey)) {
            savedLocations.push({
                city: weatherData[cityKey].city.split(',')[0],
                key: cityKey
            });
            renderSavedLocations();
        } else {
            alert('City not found or already added');
        }
    }
});

// Initialize the app when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}