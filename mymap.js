var map = new L.Map('mymap', {
  center: new L.LatLng(51.51, -0.11),
  zoom: 9
});
// var googleLayer = new L.Google('ROADMAP');
// map.addLayer(googleLayer);

var roads = L.gridLayer.googleMutant({
    type: 'roadmap' // valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
}).addTo(map);

// var styled = L.gridLayer.googleMutant({
//     type: 'roadmap',
//     styles: [
//         {elementType: 'labels', stylers: [{visibility: 'off'}]},
//         {featureType: 'water', stylers: [{color: '#444444'}]}
//     ]
// }).addTo(map);



// initialize the map
  // var map = L.map('mymap').setView([42.35, -71.08], 13);
  //
  // // load a tile layer
  // L.tileLayer('http://tiles.mapc.org/basemap/{z}/{x}/{y}.png',
  //   {
  //     attribution: 'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
  //     maxZoom: 17,
  //     minZoom: 9
  //   }).addTo(map);
