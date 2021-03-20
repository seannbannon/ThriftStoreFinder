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

  // Create the search bar
  const input = document.getElementById("search-input");
  const searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  // Bias the SearchBox results towards current map's viewport.
  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds());
  });
  //search box 
  searchBox.addListener("places_changed", () => {
    console.log(searchBox.getPlaces());
    let place = searchBox.getPlaces()[0];
    lat = place.geometry.location.lat();
    long = place.geometry.location.lng();
    map.setCenter({ lat: lat, lng: long });
  })

  // Asks the user for their location and sets the map there 
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      lat = position.coords.latitude;
      long = position.coords.longitude
      initialLocation = new google.maps.LatLng(lat, long);
      map.setCenter(initialLocation);
    });
  }

  service = new google.maps.places.PlacesService(map);

  // Ask the user for his location and center the map on it if they allow 


}

//click event that searches for all nearby thrift shops  in a 300m radius
$('#search').on('click', function () {
  console.log("We clicked on the button!");
  $('#map').css('display', 'inline-block');
  console.log("I hope the map showed up!");

  var request = {
    query: `thrift shops near ${$('#search-bar').val()}`,
    fields: ['name', 'geometry', 'type', 'formatted_address', 'opening_hours', 'rating', 'photos'],
    location: { lat: lat, lng: long },
    radius: 300


  }
  // Go and actually grab all that data about thrift shops (from the query above)
  let markers = [];
  let infoWindows = [];
  service.textSearch(request, function (results, status) {
    console.log('results', results);
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i++) {
        // For each result create a marker and a tooltip 
        var shop = results[i];
        var name = shop.name;
        var address = shop.formatted_address;
        var hours = shop.opening_hours;
        var rating = shop.rating;
        var icon = {
          url: './thriftstoreicon_25x25.png',
          scaledSize: new google.maps.Size(25, 25),
          origin: google.maps.Point(0, 0),
          anchor: google.maps.Point(0, 0),
        }

        if (shop.icon != null) {
          icon.url = shop.icon;
        }
        infoWindows[i] = new google.maps.InfoWindow({
          content: `
          <div class="tool-tip">
            <h3 class="store-name">${name}</h3>
            <p class="rating">Rating: ${rating}</p>
            <p class="address">${address}</p>
          </div >

          `
        });

        markers[i] = new google.maps.Marker({
          position: { lat: results[i].geometry.location.lat(), lng: results[i].geometry.location.lng() },
          map,
          title: results[i].name,
          icon: icon,
          id: i
        });


        google.maps.event.addListener(markers[i], 'click', function () {
          infoWindows[this.id].open(map, markers[this.id]);
          map.panTo(markers[this.id].getPosition());
        });


      }
    }
  })


})


