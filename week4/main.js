var cityContainer = document.getElementById("city-info");
var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://tth200.github.io/week4/cities1.json');
ourRequest.onload = function() {
var ourData = JSON.parse(ourRequest.responseText);
renderHTML(ourData);
btn.classList.add("hide-me");
};
ourRequest.send();
});
function renderHTML(data){
var htmlString = "";
for (i=0; i<data.length; i++){
htmlString += "<p>" + data[i].name + " is a city in " + data[i].country + ",</br> Where you can enjoy indoor places like: " ;
for (ii = 0; ii < data[i].places.indoor.length; ii++) {
if (ii == 0) {
htmlString += data[i].places.indoor[ii];
} else {
htmlString += ", and " + data[i].places.indoor[ii];
}
}
htmlString += '. & enjoy outdoor places like: ';
for (ii = 0; ii < data[i].places.outdoor.length; ii++) {
if (ii == 0) {
htmlString += data[i].places.outdoor[ii];
} else {
htmlString += " and " + data[i].places.outdoor[ii];
}
}
htmlString += '.</p>';
}
cityContainer.insertAdjacentHTML('beforeend' , htmlString);
}

const apiKey = 'Yd2cf99801c78f017d19ae418742ee7e1';

const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('searchButton');
const weatherInfo = document.getElementById('weatherInfo');

searchButton.addEventListener('click', () => {
  const city = cityInput.value.trim();

  if (city === '') {
    alert('Please enter a city name.');
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${Dubai}&appid=${d2cf99801c78f017d19ae418742ee7e1}`;

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