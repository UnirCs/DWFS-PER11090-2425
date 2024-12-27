const filas = 5;
const columnas = 15;

function setup() {
    let idContador = 1;
    let butacas = [];

    for (let i = 0; i < filas; i++) {
        let fila = [];
        for (let j = 0; j < columnas; j++) {
            fila.push({
                id: idContador++,
                estado: false
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

function suggest(numButacas) {
    let butacasSeleccionados = new Set();

    for (let i = (butacas.length) - 1; i >= 0; i--) {
        let fila = butacas[i];
        if (numButacas <= fila.length) {
            let libres = 0;

            for (let j = 0; j < fila.length; j++) {
                if (butacasSeleccionados.size !== numButacas) {
                    if (!fila[j].estado) {
                        libres++;
                        butacasSeleccionados.add(fila[j].id);
                    } else {
                        libres = 0;
                        butacasSeleccionados.clear();
                    }
                }
            }
        }
    }

    return butacasSeleccionados;
}

var butacas = setup();

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("butacas").addEventListener("input", obtenerDatos);
});

function obtenerDatos() {
    const cantidad = Number.parseInt(document.getElementById("butacas").value);
    console.log(suggest(cantidad));
}