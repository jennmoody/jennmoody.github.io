//current weather

var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?zip=83230,us&appid=5412bffa8205f503e78449b50cc9aced&units=imperial';

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
var apiForecaststring = 'https://api.openweathermap.org/data/2.5/forecast?zip=83230,us&appid=5412bffa8205f503e78449b50cc9aced&units=imperial';

var forecastRequest = new XMLHttpRequest();

forecastRequest.open('GET', apiForecaststring, true);
forecastRequest.responseType = 'json';
forecastRequest.send();

forecastRequest.onload = function() {
  var forecastData = forecastRequest.response;

 // create variables to use in the loop below
 var j = 1;
 var forecastDate;
 var forecastTemp;

 for (i = 0; i < forecastData.list.length; i++)
 {
     // look for forecasts for 21:00:00
     if (forecastData.list[i].dt_txt.includes('21:00:00')) {
         // set date variable
         forecastDate = new Date(forecastData.list[i].dt_txt);
         
         // set temperature variable
         forecastTemp = forecastData.list[i].main.temp.toFixed();
         
         switch (j) {
             case 1:
                 document.getElementById("day1Name").innerHTML = getDayOfWeek(forecastDate);
                 document.getElementById("day1Temp").innerHTML = forecastTemp;
                 break;
             case 2:
                 document.getElementById("day2Name").innerHTML = getDayOfWeek(forecastDate);
                 document.getElementById("day2Temp").innerHTML = forecastTemp;
                 break;
             case 3:
                 document.getElementById("day3Name").innerHTML = getDayOfWeek(forecastDate);
                 document.getElementById("day3Temp").innerHTML = forecastTemp;
                 break;
             case 4:
                 document.getElementById("day4Name").innerHTML = getDayOfWeek(forecastDate);
                 document.getElementById("day4Temp").innerHTML = forecastTemp;
                 break;
             case 5:
                 document.getElementById("day5Name").innerHTML = getDayOfWeek(forecastDate);
                 document.getElementById("day5Temp").innerHTML = forecastTemp;
                 break;
         }

         // increment j by 1
         j++;
     }
 }
}
 
function getDayOfWeek(forecastDate) {
 // day of week
 var dayOfWeekNumber = forecastDate.getDay();

 var dayNames = new Array(7);
 dayNames[0] = 'Sunday';
 dayNames[1] = 'Monday';
 dayNames[2] = 'Tuesday';
 dayNames[3] = 'Wednesday';
 dayNames[4] = 'Thursdsay';
 dayNames[5] = 'Friday';
 dayNames[6] = 'Saturday';

 return dayNames[dayOfWeekNumber];
}