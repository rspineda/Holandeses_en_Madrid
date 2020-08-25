/* For municipalities */
/* tile from: https://wiki.openstreetmap.org/wiki/Tiles  */
 
const map = L.map('map-template').setView([51.505, -0.09], 13);
L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png').addTo(map);