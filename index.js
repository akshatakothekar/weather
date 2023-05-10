const inputBox = document.getElementById("inputbox");
const apiKey = '48ce2ae7df8cf8c933ab70d58a604ad4';


function show1() {
    if (inputBox.value.trim() === "") {
      alert("Please enter a city name.");
    } else {
      const city = inputBox.value;
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
          const temperature = data.main.temp;
          const weatherDescription = data.weather[0].description;
          const helloElement = document.getElementById("hello");
          helloElement.innerHTML = `The temperature in ${city} is ${temperature} Kelvin, with ${weatherDescription}`;
        })
        .catch(error => console.log(error));
    }
  }
  
  function show2() {
    if (inputBox.value.trim() === "") {
        alert("Please enter a city name.");
    } else {
        const city = inputBox.value;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                const temperature = data.main.temp - 273.15; // convert from Kelvin to Celsius
                const weatherDescription = data.weather[0].description;
                const helloElement = document.getElementById("hello");
                helloElement.innerHTML = `The temperature in ${city} is ${temperature.toFixed(1)} Celsius, with ${weatherDescription}`;
            })
            .catch(error => console.log(error));
    }
}
    function cut() {
        document.getElementById("hello").innerHTML = " ";
      }

