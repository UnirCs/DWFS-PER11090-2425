// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < N; j++) {
            // Nuevo asiento
            fila.push({
                id: idContador++,
                estado: false // Estado inicial libre
            });
        }
        butacas.push(fila);
    }

    return butacas;
}

/**
 * Busca los asientos consecutivos libres por cada fila empezando desde la fila mas lejana a la pantalla.
 * Si no encuentra suficientes asientos, retorna un array vacío
 */
function findSeatsInRow(row, numSeats) {
    let consecutives = [];
    let bestSeats = [];
    let j = 0;

    while (j < N && bestSeats.length < numSeats) {
        if (!row[j].estado) {
            consecutives.push(row[j].id);
            row[j].estado = true;
            if (consecutives.length === numSeats) {
                bestSeats = [...consecutives];
            }
        } else {
            consecutives = [];
        }
        j++;
    }

    return bestSeats;
}


// Función que reserva las sillas requeridas en una fila
function suggest (numSeats) {

    if (numSeats > N || numSeats <= 0) {
        return new Set();
    }

    let result = [];
    let i = N-1;
    let seatsComplete = false;

    while (i >= 0 && i< N && !seatsComplete) {
        const foundSeats = findSeatsInRow(butacas[i], numSeats);
        if (foundSeats.length === numSeats) {
            result = foundSeats;
            seatsComplete = true;
        }
        i--;
    }
    return new Set(result);
}

let butacas = setup();
console.log("Butacas inicializadas ");


document.addEventListener("DOMContentLoaded", () => {
    const asignarID = document.querySelectorAll(".table-cell");
    asignarID.forEach((element, index) => {
        element.id = index+1;
    });

    console.log("ID's asignados correctamente.");
});


document.addEventListener("DOMContentLoaded", () => {
    const asignarID = document.querySelectorAll(".table-cell");
    asignarID.forEach((element, index) => {
        if (element.id == 86 || element.id == 87 || element.id == 92 || element.id == 96 || element.id == 97) {
            element.classList.remove("table-cell");
            element.classList.add("table-cell-nf");
            butacas.forEach(fila => {
                fila.forEach(asiento => {
                    if (asiento.id == element.id) {
                        asiento.estado = true; // Marcar como ocupado
                    }
                });
            });
        }
    });

    console.log("Asientos pre seleccionados marcados.");
});


// Marcar las butacas sugeridas
document.getElementById("selection-chair")?.addEventListener("input", function (event) {

    // Limpiar selección anterior
    butacas.forEach(fila => {
        fila.forEach(asiento => {
            if (asiento.id != 86 && asiento.id != 87 && asiento.id != 92 && asiento.id != 96 && asiento.id != 97) {
                let seatselected = document.getElementById(asiento.id);
                if (seatselected) {
                    seatselected.classList.remove("table-cell-nf");
                    seatselected.classList.add("table-cell");// Cambiar a libre
                    asiento.estado = false;//Libre
                }
            }
        });
    });

    let selectedSeats = Array.from(  suggest( parseInt(event.target.value ) )  );

    // Marcar asientos sugeridos
    selectedSeats.forEach(seatId => {
        let seatButton = document.getElementById(seatId);
        if (seatButton) {
            seatButton.classList.remove("table-cell"); // Cambiar el estilo al seleccionado
            seatButton.classList.add("table-cell-nf");// Cambiar a ocupado
        }
    });

    console.log("Asientos reservados: " + selectedSeats.join(", "));
});

