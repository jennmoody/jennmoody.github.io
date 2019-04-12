//current weather
{
var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?zip=83646&appid=5412bffa8205f503e78449b50cc9aced&units=imperial';

var weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET', apiURLstring, true);
weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function() {
  var weatherData = weatherRequest.response;
document.getElementById("current-temp1").innerHTML = weatherData.main.temp.toFixed(0);

}
}
{
var apiURLstring2 = 'https://api.openweathermap.org/data/2.5/weather?zip=84150&appid=5412bffa8205f503e78449b50cc9aced&units=imperial';

var weatherRequest2 = new XMLHttpRequest();

weatherRequest2.open('GET', apiURLstring2, true);
weatherRequest2.responseType = 'json';
weatherRequest2.send();

weatherRequest2.onload = function() {
  var weatherData = weatherRequest2.response;
document.getElementById("current-temp2").innerHTML = weatherData.main.temp.toFixed(0);

}
}
{
var apiURLstring3 = 'https://api.openweathermap.org/data/2.5/weather?zip=62354&appid=5412bffa8205f503e78449b50cc9aced&units=imperial';

var weatherRequest3 = new XMLHttpRequest();

weatherRequest3.open('GET', apiURLstring3, true);
weatherRequest3.responseType = 'json';
weatherRequest3.send();

weatherRequest3.onload = function() {
  var weatherData = weatherRequest3.response;
document.getElementById("current-temp3").innerHTML = weatherData.main.temp.toFixed(0);

}
}

{
var apiURLstring4 = 'https://api.openweathermap.org/data/2.5/weather?zip=99516&appid=5412bffa8205f503e78449b50cc9aced&units=imperial';

var weatherRequest4 = new XMLHttpRequest();

weatherRequest4.open('GET', apiURLstring4, true);
weatherRequest4.responseType = 'json';
weatherRequest4.send();

weatherRequest4.onload = function() {
  var weatherData = weatherRequest4.response;
document.getElementById("current-temp4").innerHTML = weatherData.main.temp.toFixed(0);

}
}