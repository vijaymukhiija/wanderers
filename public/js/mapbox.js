/* eslint-disable */
const locations = JSON.parse(document.getElementById('map').dataset.locations);
mapboxgl.accessToken =
  'pk.eyJ1IjoidmlqYXltdWtoaWphIiwiYSI6ImNrYncyNmZtYjA2OXQyeG80cWw3a2ZubWsifQ.dxK03sNRoosA6sMYy6DlZg';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/vijaymukhija/ckbw7bwbj0um11imxvl97mfxg',
  scrollZoom: false,
  // center: [-118.113491, 34.111745],
  // zoom: 10,
  // interactive: false
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach((loc) => {
  // Create marker
  const el = document.createElement('div');
  el.className = 'marker';

  // Add marker
  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom', //bottom of marker will be the location
  })
    .setLngLat(loc.coordinates)
    .addTo(map);

  // Add popup to display info about the location
  new mapboxgl.Popup({
    offset: 30,
  })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
    .addTo(map);

  // Extend map bounds to include current location
  bounds.extend(loc.coordinates);
});

//function which executes the moving and zooming
map.fitBounds(bounds, {
  padding: {
    top: 200,
    bottom: 150,
    left: 100,
    right: 100,
  },
});
