window.onload = function() {
  navigator.geolocation.getCurrentPosition((position) => {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    showMap(lat, lon);
  });
}

function showMap(lat, lon) {
  console.log(lat + ',' + lon)
}
