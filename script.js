// let tempo = document.getElementById("country");
// let region = document.getElementById("realFeel");
// let cityName = document.getElementById("img1");
// let florImg = document.getElementById("florImg");
// let sunny = document.getElementById("sunny");

// function getWeatherData() {
//     fetch('https://api.weatherapi.com/v1/forecast.json?key=681638dc8ab74942b2885714241210&q=&days=10')
//         .then(response => response.json()) // Parse the JSON response
//         .then(data => {
//             console.log(data);

//             // Update the DOM elements with weather data
//             cityName.src = "https:" + data.current.condition.icon;
//             sunny.src = "https:" + data.current.condition.icon;
//             region.textContent = `${data.current.feelslike_c}°`;
//             florImg.src = "https:" + data.current.condition.icon;
//         })
//         .catch(error => {
//             console.error('Error fetching 10-day forecast:', error);
//         });
// }

// // Call the function to fetch weather data
// getWeatherData();

