const apiKey = 'Yd2cf99801c78f017d19ae418742ee7e1';
const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('btn');
const weatherInfo = document.getElementById('weather-info'); 
searchButton.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city === '') {
    alert('Please enter a city name.');
    return;
  }
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Yd2cf99801c78f017d19ae418742ee7e1}`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const weatherDescription = data.weather[0].description;
      const mainTemperature = data.main.temp;
      const windSpeed = data.wind.speed;
      weatherInfo.innerHTML = `
        <p>Weather: ${weatherDescription}</p>
        <p>Main Temperature: ${mainTemperature} K</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
      `;
    })
    .catch(error => {
      console.error('Error:', error.message);
      alert('An error occurred while fetching the weather data. Please try again.');
    });
});