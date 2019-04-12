function getTemples() {
    var openWeatherMapId = '5412bffa8205f503e78449b50cc9aced';
    var zipCode = '83646';



    var apiTempleTemp = 'https://api.openweathermap.org/data/2.5/weather' +
        '?zip=' + zipCode +
        '&appid=' + openWeatherMapId +
        '&units=imperial';


    var templeTemp = new XMLHttpRequest();

    templeTemp.open('GET', apiTempleTemp, true);
    templeTemp.responseType = 'json';
    templeTemp.send();

    templeTemp.onload = function () {
        var weatherData = templeTemp.response;

        var currentTemp;
        if (i === 0) {
            currentTemp = "current-temp1";
        }
        else if (i === 1) {
            currentTemp = "current-temp2";

        }
        else if (i === 2) {
            currentTemp = "current-temp3";

        }
        else if (i === 3) {
            currentTemp = "current-temp4";

        }

        document.getElementById(currentTemp).innerHTML = weatherData.main.temp.toFixed(0);




    }

}

getTemples('83646');
getTemples('84150');
getTemples('62354');
getTemples('99516');





