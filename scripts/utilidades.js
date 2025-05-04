export function eliminarClase(elementos, clase){
    elementos.forEach(elemento => {
    elemento.classList.remove(clase);
    })
}

