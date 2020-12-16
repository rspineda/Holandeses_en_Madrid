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
        "Alcorcon" : [],
        "Aldea del Fresno" : [],
        "Algete": [],
        "Alpedrete" : [],
        "Aranjuez": [],
        "Arganda del Rey": [],
        "Arroyomolinos" : [40.26951, -3.91946],
        "Boadilla del Monte": [],
        "Brunete": [],
        "Buitrago de Lozoya": [],
        "Cenicientos": [],
        "Cercedilla": [],
        "Ciempozuelos": [],
        "Collado Villalba": [],
        "Colmenar Viejo": [],
        "Coslada": [],
        "El Escorial": [],
        "El Molar": [],
        "Fuenlabrada": [],
        "Fuente el Saz de Jarama": [],
        "Galapagar": [],
        "Getafe": [],
        "Grinon": [],
        "Guadalix de la Sierra": [],
        "Guadarrama": [],
        "Hoyo de Manzanares": [],
        "Humanes": [],
        "Las Rozas": [],
        "Leganes": [], 
        "Madrid" :[40.4165, -3.70256],
        "Majadahonda": [],
        "Manzanares el Real": [],
        "Mejorada del Campo": [],
        "Moralzarzal": [],
        "Mostoles": [],
        "Navacerrada": [],
        "Navalcarnero": [],
        "Parla": [],
        "Patones": [],
        "Pinto": [],
        "Pozuelo de Alarcon": [],
        "Rascafria": [],
        "Rivas-Vaciamadrid" : [40.32605, -3.51089],
        "San Agustin de Guadalix": [],
        "San Fernando de Henares": [],
        "San Lorenzo de El Escorial": [],
        "San Martin de la Vega": [],
        "San Martin de Valdeiglesias": [],
        "San Sebastian de los Reyes": [],
        "Somosierra": [],
        "Soto del Real": [],
        "Torrejon de Ardoz": [],
        "Torrejon de la Calzada": [],
        "Torrelaguna": [],
        "Torrelodones": [],
        "Tres Cantos": [],
        "Valdemoro": [],
        "Velilla de San Antonio": [],
        "Villanueva de la Cañada": []
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






