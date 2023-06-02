let map, customMarker;
var mapLocations;

// handle submission
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("search")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const query = document.getElementById("query-input").value;
      searchLocation(query);

      // clear input area after submission
      document.getElementById("query-input").value = "";
    });
});

// Initialize the map
function initMap() {
  // Set default center and zoom level
  const center = { lat: -1.2733869182435806, lng: 36.80609048184484 };
  const zoom = 18.5;

  // Create a new map object centered at default location
  map = new google.maps.Map(document.getElementById("map"), {
    mapId: "6aba552fb22c25cd",
    center: center,
    zoom: zoom,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
  });
  logJSONData();
}

// display custom locations from model with custom icons as markers
async function logJSONData() {
  const response = await fetch("/display/");
  mapLocations = await response.json();

  mapLocations.forEach((data) => {
    const marker = new google.maps.Marker({
      position: {
        lat: parseFloat(data.latitude),
        lng: parseFloat(data.longitude),
      },
      animation: google.maps.Animation.DROP,
      title: data.name,
      icon: {
        url: data.icon,
        scaledSize: new google.maps.Size(33, 31),
      },
      map,
    });

    // add listener to enable copying coordinates
    marker.addListener("click", function () {
      var position = marker.getPosition();
      var lat = position.lat();
      var lng = position.lng();
      var coordinates = lat + ", " + lng;
      displayAndCopyCoordinates(coordinates);
    });
  });
}

// search for location in db when queried
async function searchLocation(query) {
  if (query.toLowerCase() == "locate"){
    getCurrentLocation();
    return;
  }
  var match = mapLocations.find(function (item) {
    return item.name.toLowerCase().includes(query.toLowerCase());
  });

  if (query.toLowerCase() == "parking" || query.toLowerCase() == "toilet") {
    match = null;
  }
  if (match) {
    const location = match;
    const position = {
      lat: parseFloat(location.latitude),
      lng: parseFloat(location.longitude),
    };

    // Remove previous custom marker if any
    if (customMarker) {
      customMarker.setMap(null);
    }

    customMarker = new google.maps.Marker({
      position: position,
      map: map,
      title: location.name,
    });

    map.panTo(position);
    map.setZoom(18);

    var coords = location.latitude + ", " + location.longitude;

    // display directions on map
    displayDirectionsOnMap(coords);

    // Add listener to allowing copying coordinates
    customMarker.addListener("click", function () {
      var position = customMarker.getPosition(); // Get marker position
      var lat = position.lat(); // Get latitude
      var lng = position.lng(); // Get longitude
      var coordinates = lat + ", " + lng;
      displayAndCopyCoordinates(coordinates);
    });
  } else {
    // Send a fetch request to the server to search for location in offices object
    const response = await fetch(`/search/?query=${query}`);
    const jsonData = await response.json();

    console.log(jsonData); // log data for debugging
    if (jsonData.results && jsonData.results.length > 0) {
      // check if query is a necessity (more than one options)
      if (query.toLowerCase() == "parking" || query.toLowerCase() == "toilet") {
        const location = jsonData.results;

        location.forEach((location) => {
          const position = {
            lat: parseFloat(location.latitude),
            lng: parseFloat(location.longitude),
          };

          // Create custom marker for each matching location
          const customMarker = new google.maps.Marker({
            position: position,
            map: map,
            title: location.floor,
          });

          // add listener to enable copying coordinates
          customMarker.addListener("click", function () {
            var position = customMarker.getPosition();
            var lat = position.lat();
            var lng = position.lng();
            var coordinates = lat + ", " + lng;
            displayAndCopyCoordinates(coordinates);
          });

          map.panTo(position); // necessary ?
          map.setZoom(18);
        });
        // display message to user to select one point to get direction
      } else {
        const location = jsonData.results[0]; // Retrieve the first matching location

        const position = {
          lat: parseFloat(location.latitude),
          lng: parseFloat(location.longitude),
        };

        // Remove previous custom marker if any
        if (customMarker) {
          customMarker.setMap(null);
        }

        customMarker = new google.maps.Marker({
          position: position,
          map: map,
          title: location.floor,
        });

        map.panTo(position);
        map.setZoom(18);

        var coords = location.latitude + ", " + location.longitude;

        displayDirectionsOnMap(coords);

        // add listener for copying coordinates if clicked
        customMarker.addListener("click", function () {
          var position = customMarker.getPosition(); // Get marker position
          var lat = position.lat(); // Get the latitude
          var lng = position.lng(); // Get the longitude

          var coordinates = lat + ", " + lng;
          displayAndCopyCoordinates(coordinates);
        });

        if (location.floor != "") {
          displayOfficeLocation(location); // if not an office floor is ''
        }
      }
    } else {
      // If location is not found in custom locations, try to geocode the query
      const geocoder = new google.maps.Geocoder();

      geocoder.geocode({ address: query }, (results, status) => {
        if (status === "OK") {
          const position = results[0].geometry.location;

          if (customMarker) {
            customMarker.setMap(null);
          }
          customMarker = new google.maps.Marker({
            position: position,
            map: map,
            title: results[0].formatted_address,
          });
          map.panTo(position);
          map.setZoom(18);

          displayDirectionsOnMap(position);

          customMarker.addListener("click", function () {
            var position = customMarker.getPosition(); 
            var lat = position.lat(); 
            var lng = position.lng();
            var coordinates = lat + ", " + lng;
            displayAndCopyCoordinates(coordinates);
          });
        } else {
          console.error(
            "Geocode was not successful for the following reason: " + status
          );
          Toastify({
            text: "Error: " + status,
            duration: 3000,
            gravity: "top",
            position: "center",
            style: {
              background: "red",
            },
          }).showToast();
        }
      });
    }
  }
}

