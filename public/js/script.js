/* For municipalities */
/* tile from: https://wiki.openstreetmap.org/wiki/Tiles  */
 
const map = L.map('map-template').setView([40.4167, -3.70325], 13);
//L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png').addTo(map);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoicm9ueXN0aXZlbnMiLCJhIjoiY2s5anI1dzhjMDlzOTNlcGl1NTdxeHN1biJ9.xKlCOyq7HpR2PcMgPA0Isw', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'your.mapbox.access.token'
        }).addTo(map);