import { eliminarClase } from '../utilidades.js'

function abrirContenedores(opciones){
    let botones = opciones.querySelectorAll(".btn");
    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            document.getElementById(boton.dataset.idContenedor).classList.add("abierto");
        });
    });
}

function abrirMenuUsuario(botonIcono){
    botonIcono.addEventListener("click", () => {

        if(!botonIcono.classList.contains("seleccionado")){
            botonIcono.classList.add("seleccionado");
            document.getElementById("menuUsuario").classList.add("abierto");
        }else{
            botonIcono.classList.remove("seleccionado");
            document.getElementById("menuUsuario").classList.remove("abierto");
        }
    });
}

function accionesMenuUsuario(menuUsuario){
    menuUsuario.querySelector(".btn").addEventListener("click", () => {
        document.getElementById("iconoUsuario").querySelector("i").classList.remove("seleccionado");
        document.getElementById("menuUsuario").classList.remove("abierto");
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
    const iconoUsuario = document.getElementById("iconoUsuario").querySelector("i");
    const menuUsuario = document.getElementById("menuUsuario");

    abrirContenedores(opciones);
    cerrarContenedor(botonesBajar);
    abrirMenuUsuario(iconoUsuario);
    accionesMenuUsuario(menuUsuario);
});