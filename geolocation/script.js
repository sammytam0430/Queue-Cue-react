var google = require('https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyBnIk1v7KSH5IiLtVP7j-p7tWROBGKxO8M&callback=initMap&libraries=places,visualization');

window.onload = function() {

  var map;
  var infoWindow;
  var service;

  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 49.2827, lng: -123.1207},
      zoom: 6
    });
    var infoWindow = new google.maps.InfoWindow({map: map});

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        let geocoder = new google.maps.Geocoder();
        let latlng = new google.maps.LatLng(pos.lat, pos.lng);
        geocoder.geocode({'latLng': latlng}, function(results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
            if (results[1]) {
              for (var i=0; i<results[0].address_components.length; i++) {
                for (var b=0;b<results[0].address_components[i].types.length;b++) {
                  if (results[0].address_components[i].types[b] == "locality") {
                    city= results[0].address_components[i];
                    break;
                  }
                }
              }
              let main = document.getElementById("react-root");
              let newContent = document.createTextNode('Your location is: ' + city.long_name);
              document.body.insertBefore(newContent, main);
            } else {
              alert("No results found");
            }
          } else {
            alert("Geocoder failed due to: " + status);
          }
        });

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
  };

  function performSearch() {
    var request = {
      bounds: map.getBounds(),
      keyword: 'food'
    };
    service.radarSearch(request, callback);
  }

  function callback(results, status) {
    if (status !== google.maps.places.PlacesServiceStatus.OK) {
      console.error(status);
      return;
    }
    for (var i = 0, result; result = results[i]; i++) {
      addMarker(result);
    }
  }

  function addMarker(place) {
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location,
      icon: {
        url: 'http://maps.gstatic.com/mapfiles/circle.png',
        anchor: new google.maps.Point(10, 10),
        scaledSize: new google.maps.Size(10, 17)
      }
    });

    google.maps.event.addListener(marker, 'click', function() {
      service.getDetails(place, function(result, status) {
        if (status !== google.maps.places.PlacesServiceStatus.OK) {
          console.error(status);
          return;
        }
        infoWindow.setContent(result.name);
        infoWindow.open(map, marker);
      });
    });
  }
}
