
document.addEventListener("DOMContentLoaded", () => {

    butacas = document.querySelectorAll(".asiento, .asiento-seleccionado").forEach((butaca, index) => {
        butaca.id = index + 1; // Se asigna un id a cada butaca
    });

});

const N = 5; // Número de filas y columnas

function setup() {
    let idContador = 1;
    let butacas = [];

    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < N; j++) {
            // Nuevo asiento
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
    let butacas = setup();
    let asientosFinales = new Set();
    let asientosValidacion = false;

    if (numButacas > N){
        return new Set();
    }


    for (let i = N - 1; i >= 0; i--) {

        let asientosJuntos = []; // Array con los asientos libres consecutivos por fila

        for (let j = 0; j < N; j++) {
            if (butacas[i][j].estado === false && !asientosValidacion) {

                asientosJuntos.push(butacas[i][j].id);

                if (asientosJuntos.length === numButacas && !asientosValidacion) {

                    for (let l = 0; l < asientosJuntos.length; l++) {
                        let asientoId = asientosJuntos[l];
                        for (let m = 0; m < butacas[i].length; m++) {
                            if (butacas[i][m].id === asientoId) {
                                butacas[i][m].estado = true;
                            }
                        }
                    }
                    asientosFinales = asientosJuntos;
                    asientosValidacion = true;
                    //j=N;
                }
            } else {

                asientosJuntos = [];
            }
        }
    }

    return asientosFinales;
}

document.addEventListener("DOMContentLoaded", () => {
    const butacasSeleccionadas = [];
    const inputReserva = document.getElementById("input");
    const butacas = document.querySelectorAll(".asiento");

    inputReserva.addEventListener("input", () => {

        butacas.forEach(butaca => {
            butaca.style.backgroundColor = "#fdfefe";
        });

        const seleccionadas = suggest(parseInt(inputReserva.value));
        if (seleccionadas) {
            seleccionadas.forEach(butacaId => {
                const butacaOcupada = document.getElementById(butacaId);
                if (butacaOcupada) {
                    butacaOcupada.style.backgroundColor = "#ad4b07";
                }
            });
        }
    });
});

