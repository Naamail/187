var x = document.getElementById("demo");
var long = document.getElementById("long");
var lat = document.getElementById("lat");

/*
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
  long.setAttribute('value', position.coords.longitude);
  lat.setAttribute('value',position.coords.latitude);
} 
*/

function getLocation() {
  var longtitude =11;
  var latitude =22;
  x.innerHTML = "Latitude: "  + longtitude +
  "<br>Longitude: " + latitude;
  long.setAttribute('value', longtitude);
  lat.setAttribute('value', latitude);
    }