var x = document.getElementById("demo");
var long = document.getElementById("long");
var lat = document.getElementById("lat");
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
  long.innerHTML=position.coords.longitude;
  lat.innerHTML=position.coords.latitude;
}