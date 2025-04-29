function creacionMapa() {
      // Crea el mapa centrado en coordenadas [lat, lng] y con zoom 13
  var map = L.map('mapa').setView([-2.8918931908671124, -79.03600936098859], 14);

  console.log("SI")

  // Añade el mapa base (OpenStreetMap gratuito)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Agrega un marcador
  L.marker([-2.8918931908671124, -79.03600936098859]).addTo(map)
    .bindPopup('¡Hola desde Leaflet!')
    .openPopup();
}



document.addEventListener("DOMContentLoaded", function(){
    console.log("LECTURA");
    creacionMapa();

});
