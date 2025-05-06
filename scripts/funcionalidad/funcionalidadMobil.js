import { eliminarClase } from '../utilidades.js'

function agregarFuncionalidadNav(){
    const elemento = document.getElementById("menuNavMobil").querySelector(".iconoMobil");
    const listaElementos = document.getElementById("menuNavMobil").querySelector(".linksNavMobil");
    elemento.addEventListener("click", () => {
        elemento.classList.toggle("seleccionado")
        listaElementos.classList.toggle("mostrar");
        agregarFuncionalidadLinkNav(listaElementos.querySelectorAll("li"));
    });
}

function agregarFuncionalidadLinkNav(listaElementos){
    console.log(listaElementos);
    listaElementos.forEach(elemento => {
        elemento.addEventListener("click", () => {
            eliminarClase(listaElementos, "seleccionado");
            let elementos = document.getElementById("contenedores").querySelectorAll(".hijo");
            eliminarClase(elementos, "activo");
            elemento.classList.add("seleccionado");
            document.getElementById(elemento.querySelector("a").dataset.nombreContenedor).classList.add("activo");
        });
    });
} 

function agregarFuncionalidadContenedor(dispositivos){
    dispositivos.forEach(dispositivo => {
            dispositivo.querySelector(".settingsDispositivo").addEventListener('click',() => {
                agregarFuncionalidadNav();
            });
        });
}

document.addEventListener("DOMContentLoaded", () => {
    const dispositivos = document.getElementById("listaDispositivos").querySelectorAll(".elementoDispositivo");   
    agregarFuncionalidadContenedor(dispositivos);
    

});