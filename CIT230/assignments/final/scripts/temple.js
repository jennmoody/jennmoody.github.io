

var apiTemples = 'json/templeData.json';
var templeRequest = new XMLHttpRequest();

templeRequest.open('Get', apiTemples, true);
templeRequest.responseType = 'json';
templeRequest.send();

templeRequest.onload = function () {
    var templeData = templeRequest.response;

   

    var closureUL = document.createElement("ul");
    var closureLI;
   

    for (var i = 0; i < templeData[0].closures.length; i++) {
        closureLI = document.createElement("li");
        closureLI.innerHTML = templeData[0].closures[i].start +
            ' to ' + templeData[0].closures[i].end;
        closureUL.appendChild(closureLI);

    }       
        document.getElementById('templeClosures1').appendChild(closureUL);
      

}





