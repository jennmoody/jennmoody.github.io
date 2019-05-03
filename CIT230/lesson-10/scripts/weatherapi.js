

var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=5412bffa8205f503e78449b50cc9aced&units=imperial';

var weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET', apiURLstring, true);
weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function() {
  var weatherData = weatherRequest.response;

console.log(weatherData);



document.getElementById("current-temp").innerHTML = weatherData.main.temp;
}