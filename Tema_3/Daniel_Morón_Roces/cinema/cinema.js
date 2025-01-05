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

// Inicializar la matriz
let butacas = setup();

/**
 * Returns the number of free seats given a specific row.
 *
 * @param row the identifier of the row
 * @returns {number} the amount of free seats.
 */
function freeSeats(row) {
    let freeSeats = 0;
    for (let i = 0; i < row.length; i++) {
        freeSeats += (row[i].estado === false);
    }

    return freeSeats
}

/**
 * If the number of requested seats exceeds the maximum row size, the function should return an empty set.
 * If no row has enough adjacent seats available, the function should return an empty set.
 * The search for adjacent seats will start in the row farthest from the screen, so if multiple rows can
 * accommodate the requested number of seats, the row farthest from the screen will always be chosen.
 * The result should be a Set containing the IDs of the pre-selected seats.
 *
 * @param numReservedSeats the number of seats to be reserved
 * @returns {Set<any>|Set<*>} a Set containing the IDs of the pre-selected seats
 */
function suggest(numReservedSeats) {
    if (numReservedSeats > N) {
        return new Set();
    }

    let selectedSeats = new Set([]);
    let validRow = false;

    // Se termina el recorrido una vez encontramos una fila válida para el número de asientos solicitado revisando desde
    // la última fila de la matriz.
    for (let i = N-1; i >= 0 && !validRow; i--) {
        if (freeSeats(butacas[i]) >= numReservedSeats) {
            // Si el número de asientos solicitado es menor o igual al que cabe en la fila "i", tenemos una fila válida.
            validRow = true;
            let assignedSeats = numReservedSeats;

            for (let j = 0; j < N && assignedSeats > 0; j++) {
                if (butacas[i][j].estado == false) {
                    butacas[i][j].estado = true;
                    selectedSeats.add(butacas[i][j].id);
                    assignedSeats -= 1;
                }
            }
        }
    }

    console.log('Asientos reservados:', selectedSeats);
    return selectedSeats;
}

/*
// Llenamos la sala de cine 🎬
// Al superar el número de asientos de una fila, retorna un set vacío.
console.log(suggest(11));

// Se llena la sala cumpliendo las condiciones del enunciado.
console.log(suggest(8));
console.log(suggest(8));
console.log(suggest(1));
console.log(suggest(2));
console.log(suggest(10));
console.log(suggest(10));
console.log(suggest(10));
console.log(suggest(10));
console.log(suggest(10));
console.log(suggest(10));
console.log(suggest(10));
console.log(suggest(10));
console.log(suggest(1));

// Una vez está la sala llena, se devuelve un set vacío.
console.log(suggest(1));*/