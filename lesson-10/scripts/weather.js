//current weather

var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=5412bffa8205f503e78449b50cc9aced&units=imperial';

var weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET', apiURLstring, true);
weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function() {
  var weatherData = weatherRequest.response;

console.log(weatherData);

var temp = weatherData.main.temp.toFixed(0);
var windSpeed = weatherData.wind.speed.toFixed(0);
var windChill = 35.74 + 
    0.6215 * temp - 35.75 * 
    Math.pow(windSpeed, 0.16) + 0.4275 * 
    temp * Math.pow(windSpeed, 0.16);

document.getElementById("windChill").innerHTML = windChill.toFixed(0);



document.getElementById("current-weather").innerHTML = weatherData.weather[0].main;
document.getElementById("current-temp").innerHTML = weatherData.main.temp.toFixed(0);
document.getElementById("current-humidity").innerHTML = weatherData.main.humidity;
document.getElementById("current-windspeed").innerHTML = weatherData.wind.speed.toFixed(0);

}

//forecast
var apiForecaststring = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=5412bffa8205f503e78449b50cc9aced&units=imperial';

var forecastRequest = new XMLHttpRequest();

forecastRequest.open('GET', apiForecaststring, true);
forecastRequest.responseType = 'json';
forecastRequest.send();

forecastRequest.onload = function() {
  var forecastData = forecastRequest.response;

console.log(forecastData);

var d = new Date();

var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";
weekday[7] = "Sun";
weekday[8] = "Mon";
weekday[9] = "Tue";
weekday[10] = "Wed";
weekday[11] = "Thu";
weekday[12] = "Fri";
weekday[13] = "Sat";

var one = weekday[d.getDay()];
    document.getElementById('day1').innerHTML = one;
var two = weekday[d.getDay() + 1];
    document.getElementById('day2').innerHTML = two;
var three = weekday[d.getDay() + 2];
    document.getElementById('day3').innerHTML = three;
var four = weekday[d.getDay() + 3];
    document.getElementById('day4').innerHTML = four;
var five = weekday[d.getDay() + 4];
    document.getElementById('day5').innerHTML = five;


document.getElementById("tempday1").innerHTML = forecastData.list[0].main.temp_max.toFixed(0);
document.getElementById("tempday2").innerHTML = forecastData.list[1].main.temp_max.toFixed(0);
document.getElementById("tempday3").innerHTML = forecastData.list[2].main.temp_max.toFixed(0);
document.getElementById("tempday4").innerHTML = forecastData.list[3].main.temp_max.toFixed(0);
document.getElementById("tempday5").innerHTML = forecastData.list[4].main.temp_max.toFixed(0);
}