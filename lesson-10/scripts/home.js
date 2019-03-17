var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var townData = request.response;

   // populateTowns(townData);


document.getElementById("prestonMotto").innerHTML = townData.towns[4].motto;
document.getElementById("yearFoundedPreston").innerHTML = townData.towns[4].yearFounded;
document.getElementById("populationPreston").innerHTML = townData.towns[4].currentPopulation;
document.getElementById("averageRainPreston").innerHTML = townData.towns[4].averageRainfall;


document.getElementById("FishHavenMotto").innerHTML = townData.towns[1].motto;
document.getElementById("yearFoundedFishHaven").innerHTML = townData.towns[1].yearFounded;
document.getElementById("populationFishHaven").innerHTML = townData.towns[1].currentPopulation;
document.getElementById("averageRainFishHaven").innerHTML = townData.towns[1].averageRainfall;


document.getElementById("SodaMotto").innerHTML = townData.towns[5].motto;
document.getElementById("yearFoundedSoda").innerHTML = townData.towns[5].yearFounded;
document.getElementById("populationSoda").innerHTML = townData.towns[5].currentPopulation;
document.getElementById("averageRainSoda").innerHTML = townData.towns[5].averageRainfall;

}