window.onload = function() {
  if ("geolocation" in navigator) {
    /* geolocation is available */
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      showMap(lat, lon);
    });
  } else {
    alert('Your location is not available')
  }
}

function showMap(lat, lon) {
  alert('Your location is: ' + lat + ', ' + lon)
}
