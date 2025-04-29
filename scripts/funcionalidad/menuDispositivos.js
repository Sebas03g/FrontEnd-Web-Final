document.addEventListener("DOMContentLoaded", function(){ 
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.addEventListener('click', function (e) {
        e.stopPropagation(); // Evita que el clic cierre el dropdown
        });
    });

    document.getElementById("settingsDispositivo").addEventListener("click",() => {
        console.log("SETTINGS")
    });
    document.getElementById("editarDispositivos").addEventListener("click", () => {
        console.log("EDITAR")
    });
    document.querySelectorAll(".dropdown-item").forEach(item => {
        item.addEventListener("click", function (e) {
            e.stopPropagation();
            eliminarClase(document.querySelectorAll(".dropdown-item"), "seleccionado");
            item.classList.add("seleccionado");
        });
    })
});

function eliminarClase(elementos, clase){
elementos.forEach(elemento => {
    elemento.classList.remove(clase);
    })
}