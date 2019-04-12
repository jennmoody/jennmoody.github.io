

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

               
        var templeClosures;
        if (i === 0) {
            templeClosures = 'templeClosures1';
        } 
        else if (i === 1) {
            templeClosures = 'templeClosures2';
        }
        else if (i === 2) {
            templeClosures = 'templeClosures3';
        }
        else if (i === 3) {
            templeClosures = 'templeClosures4';
        }


        document.getElementById(templeClosures).appendChild(closureUL);
    
    }
    
}



