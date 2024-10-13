let inp = document.getElementById("input");
let button = document.getElementById("button");
let name = document.getElementById("name");
let temprature = document.getElementById("temprature");
let florImg = document.getElementById("florImg");
let date = document.getElementById("date")
// Timing Selection Start Here
// 1
let time = document.getElementById("time");
let img1 = document.getElementById("img1");
let firstTemp = document.getElementById("first_temp");
// 2
let time2 = document.getElementById("time2");
let img2 = document.getElementById("img2");
let secTemp = document.getElementById("sectemp");
// 3
let time3 = document.getElementById("time3");
let img3 = document.getElementById("img3");
let thrdTemp = document.getElementById("thrdtemp");
// 4
let time4 = document.getElementById("time4");
let img4 = document.getElementById("img4");
let fourTemp = document.getElementById("fourtemp");
// 5
let time5 = document.getElementById("time5");
let img5 = document.getElementById("img5");
let fivTemp = document.getElementById("fivtemp");
// 6
let time6 = document.getElementById("time6");
let img6 = document.getElementById("img6");
let sixTemp = document.getElementById("sixtemp");
// condition selc here
let realFeel = document.getElementById("realFeel");
let uvIndex = document.getElementById("uvIndex");
let Wind = document.getElementById("Wind");
let visibility = document.getElementById("visibility");
// 10 days forecast selec here
// day1
let prevImgone = document.getElementById("prevImgone");
let firtxt = document.getElementById("firtxt");
let todTemp = document.getElementById("todTemp");
// day2
let sunimg = document.getElementById("sunimg");
let suntxt = document.getElementById("suntxt");
let sunTemp = document.getElementById("sunTemp");
// day3
let monimg = document.getElementById("monimg");
let montxt = document.getElementById("montxt");
let monTemp = document.getElementById("monTemp");
// day4
let tueimg = document.getElementById("tueimg");
let tuetxt = document.getElementById("tuetxt");
let tueTemp = document.getElementById("tueTemp");
// day5
let wedimg = document.getElementById("wedimg");
let wedtxt = document.getElementById("wedtxt");
let wedTemp = document.getElementById("wedTemp");
// day6
let thuimg = document.getElementById("thuimg");
let thutxt = document.getElementById("thutxt");
let thuTemp = document.getElementById("thuTemp");
// day7
let friImg = document.getElementById("friImg");
let fritxt = document.getElementById("fritxt");
let friTemp = document.getElementById("friTemp");
button.addEventListener("click", fetchWeatherData);
button.addEventListener("touchstart", fetchWeatherData);
function fetchWeatherData() {
    // Get the value from the input for the location
    const location = inp.value; // Get location from the input

    // Check if location is provided
    if (!location) {
        console.error("Please enter a location.");
        return;
    }

    // Fetch weather data using the input location
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=681638dc8ab74942b2885714241210&q=${location}&days=10`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((result) => {
            console.log(result); // Log the result to the console
            // You can now update the UI with the fetched data
            name.textContent = result.location.name.toUpperCase();
            temprature.textContent = `${result.current.temp_c}°`;
            florImg.src = "https:" + result.current.condition.icon;
            date.textContent = result.location.
                localtime;


            // Update times and images for specific forecast hours
            time.textContent = result.forecast.forecastday[0].astro.sunrise;
            img1.src = "https:" + result.forecast.forecastday[0].hour[9].condition.icon;
            img2.src = "https:" + result.forecast.forecastday[0].hour[11].condition.icon;
            img3.src = "https:" + result.forecast.forecastday[0].hour[14].condition.icon;
            img4.src = "https:" + result.forecast.forecastday[0].hour[17].condition.icon;
            img5.src = "https:" + result.forecast.forecastday[0].hour[20].condition.icon;
            img6.src = "https:" + result.forecast.forecastday[0].hour[23].condition.icon;
            // time
            time.textContent = result.forecast.forecastday[0].hour[9].time.split(" ")[1];
            time2.textContent = result.forecast.forecastday[0].hour[11].time.split(" ")[1];
            time3.textContent = result.forecast.forecastday[0].hour[14].time.split(" ")[1];
            time4.textContent = result.forecast.forecastday[0].hour[17].time.split(" ")[1];
            time5.textContent = result.forecast.forecastday[0].hour[20].time.split(" ")[1];
            time6.textContent = result.forecast.forecastday[0].hour[23].time.split(" ")[1];

            // Update temperatures for those hours
            firstTemp.textContent = `${result.forecast.forecastday[0].hour[9].temp_c}°`;
            secTemp.textContent = `${result.forecast.forecastday[0].hour[11].temp_c}°`;
            thrdTemp.textContent = `${result.forecast.forecastday[0].hour[14].temp_c}°`;
            fourTemp.textContent = `${result.forecast.forecastday[0].hour[17].temp_c}°`;
            fivTemp.textContent = `${result.forecast.forecastday[0].hour[20].temp_c}°`;
            sixTemp.textContent = `${result.forecast.forecastday[0].hour[23].temp_c}°`;

            realFeel.textContent = `${result.current.feelslike_c}°`;
            uvIndex.textContent = `${result.current.uv}`;
            visibility.textContent = `${result.current.vis_km}KM`;
            Wind.textContent = `${result.current.wind_kph}km/h`;

            // 10-day forecast logic (corrected for multiple days)
            prevImgone.src = "https:" + result.forecast.forecastday[0].day.condition.icon;
            firtxt.textContent = result.forecast.forecastday[0].day.condition.text;
            todTemp.textContent = `${result.forecast.forecastday[0].day.avgtemp_c}°`;

            sunimg.src = "https:" + result.forecast.forecastday[1].day.condition.icon;
            suntxt.textContent = result.forecast.forecastday[1].day.condition.text;
            sunTemp.textContent = `${result.forecast.forecastday[1].day.avgtemp_c}°`;

            monimg.src = "https:" + result.forecast.forecastday[2].day.condition.icon;
            montxt.textContent = result.forecast.forecastday[2].day.condition.text;
            monTemp.textContent = `${result.forecast.forecastday[2].day.avgtemp_c}°`;

            tueimg.src = "https:" + result.forecast.forecastday[3].day.condition.icon;
            tuetxt.textContent = result.forecast.forecastday[3].day.condition.text;
            tueTemp.textContent = `${result.forecast.forecastday[3].day.avgtemp_c}°`;

            wedimg.src = "https:" + result.forecast.forecastday[4].day.condition.icon;
            wedtxt.textContent = result.forecast.forecastday[4].day.condition.text;
            wedTemp.textContent = `${result.forecast.forecastday[4].day.avgtemp_c}°`;

            thuimg.src = "https:" + result.forecast.forecastday[5].day.condition.icon;
            thutxt.textContent = result.forecast.forecastday[5].day.condition.text;
            thuTemp.textContent = `${result.forecast.forecastday[5].day.avgtemp_c}°`;

            friImg.src = "https:" + result.forecast.forecastday[6].day.condition.icon;
            fritxt.textContent = result.forecast.forecastday[6].day.condition.text;
            friTemp.textContent = `${result.forecast.forecastday[6].day.avgtemp_c}°`;
        })
        .catch((error) => {
            console.error("Error fetching the weather data:", error);
        });
};
