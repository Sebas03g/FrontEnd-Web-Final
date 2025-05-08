import { eliminarClase } from '../utilidades.js'
import { funcionPanelMensaje } from './mensajesUsuario.js';

let areas = [
    {punto:[-2.8918931908671124, -79.03600936098859], nombre:"Zona Segura", tipo:"green"},
    {punto:[-2.9221155566716095, -79.0415370113893], nombre:"Zona Insegura", tipo:"red"}
]

function abrirVentanaUbicacionesGenerales(){

    const boton = document.getElementById("botonListaUbicaciones");
    console.log("SI")

    boton.addEventListener("click", () => {
        let elementos = document.getElementById("listaNavDispositivo").querySelectorAll(".icono-navbar");
        eliminarClase(elementos, "seleccionado");
        elementos = document.getElementById("contenedores").querySelectorAll(".hijo");
        eliminarClase(elementos, "activo");

        boton.classList.add("seleccionado");

        document.getElementById("contenedorUbicacionesGenerales").classList.add("activo");

    });
}

document.addEventListener("DOMContentLoaded", () => {
    abrirVentanaUbicacionesGenerales();
});