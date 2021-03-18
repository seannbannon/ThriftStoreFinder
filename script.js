//variable used to define map on page
let map;
let service;
// Center map on chicago by default
let lat = 41.8781;
let long = -87.6298;

// Start up the google map and the places API
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: lat, lng: long },
    zoom: 12,
  });
  // allows the search 
  service = new google.maps.places.PlacesService(map);

  // Ask the user for his location and center the map on it if they allow 
  geoFindMe();

}

function geoFindMe() {
  function success(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    map.setCenter({ lat: lat, lng: long });
  }

  function error() {
  }

  if (!navigator.geolocation) {
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }

}


//click event that searches for all nearby thrift shops 
$('#search').on('click', function () {
  var request = {
    query: 'thrift shops',
    fields: ['name', 'geometry', 'type', 'formatted_address', 'opening_hours', 'rating', 'photos'],
    // locationBias: {
    //   radius: '500'
    // }

  }
  // Go and actually grab all that data about thrift shops (from the query above)
  service.findPlaceFromQuery(request, function (results, status) {
    console.log('results', results);
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        // For each result create a marker and a tooltip 
        var shop = results[i];
        var name = shop.name;
        var address = shop.formatted_address;
        var hours = shop.opening_hours;
        var rating = shop.rating;
        var infowindow = new google.maps.InfoWindow({
          content: `
          <div class="tool-tip">
            <p class="store-name">${name}</p>
            <p class="rating">${rating}</p>
            <p class="address">${address}</p>
            
          </div >

          `
        });

        var marker = new google.maps.Marker({
          position: { lat: results[i].geometry.location.lat(), lng: results[i].geometry.location.lng() },
          map,
          title: results[i].name,
          icon: './thriftstoreicon_25x25.png'
        });

        // Make amrker clickable to show the tooltip 
        marker.addListener("click", () => {
          infowindow.open(map, marker);
        });


        marker.setMap(map);




        console.log(results[i]);
        // map.createMarker(results[i]);
      }
      map.setCenter(results[0].geometry.location);
    }
  })


})
