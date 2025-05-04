function crearMensaje(titulo, mensaje, clase, txtBtn) {
    let contenedor = document.getElementById("mensajes");
    contenedor.classList.add("mostrar");
    contenedor.innerHTML = `
        <div class="mensaje">
            <i class="bi bi-x-circle-fill"></i>
            <h1>${titulo}</h1>
            <p>${mensaje}</p>
            <button class="btn" style="background-color: ${clase} !important;">${txtBtn}</button>

        </div>
    `;
    contenedor.querySelector("button").classList.add(clase);
}

function agregarAcciones(clase, elemento) {
    elemento.querySelector(`button`).addEventListener("click", () => {
        elemento.classList.remove("mostrar");
    });
    elemento.querySelector("i").addEventListener("click", () => {
        elemento.classList.remove("mostrar");
    });
}

export function funcionPanelMensaje(titulo, mensaje, clase, txtBtn) {
    crearMensaje(titulo, mensaje, clase, txtBtn);
    agregarAcciones(clase, document.getElementById("mensajes"));
}



