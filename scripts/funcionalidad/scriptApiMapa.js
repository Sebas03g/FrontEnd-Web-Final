function crearIcono(){
  const icono = L.divIcon({
    html: '<i class="bi bi-phone-fill" style="font-size: 2rem; color: black;"></i>',
    className: '',
    iconSize: [30, 30],
    iconAnchor: [15, 30],  // punto que toca el suelo
    popupAnchor: [0, -30]
  });

  return icono
}

function crearPopUp(dispositivo){
  const cadena = `<div id="${dispositivo.id}">
                    <h6>${dispositivo.nombre}</h6>
                    <p>Hola</p>
                  </div>`
  return cadena
}

function crearMarker(lat, long, mapa, dispositivo){
  const marker = L.marker([lat, long], {icon: crearIcono()}).addTo(mapa).bindPopup(crearPopUp(dispositivo))
  marker.on('click', function () {
    mapa.flyTo(marker.getLatLng(), 14);
    console.log(`${dispositivo.id}`)
  });

}


function creacionMapa() {
      // Crea el mapa centrado en coordenadas [lat, lng] y con zoom 13
  var map = L.map('mapa').setView([-2.8918931908671124, -79.03600936098859], 14);

  console.log("SI")

  // Añade el mapa base (OpenStreetMap gratuito)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  return map;

}



document.addEventListener("DOMContentLoaded", function(){
    const mapa = creacionMapa();

    const dispositivo = {id:"1", nombre: "Sophia"}

    crearMarker(-2.8918931908671124, -79.03600936098859, mapa, dispositivo);

});
