
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    mapId: "6aba552fb22c25cd",
    center: { lat:-1.2733869182435806, lng: 36.80609048184484 },
    zoom: 18,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
  });

  const markersData = [
    {
      position: { lat: -1.2729369348875013, lng: 36.80713313766487 },
      title: "Department of computing",
      icon: {
        url: "computer_pixel.jpg",
        scaledSize: new google.maps.Size(33, 31),
      },
    },
    {
      position: { lat: -1.282485555331184, lng: 36.81083031006496 },
      title: "Klabu (club 36)",
      icon: {
        url: "food-cart.png",
        scaledSize: new google.maps.Size(35, 31),
      },
    },
    {
      position: { lat: -1.2727154158666287, lng: 36.80691070302399 },
      title: "Examination center",
      icon: {
        url: "inspector.png",
        scaledSize: new google.maps.Size(33, 31),
      },
    },
    {
      position: {  lat: -1.273916748759782, lng: 36.80780119641136  },
      title: "Geology department",
      icon: {
        url: "geology.png",
        scaledSize: new google.maps.Size(33, 31),
      },
    },
    {
      position: {  lat: -1.2735832042958102, lng: 36.8071732499254 },
      title: "Chemistry department",
    icon: {
      url: "chemistry.png",
      scaledSize: new google.maps.Size(33, 31),
    },
    },
    {
      position: {  lat: -1.2736134401168453, lng: 36.80377947104992 },
      title: "Chiromo library",
      icon: {
        url: "library.png",
        scaledSize: new google.maps.Size(33, 31),
      },
    },
    {
      position: { lat: -1.2735337716527146, lng: 36.804130556996014 },
      title: "parking",
      icon: {
        url: "parking-sign.png",
        scaledSize: new google.maps.Size(33, 31),
      },
    },
    {
      position: { lat: -1.273484163040762, lng: 36.804456445392354 },
      title: "Chiromo UoN mortuary",
      icon: {
      url: "mortuary.png",
      scaledSize: new google.maps.Size(33, 31),
    },
    },
    {
      position: { lat: -1.2735756708124275, lng: 36.8044772325212},
      title: "Human anatomy lab",
      icon: {
      url: "lab.png",
      scaledSize: new google.maps.Size(33, 31),
    },
    },
    {
      position: {lat: -1.2720118881810878, lng: 36.80712370170713 },
      title: "Chiromo funeral parlour",
      icon: {
        url: "mortuary.png",
        scaledSize: new google.maps.Size(33, 31),
      },
    },
    {
      position: {lat: -1.2734432694533213, lng: 36.805092128930035},
      title: "Anatomy lecture hall",
      icon: {
      url: "lecture.png",
      scaledSize: new google.maps.Size(33, 31),
    },
    },
    {
      position: {lat: -1.2734053926086755, lng: 36.80522087496523},
      title: "Physiology lab",
      icon: {
        url: "lab.png",
        scaledSize: new google.maps.Size(33, 31),
      },
    },
    {
      position: {lat: -1.2733651694102046, lng: 36.80527988355803},
      title: "Histology lab",
      icon: {
        url: "lab.png",
        scaledSize: new google.maps.Size(33, 31),
      },
    },    
    {
      position: {lat: -1.2732364551696325, lng: 36.80564399343304},
      title: "Department of Biochemistry",
      icon: {
        url: "biochem.png",
        scaledSize: new google.maps.Size(33, 31),
      },
    },    
    {
      position: {lat: -1.2734233940309128, lng: 36.80610361015183},
      title: "Assistant Dean's office",
      icon: {
        url: "desk.png",
        scaledSize: new google.maps.Size(33, 31),
      },
    },    
    {
      position: {lat: -1.2736536718339866, lng: 36.80616463040195},
      title: "Chiromo castle",
      icon: {
        url: "castle.png",
        scaledSize: new google.maps.Size(33, 31),
      },
    },    
    {
      position: {lat: -1.2742564415701914, lng: 36.806617356318625},
      title: "Jirani shop",
      icon: {
        url: "shop.png",
        scaledSize: new google.maps.Size(33, 31),
      },
    },   
    {
      position: {lat: -1.2743930974958977, lng: 36.8063460482999},
      title: "Center of Biotechnology and bioinformatics",
      icon: {
      url: "biochem.png",
      scaledSize: new google.maps.Size(33, 31),
    },
    },  

    {
      position: {lat: -1.2744578022809494, lng: 36.80565099139632 },
      title: "Parking",
      icon: {
      url: "parking-sign.png",
      scaledSize: new google.maps.Size(33, 31),
    },
    }, 
    {
      position: {lat: -1.2745461901322188, lng: 36.80503243271016 },
      title: "School of Biological sciences",
      icon: {
         url: "dna.png",
         scaledSize: new google.maps.Size(33, 31),
    },
    }, 
    {
      position: {lat: -1.2730530999339396, lng: 36.80778017702514},
      title: "Millenium hall 1",
       icon: {
      url: "lecture.png",
      scaledSize: new google.maps.Size(33, 31),
    },
    },    

    {
      position: {lat: -1.2737988094422632, lng: 36.80517714895578},
      title: "Chiromo Jevanjee gardens",
    icon: {
      url: "garden.png",
      scaledSize: new google.maps.Size(33, 31),
    },
    },   
    {
      position: {lat: -1.273838027053768, lng: 36.805493649617354},
      title: "Agric lab",
    icon: {
      url: "lab.png",
      scaledSize: new google.maps.Size(33, 31),
    },
    },   
    {
      position: {lat: -1.2725037865687638, lng: 36.807805561865266},
      title: "Millenium hall 2",
    icon: {
      url: "lecture.png",
      scaledSize: new google.maps.Size(33, 31),
    },
    },   


    // Add more marker data objects as needed
  ];

  // Create markers dynamically using loop
  markersData.forEach(markerData => {
    const marker = new google.maps.Marker({
      position: markerData.position,
      map: map,
      animation: google.maps.Animation.DROP,
      title: markerData.title,
      icon: markerData.icon,
    });
  });
}

  // Function to handle search
  function searchLocation() {
    // Get search input value
    var searchInput = document.getElementById('search').value;
  
    // Check if input is a valid coordinate
    var coordinates = searchInput.split(',');
    if (coordinates.length === 2 && !isNaN(coordinates[0]) && !isNaN(coordinates[1])) {
      // Input is a valid coordinate
      var lat = parseFloat(coordinates[0].trim());
      var lng = parseFloat(coordinates[1].trim());
  
      // Center map to searched coordinates
      var searchedLatLng = new google.maps.LatLng(lat, lng);
      map.setCenter(searchedLatLng);
  
      // Add marker at searched location
      var marker = new google.maps.Marker({
        position: searchedLatLng,
        map: map,
        title: 'Searched Location'
      });
    } else {
      // Input is not a valid coordinate, geocode the address
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: searchInput }, function(results, status) {
        if (status === 'OK') {
          // Get first result
          var location = results[0].geometry.location;
  
          // Center map to searched location
          map.setCenter(location);
  
          // Add marker at searched location
          var marker = new google.maps.Marker({
            position: location,
            map: map,
            title: 'Searched Location'
          });
        } else {
          // Handle geocoding error
          alert('Geocoding failed: ' + status);
        }
      });
    }
  }


window.initMap = initMap;


