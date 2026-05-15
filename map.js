import mapboxgl from 'https://cdn.jsdelivr.net/npm/mapbox-gl@2.15.0/+esm';

// YOUR TOKEN HERE
mapboxgl.accessToken = 'pk.eyJ1Ijoia3BlbmdjYyIsImEiOiJjbXA3YXlwaDQwNHZuMnJxMGZtenpjNXB1In0.gl_r17MjMR9V9hXpkRBdog';

const map = new mapboxgl.Map({
  container: 'map',

  style: 'mapbox://styles/mapbox/streets-v12',

  center: [-71.09415, 42.36027],

  zoom: 12,

  minZoom: 5,

  maxZoom: 18,
});

console.log('Mapbox loaded:', mapboxgl);