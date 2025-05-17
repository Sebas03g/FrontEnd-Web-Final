import {esEmailValido} from  '../utilidades.js';
import {esTelefonoValido} from  '../utilidades.js';
import {validarVacio} from '../utilidades.js';

export function validarDatosGestor(){
    console.log(document.getElementById("emailGestor"))
    const email = document.getElementById("emailGestor").value;
    const codigo = document.getElementById("codigoGestor").value;

    console.log(codigo);

    return esEmailValido(email) && validarVacio(codigo);

}

export function validarDatosPC(){
    const nombre = document.getElementById("nombreCrearPC").value;
    const telefono = document.getElementById("telCrearPC").value;
    return validarVacio(nombre) && esTelefonoValido(telefono);
}