//Display coordinates and copy to clipboard
function displayAndCopyCoordinates(coordinates) {
  console.log(coordinates);

  // Copy coordinates to clipboard
  navigator.clipboard
    .writeText(coordinates)
    .then(function () {
      console.log("Coordinates copied to clipboard");
      Toastify({
        text: "Coordinates copied to clipboard",
        duration: 3000,
        gravity: "top",
        position: "center",
        style: {
          background: "linear-gradient(135deg,#73a5ff,#5477f5);",
        },
      }).showToast();
    })
    .catch(function (err) {
      console.error("Failed to copy coordinates to clipboard", err);
    });
}

// Display office location information using a toast
function displayOfficeLocation(location) {
  const message = "Office is on " + location.floor + " floor";

  Toastify({
    text: message,
    duration: 5000,
    gravity: "top",
    position: "center",
  }).showToast();
}

function showDistance(distance){
  const message = "The destination is " + distance + " away";

  Toastify({
    text: message,
    duration: 5000,
    gravity: "top",
    position: "center",
  }).showToast();
}

var directionsRenderer;

function displayDirectionsOnMap(destination) {
  // Get the user's current location

  navigator.geolocation.getCurrentPosition(
    function (position) {
      var userLatLng = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      // Create a DirectionsService object
      var directionsService = new google.maps.DirectionsService();

      // Remove previous directions and markers if they exist
      if (directionsRenderer) {
        directionsRenderer.setMap(null); // Remove from the map
        directionsRenderer = null; // Reset the directionsRenderer
      }

      // Create a new DirectionsRenderer object
      directionsRenderer = new google.maps.DirectionsRenderer({
        map: map, // Set the map for rendering directions
      });

      // Configure the request for directions
      var request = {
        origin: userLatLng,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
      };

      // Get the directions from the DirectionsService
      directionsService.route(request, function (response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          // Render the directions on the map
          directionsRenderer.setDirections(response);

          // Get the distance from the response
          var distance = response.routes[0].legs[0].distance.text;

          showDistance(distance);

          console.log("Distance: " + distance); // log for debugging
        } else {
          console.error("Error retrieving directions: " + status);
        }
      });
    },
    function (error) {
      console.error("Error getting user's location: " + error.message);
    }
  );
}

// get the user current location
function getCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        var coords = latitude + ", " + longitude;

        // Copy coordinates to clipboard
        displayAndCopyCoordinates(coords);
      },
      function (error) {
        console.error("Error getting user's location: " + error.message);
      },
      { enableHighAccuracy: true } // Enable high accuracy mode
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}
