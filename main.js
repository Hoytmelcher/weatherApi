const resultContainer = document.getElementById('results')

async function weatherApi(cityName) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
    const data = await response.json()
    
    let farenheitLow = ((data.main.temp_min-273.15)*1.8)+32
    let farenheitHigh = ((data.main.temp_max-273.15)*1.8)+32
    let farenheitCurrent = ((data.main.temp-273.15)*1.8)+32

    
    resultContainer.innerHTML = `

            <div class="weather">
                <h2>City: ${data.name}</h2><br><br>
                <h3>Current Temp: ${Math.round(farenheitCurrent)}℉</h3><br>
                <h4>Conditions: ${data.weather[0].main}</h4><br>
                <h4>High: ${Math.round(farenheitHigh)}℉</h4><br>
                <h4>Low: ${Math.round(farenheitLow)}℉</h4><br>
                <h4>Humidity: ${data.main.humidity}%</h4><br>
            </div>

    `
}

// console.log(weatherApi('austin'))

const inputForm = document.getElementById('search')

inputForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const userInput = inputForm.querySelector('#citySearch')
    weatherApi(userInput.value)
    userInput.value = ''
})

