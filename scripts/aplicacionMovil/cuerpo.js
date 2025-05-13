import { eliminarClase } from '../utilidades.js'

function abrirContenedores(opciones){
    let botones = opciones.querySelectorAll(".btn");
    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            document.getElementById(boton.dataset.idContenedor).classList.add("abierto");
        });
    });
}

function cerrarContenedor(botonesBajar){
    botonesBajar.forEach(boton => {
        boton.addEventListener("click", () => {
            eliminarClase(document.querySelectorAll(".contenedor"), "abierto");
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const opciones = document.getElementById("opciones");
    const botonesBajar = document.querySelectorAll(".botonBajar");
    abrirContenedores(opciones);
    cerrarContenedor(botonesBajar);
});