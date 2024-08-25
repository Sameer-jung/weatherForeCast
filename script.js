document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = '52afdde3dea64a3db6780716242508'; 

    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Comvert Local time provided by API to Redable format(API bata fetch vara readable format ma change huncha)
            const localTime = new Date(data.location.localtime);

            const weather = `
                <h2>${data.location.name}, ${data.location.country}</h2>
                <p>Date & Time: ${localTime.toLocaleDateString()} ${localTime.toLocaleTimeString()}</p>
                <p>Temperature: ${data.current.temp_c}°C</p>
                <p>Weather: ${data.current.condition.text}</p>
                <p>Humidity: ${data.current.humidity}%</p>
                <p>Wind Speed: ${data.current.wind_kph} kph</p>
            `;
            document.getElementById('result').innerHTML = weather;
        })
        .catch(error => {
            document.getElementById('result').innerHTML = '<p>City not found. Please try again.</p>';
        });
});