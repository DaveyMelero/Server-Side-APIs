

// async function getWeather(location) {

//     var apiKey = "85e89fab6b361a369379431d68ac943f";
//     var baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
   
    
//     var nameEl = document.getElementById("cityName");
//     var weatherDisplay = document.querySelector('#weather-display');
//     var temperatureElement = document.querySelector('#temperature');
//     var windElement = document.querySelector('#wind');
//     var humidityElement = document.querySelector('#humidity');


//     var requestUrl = baseUrl + "q=" + location + "&appid=" + apiKey;
    
//     var response = await fetch(requestUrl);
    
//     var data = await response.json();
    
//     var currentDate = dayjs(data.dt * 1000).format("MM/DD/YYYY");
//     nameEl.innerHTML = data.name + " (" + currentDate + ")";
//     var weatherPic = data.weather[0].icon;


//     var temperature = k2f(data.main.temp);
//     var windSpeed = data.wind.speed;
//     var humidity = data.main.humidity;

//     function k2f(k){
//         return Math.floor((k - 273.15) + 1.8 +32);
//     }
    
//     var weatherDisplay = document.querySelector('#weather-display');
//     weatherDisplay.innerHTML = "Temperature: " + temperature + "°f<br>" +
//     "Wind Speed: " + windSpeed + "mph<br>" +
//     "Humidity: " + humidity + "%";
//   }

// function saveRescentSearches(){
//   localStorage.setItem('recentsearch', json.stringify(searches));
// }


  // var submitButton = document.querySelector('#submit-button');
  // submitButton.addEventListener('click', function() {
    
  //   var location = document.querySelector('#location').value;
    
  //   getWeather(location);
  // });


  async function getWeather(location) {
    var apiKey = "85e89fab6b361a369379431d68ac943f";
    var baseUrl = "https://api.openweathermap.org/data/2.5/forecast?";
    
    var nameEl = document.getElementById("cityName");
    var weatherDisplay = document.querySelector('#weather-display');
  
    var requestUrl = baseUrl + "q=" + location + "&appid=" + apiKey;
    
    var response = await fetch(requestUrl);
    var data = await response.json();
    
    nameEl.innerHTML = data.city.name;
  
    var forecast = data.list;
    var forecastHtml = '';
    for (var i = 0; i < forecast.length; i += 8) {  
      var forecastData = forecast[i];
      var date = new Date(forecastData.dt * 1000);
      var temperature = k2f(forecastData.main.temp);
      var windSpeed = forecastData.wind.speed;
      var humidity = forecastData.main.humidity;
      var weatherPic = forecastData.weather[0].icon;
      forecastHtml += "<div><strong>" + date.toLocaleDateString() + "</strong><br>" +
        "Temperature: " + temperature + "°F<br>" +
        "Wind Speed: " + windSpeed + "mph<br>" +
        "Humidity: " + humidity + "%<br>" +
        "<img src='http://openweathermap.org/img/w/" + weatherPic + ".png'></div>";
    }
    weatherDisplay.innerHTML = forecastHtml;
  
    function k2f(k){
      return Math.floor((k - 273.15) * 1.8 + 32);
    }
  }
  
  var submitButton = document.querySelector('#submit-button');
  submitButton.addEventListener('click', function() {
    var location = document.querySelector('#location').value;
    getWeather(location);
  });