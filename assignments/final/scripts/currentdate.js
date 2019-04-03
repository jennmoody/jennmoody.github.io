
var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thurday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];
document.getElementById("currentDay").innerHTML = n;
document.getElementById("currentDate").innerHTML = d.getDate();
var d = new Date();
var months = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

document.getElementById("currentMonth").innerHTML = months[d.getMonth()];
document.getElementById("currentYear").innerHTML = d.getFullYear();
document.getElementById("updateYear").innerHTML = d.getFullYear();