{
    var apiURLstring = 'json/templeData.json';
    var closureRequest = new XMLHttpRequest();
    
    closureRequest.open('GET', apiURLstring, true);
    closureRequest.responseType = 'json';
    closureRequest.send();
    
    closureRequest.onload = function() {
      var templeData = closureRequest.response;
    document.getElementById("templeClosures1").innerHTML = templeData[0].closures[i].start +
    +
    ' to ' + templeData[0].closures[i].end;
    }
    }