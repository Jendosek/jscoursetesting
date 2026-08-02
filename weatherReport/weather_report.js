function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = 'cc52a1f622837123f29004b031fdcde7';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const weatherInfo = document.getElementById('weatherInfo');
        
        if (data.cod !== 200) {
            weatherInfo.innerHTML = `<p>Помилка: ${data.message}</p>`;
            return;
        }
        
        weatherInfo.innerHTML = `...`;
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        document.getElementById('weatherInfo').innerHTML = 
            `<p>Не вдалося отримати погоду.</p>`;
    });
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
