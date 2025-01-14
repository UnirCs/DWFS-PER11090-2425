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
 * Función para reservar asientos.
 * Se comienza reservando los asientos de la fila más lejana a la pantalla.
 *
 * @author JESUS PEREZ MELERO
 * @modified TATIANA PAOLA ZAMBRANO  - Se ajusta a las variables
 * @param {number} nSeats - Número de asientos a reservar.
 * @returns {Set<number>} - Conjunto de IDs de los asientos reservados.
 */
function suggest(nSeats) {
    const tempSeats = new Set();
    if (nSeats <= N) {
        for (let i = N - 1; i >= 0 && tempSeats.size < nSeats; i--) {
            tempSeats.clear(); // Aseguramos que el set está vacío antes de buscar asientos en la fila.
            for (let j = 0; j < N && tempSeats.size < nSeats && N - j >= nSeats - tempSeats.size; j++) {
                if (!butacas[i][j].estado) {
                    tempSeats.add(butacas[i][j].id);
                } else {
                    tempSeats.clear();
                }
            }
        }
    }
    return tempSeats;
}


// Inicializar la matriz
let butacas = setup();
console.log("Butacas inicializadas: ");


//Asignar los id a cada uno de los asientos. de forma dinámica (mediante el DOM).
document.addEventListener("DOMContentLoaded", () => {
    // Selecciona todos los botones dentro de las filas de asientos
    const seatButtons = document.querySelectorAll('.seat-row button');

    // Asignar un ID único a cada asiento, empezando en 51
    seatButtons.forEach((button, index) => {
        button.id =index + 51;
    });

    console.log("IDs asignados correctamente.");
});


// Asientos ocupados
butacas[8][7].estado=true
butacas[8][8].estado=true

butacas[9][7].estado=true
butacas[9][8].estado=true
butacas[9][9].estado=true


// Marcar las butacas sugeridas
document.getElementById("num-seats")?.addEventListener("input", function (event) {
    let suggestedSeats = Array.from(suggest(event.target.value));

    // Limpiar selección anterior
    document.querySelectorAll(".selected").forEach(seat => {
        seat.classList.remove("selected","btn-primary");
        seat.classList.add("btn-outline-primary"); // Volver a estilo original
    });

    // Marcar asientos sugeridos
    suggestedSeats.forEach(seatId => {
        let seatButton = document.getElementById(seatId);
        if (seatButton) {
            seatButton.classList.add("selected","btn-primary");// Cambiar a ocupado
            seatButton.classList.remove("btn-outline-primary"); // Cambiar el estilo al seleccionado
        }
    });
    console.log("Asientos por reservar: " + suggestedSeats.join(", "));
});




