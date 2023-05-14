var x = new Date();
var h = x.getHours();
var m = x.getMinutes();
var s = x.getSeconds();
var zeit = h+":"+m+":"+s+"<br />";

var d = x.getDate();
var m = x.getMonth()+ 1;
var y = x.getFullYear();
var date = d+"."+m+"."+y;

document.write("Uhrzeit: "+zeit);
document.write("Datum: "+date);
