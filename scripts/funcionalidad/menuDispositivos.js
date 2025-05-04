import { eliminarClase } from '../utilidades.js';

var idDipositivo;

function accionMenuBoton(btn){
  const menu = document.getElementById('contenedorMenu');
  btn.addEventListener('click', () => {
    menu.classList.toggle('mostrar');
    btn.classList.toggle('seleccionado');

  });
}

function accionListaDispositivos(listaDispositivos){
  listaDispositivos.querySelectorAll(".elementoDispositivo").forEach(elemento => {
    elemento.querySelector('label').addEventListener("click", ()=>{
      eliminarClase(listaDispositivos.querySelectorAll(".elementoDispositivo"), "seleccionado");
      elemento.classList.add("seleccionado")
      document.getElementById("contenedor").classList.remove("abierto");
      document.getElementById("modificarPersona").classList.remove("abierto");
      document.getElementById("creacionPersona").classList.remove("abierto");
      idDipositivo = elemento.dataset.idDispositivo;
    });
  });
}

function botonAgregarDispositivo(btn, listaDispositivos){
  btn.addEventListener("click", () => {
    eliminarClase(listaDispositivos.querySelectorAll(".elementoDispositivo"), "seleccionado");
    btn.classList.toggle("seleccionado")
  });
}

document.addEventListener("DOMContentLoaded", function(){ 
    const btnMenu = document.getElementById('botonMenu');
    const listaDispositivos = document.getElementById("listaDispositivos");
    const btnAgregarDispositivo = document.getElementById("btn-creacion");

    accionMenuBoton(btnMenu);
    accionListaDispositivos(listaDispositivos);
    botonAgregarDispositivo(btnAgregarDispositivo, listaDispositivos);
});