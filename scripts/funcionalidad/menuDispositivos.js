document.addEventListener("DOMContentLoaded", function(){ 
    const btn = document.getElementById('botonMenu');
    const menu = document.getElementById('contenedorMenu');

    btn.addEventListener('click', () => {
      menu.classList.toggle('mostrar');
      console.log("SI")
    });
});

function eliminarClase(elementos, clase){
elementos.forEach(elemento => {
    elemento.classList.remove(clase);
    })
}