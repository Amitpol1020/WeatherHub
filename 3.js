function getWeather() {
    const location = document.getElementById('location');
    const weather = document.getElementById('weather');

    const Key = '902f311f7959e84e66c5f6a5aeac4ada';

    const Url = `https://api.openweathermap.org/data/2.5/weather?q=${location.value}&appid=${Key}`;

    fetch(Url)
        .then(response => response.json())
        .then(data => {
            const temperature = Math.round(data.main.temp - 273.15);
            const description = data.weather[0].description;
	    const humidity = data.main.humidity;
            
            weather.innerHTML = `<p><strong>Temperature: ${temperature}°C</strong></p>
                                 <p><strong>Description: ${description}</strong></p>
				 <p><strong>Humidity : ${humidity}%</strong></p>`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weather.innerHTML = '<p>Failed to fetch weather data. Please try again.</p>';
        });
}

