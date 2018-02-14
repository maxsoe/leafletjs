// var map = new L.Map('mymap', {
//   center: new L.LatLng(51.51, -0.11),
//   zoom: 1
// });

var map = new L.Map('mymap').setView([51.51, -0.11], 10)


var roads = L.gridLayer.googleMutant({
  type: 'roadmap' // valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
}).addTo(map);

// if we want to add custom styles to the map
// var styled = L.gridLayer.googleMutant({
//     type: 'roadmap',
//     styles: [
//         {elementType: 'labels', stylers: [{visibility: 'off'}]},
//         {featureType: 'water', stylers: [{color: '#444444'}]}
//     ]
// }).addTo(map);


// var url = 'gpx/route1928482835.gpx'; // URL to your GPX file or the GPX itself
var url = 'gpx/route1806114503.gpx'; // URL to your GPX file or the GPX itself
var name = "";
new L.GPX(url, {
  async: true
}).on('loaded', function(e) {
  map.fitBounds(e.target.getBounds(), {
    padding: [50, 50]
  });

  var gpx = e.target;
  // output = e.target.get_distance();
  // console.log("within initial function " + output);
  getmydistance(gpx.get_distance());
  getmydistance(gpx.get_elevation_gain());
}).addTo(map);

function getmydistance(param) {
  console.log(param);
};

// TODO: work how to get elevation data
