function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      mapId: "6aba552fb22c25cd",
      center: { lat: -1.2797696694122846, lng: 36.81628485857397 },
      zoom: 18,
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false,
    });

    const markers = [];

    const marker = new google.maps.Marker({
      position: {lat: -1.279076015276695, lng: 36.816118015795276 },
      map,
      animation: google.maps.Animation.DROP, //icons drop when map loads
      title: "Main Campus",
      icon: {
        url: "tall-building.png",
        scaledSize: new google.maps.Size(38, 31)
      }
    });
    const infowindow = new google.maps.InfoWindow({
      content: "University of Nairobi main campus",
    })
    marker.addListener("click", () => {
      infowindow.open(map, marker);
    })

    
  }
 
  window.initMap = initMap;
