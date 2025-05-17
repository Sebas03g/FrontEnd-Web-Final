import { validarCedulaBasica } from "../utilidades.js"
import {esEmailValido} from  '../utilidades.js';
import {esTelefonoValido} from  '../utilidades.js';
import {validarVacio} from '../utilidades.js';

export function validarDatosPersona(tipo){
    const nombre = document.getElementById(`nombreDispositivo${tipo}`)
    const cedula = document.getElementById(`cedulaDispositivo${tipo}`)
    const correo = document.getElementById(`correoDispositivo${tipo}`)
    const telefono = document.getElementById(`telefonoDispositivo${tipo}`)
    return validarVacio(nombre) && validarCedulaBasica(cedula) && esEmailValido(correo) && esTelefonoValido(telefono);
}

export function validarUbicacion(punto){
    const nombre = document.getElementById("nombreUbicacion").value;
    const tipo =  document.getElementById("miComboboxSeguridad").value;
    return validarVacio(nombre) && validarVacio(tipo) && punto != null;
}

export function validarDatosPC(){
    const nombre = document.getElementById("nombrePersona").value;
    const telefono = document.getElementById("telefonoPersona").value;
    const descripcion = document.getElementById("descripcionPersona").value;
    return validarVacio(nombre) && esTelefonoValido(telefono) && validarVacio(descripcion);
}