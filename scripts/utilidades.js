export function eliminarClase(elementos, clase){
    elementos.forEach(elemento => {
    elemento.classList.remove(clase);
    })
}

export function esPantallaPequena() {
  return window.innerWidth <= 768;
}


