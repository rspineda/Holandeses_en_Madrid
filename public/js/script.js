/* For municipalities */
/* tile from: https://wiki.openstreetmap.org/wiki/Tiles  */


const map = L.map('map-template').setView([40.4167, -3.70325], 10);
//L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png').addTo(map);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoicm9ueXN0aXZlbnMiLCJhIjoiY2s5anI1dzhjMDlzOTNlcGl1NTdxeHN1biJ9.xKlCOyq7HpR2PcMgPA0Isw', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'your.mapbox.access.token'
        }).addTo(map);

//funcion para agregar los marcadores
function addPopUp(x,y,z){
    L.marker(x).bindPopup(`${y} | ${z}usuarios`).addTo(map);
}

//funcion para encontrar los municipios registrados en BBDD y emparejarlos con sus coordenadas:
function coordenadas(){
    const coordenadas = {
        "Alcalá de Henares": [40.48205, -3.35996],
        "Alcobendas": [40.54746, -3.64197],
        "Alcorcon" : [40.34912, -3.828811],
        "Aldea del Fresno" : [40.32399, -4.202217],
        "Algete": [40.59642, -3.497902],
        "Alpedrete" : [40.65875, -4.023713],
        "Aranjuez": [40.03209, -3.603288],
        "Arganda del Rey": [40.30095, -3.43808],
        "Arroyomolinos" : [40.26951, -3.91946],
        "Boadilla del Monte": [40.40525, -3.876992],
        "Brunete": [40.40554, -3.997736],
        "Buitrago de Lozoya": [40.99368, -3.636723],
        "Cenicientos": [40.26463, -4.464909],
        "Cercedilla": [40.74145, -4.054667],
        "Ciempozuelos": [40.15934, -3.6184],
        "Collado Villalba": [40.62725, -4.008587],
        "Colmenar Viejo": [40.65895, -3.766043],
        "Coslada": [40.42594, -3.565464],
        "El Escorial": [40.58508, -4.12952],
        "El Molar": [40.73291, -3.582258],
        "Fuenlabrada": [40.28387, -3.800329],
        "Fuente el Saz de Jarama": [40.63877, -3.51129],
        "Galapagar": [40.57736, -4.00357],
        "Getafe": [40.30498, -3.732677],
        "Grinon": [40.21424, -3.856192],
        "Guadalix de la Sierra": [40.78483, -3.692719],
        "Guadarrama": [40.67348, -4.090732],
        "Hoyo de Manzanares": [40.62273, -3.90712],
        "Humanes": [40.24954, -3.827206],
        "Las Rozas": [40.31007, -4.490765],
        "Leganes": [40.32642, -3.758988], 
        "Madrid" :[40.4165, -3.70256],
        "Majadahonda": [40.47283, -3.872304],
        "Manzanares el Real": [40.72705, -3.864914],
        "Mejorada del Campo": [40.39701, -3.487864],
        "Moralzarzal": [40.68117, -3.97335],
        "Mostoles": [40.32277, -3.865741],
        "Navacerrada": [40.72893, -4.0151],
        "Navalcarnero": [40.28781, -4.013766],
        "Parla": [40.23754, -3.772741],
        "Patones": [40.85573, -3.48511],
        "Pinto": [40.24454, -3.696013],
        "Pozuelo de Alarcon": [40.4352, -3.813062],
        "Rascafria": [40.90381, -3.879398],
        "Rivas-Vaciamadrid" : [40.32605, -3.51089],
        "San Agustin de Guadalix": [40.67867, -3.615861],
        "San Fernando de Henares": [40.42553, -3.536694],
        "San Lorenzo de El Escorial": [40.59167, -4.149123],
        "San Martin de la Vega": [40.2078, -3.568544],
        "San Martin de Valdeiglesias": [40.36174, -4.397521],
        "San Sebastian de los Reyes": [40.54751, -3.626394],
        "Somosierra": [41.13312, -3.581837],
        "Soto del Real": [40.75428, -3.783356],
        "Torrejon de Ardoz": [40.4589, -3.479771],
        "Torrejon de la Calzada": [40.20154, -3.798929],
        "Torrelaguna": [40.82785, -3.538488],
        "Torrelodones": [40.57628, -3.929452],
        "Tres Cantos": [40.59907, -3.712258],
        "Valdemoro": [40.19269	-3.679874],
        "Velilla de San Antonio": [40.36703, -3.488029],
        "Villanueva de la Cañada": [40.44681, -4.005355]
    }
   
    //municipios  registrados en la base de datos y numero de usarios en cada municipio:
    var values = [] //municipios
    var users = [] //numero de usuarios
    const longitud = document.getElementsByClassName("municipality").length
    for (i=0; i<longitud; i++){
        const muni = document.getElementsByClassName("municipality")[i].innerHTML;
        const usersNumber = document.getElementsByClassName("users")[i].innerHTML;
            values.push(muni);
            users.push(usersNumber);
    }
    
    

    //coincidencia con la lista de todos los municipios
    for(y in coordenadas){
        let x = coordenadas[y]; //array con latitud y longitud de cada municipio registrado
        let position = values.indexOf(y); //saco el indice del array de municipios registrados para utilizarlo enel array de numero de usuarios, ya que el indice coincide
        let z = users[position]; //saco el numero de usuarios en cada municipio a partir del indice
        
        if(values.includes(y)){
            addPopUp(x,y,z); //le agrego el marker 
        }
    }

     

}
setTimeout(coordenadas,2000); //para que le de tiempo a renderizar los municipios






