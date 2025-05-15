import { eliminarClase } from '../utilidades.js';
import { funcionPanelMensaje } from '../mensajesUsuario.js';

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

        botonIcono.classList.toggle("seleccionado");
        document.getElementById("menuUsuario").classList.toggle("abierto");
    });
}

function funcionalidadImg(){
    const input = document.getElementById("inputImagenUsuario");
    const imagenUsuario = document.getElementById("agregarIMG").querySelector("img");
    document.getElementById("agregarIMG").addEventListener("click", () => input.click());
    input.addEventListener("change", () => {
        const archivo = input.files[0];
        if (archivo) {
            const reader = new FileReader();
            reader.onload = e => {
                imagenUsuario.src = e.target.result;
            };
            reader.readAsDataURL(archivo);
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

function cerrarContenido(){
    document.body.addEventListener("click", function (event) {
        if (event.target !== document.getElementById("iconoUsuario").querySelector("i") && event.target !== document.getElementById("menuUsuario")) {
            document.getElementById("iconoUsuario").querySelector("i").classList.remove("seleccionado");
            document.getElementById("menuUsuario").classList.remove("abierto");
        }
    });
}

function accionBotonAlarma(botonAlarma){
    botonAlarma.querySelector("button").addEventListener("click", () => {
        funcionPanelMensaje("¿Estás seguro que deseas activar el modo alarma?", "Esta acción comunicara a las gestores de esta acción y permitira a todos los gestores tener acceso a los permisos de Nivel 3.", "eliminar", "Activar")
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const opciones = document.getElementById("opciones");
    const botonesBajar = document.querySelectorAll(".botonBajar");
    const iconoUsuario = document.getElementById("iconoUsuario").querySelector("i");
    const menuUsuario = document.getElementById("menuUsuario");
    const botonAlarma = document.getElementById("botonEmergencia"); 

    accionBotonAlarma(botonAlarma);
    abrirContenedores(opciones);
    cerrarContenedor(botonesBajar);
    abrirMenuUsuario(iconoUsuario);
    accionesMenuUsuario(menuUsuario);
    funcionalidadImg();
    cerrarContenido();
});