// Define variables for map and markers
let map, customMarker;
var mapLocations;
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
// handle submission
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("search")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const query = document.getElementById("query-input").value;
      searchLocation(query);
    });
});

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

async function searchLocation(query) {
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

    // Add listener to allowing copying coordinates
    customMarker.addListener("click", function () {
      var position = customMarker.getPosition(); // Get the marker position
      var lat = position.lat(); // Get the latitude
      var lng = position.lng(); // Get the longitude
      var coordinates = lat + ", " + lng;
      displayAndCopyCoordinates(coordinates);
    });
  } else {
    // Send a fetch request to the server to search for location in offices object
    const response = await fetch(`/search/?query=${query}`);
    const jsonData = await response.json();

    console.log(jsonData); // log data for debugging
    if (jsonData.results && jsonData.results.length > 0) {
      if (query.toLowerCase() == "parking" || query.toLowerCase() == "toilet") {
        const location = jsonData.results; // get every location to display (more than one marker)

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
          map.panTo(position);
          map.setZoom(18);
        });
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
          // Remove previous custom marker if any
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

          customMarker.addListener("click", function () {
            var position = customMarker.getPosition(); // Get marker position
            var lat = position.lat(); // Get the latitude
            var lng = position.lng(); // Get the longitude
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

// Function to display coordinates and copy to clipboard
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

// Function to display office location information using a toast notification
function displayOfficeLocation(location) {
  const message = "Office is on " + location.floor + " floor";

  Toastify({
    text: message,
    duration: 5000,
    gravity: "top",
    position: "center",
  }).showToast();
}
