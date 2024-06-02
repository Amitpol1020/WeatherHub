function getWeather() {
    const locationInput = document.getElementById('locationInput');
    const weatherInfo = document.getElementById('weatherInfo');

    const apiKey = '902f311f7959e84e66c5f6a5aeac4ada';

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput.value}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = Math.round(data.main.temp - 273.15);
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            
            weatherInfo.innerHTML = `<p><strong>Temperature: ${temperature}°C</strong></p>
                                     <p><strong>Description: ${description}</strong></p>
                                     <p><strong>humidity: ${humudity}%</strong></p>``;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = '<p>Failed to fetch weather data. Please try again.</p>';
        });
}
