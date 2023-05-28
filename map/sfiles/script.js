// Define variables for map and markers
let map, customMarker;

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
    /*restriction: {
	    latLngBounds: bounds,
	    strictBounds: false
    }*/
  });
  async function logJSONData() {
    const response = await fetch("/display");
    const jsonData = await response.json();
    //console.log(jsonData);
    jsonData.forEach((data) => {
      const marker = new google.maps.Marker({
        position: {
          lat: parseFloat(data.latitude),
          lng: parseFloat(data.longitude),
        },
        title: data.name,
        icon: {
          url: data.icon,
          scaledSize: new google.maps.Size(33, 31),
        },
        map: map,
      });
    })
  }
  logJSONData();
  /*
  fetch("/display")
  .then((response) => response.json())
  .then((locations) => {
    locations.forEach((location) => {
      const marker = new google.maps.Marker({
        position: {
          lat: parseFloat(location.fields.latitude),
          lng: parseFloat(location.fields.longitude),
        },
        title: location.fields.name,
        icon: {
          url: location.fields.icon,
          scaledSize: new google.maps.Size(33, 31),
        },
        map: map,
      });
    });
  })
  .catch((error) => console.error(error));*/
  // Add a marker for the default location
  const defaultMarker = new google.maps.Marker({
    position: center,
    map: map,
    title: "UoN Chiromo",
  });
}
  // Handle form submission on search button click
  $("#search").on("submit", function (event) {
    event.preventDefault();
    const query = $("#query-input").val();
    searchLocation(query);
  });

// Search for location and display on map
function searchLocation(query) {
  // Send an AJAX request to the server to search for location
  $.ajax({
    url: "/search-location/",
    type: "GET",
    data: { query: query },
    dataType: "json",
    success: function (response) {
      // If location found in custom locations, display on map with custom icon
      if (response.location) {
        const location = response.location;
        const position = {
          lat: parseFloat(location.latitude),
          lng: parseFloat(location.longitude),
        };
        const icon = {
          url: location.icon,
          scaledSize: new google.maps.Size(30, 30),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(15, 15),
        };
        // Remove previous custom marker if any
        if (customMarker) {
          customMarker.setMap(null);
        }
        customMarker = new google.maps.Marker({
          position: position,
          map: map,
          title: location.name,
          icon: icon,
        });
        map.panTo(position);
        map.setZoom(18);
      } else {
        // If location not found, geocode the address and display on map with default marker
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address: query }, function (results, status) {
          if (status === "OK" && results.length > 0) {
            const location = results[0].geometry.location;
            const position = { lat: location.lat(), lng: location.lng() };
            map.panTo(position);
            map.setZoom(18);
          } else {
            alert("Geocoding error occured.");
          }
        });
      }
    },
    error: function () {
      alert("An error occurred while searching for location.");
      console.log(response);
    },
  });
}
