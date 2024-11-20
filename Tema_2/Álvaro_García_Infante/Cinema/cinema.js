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

// Imprimir la matriz
console.log(butacas);


/**
 * Función para sugerir asientos disponibles.
 * Se reserva buscando los asientos consecutivos en la fila más lejana a la pantalla.
 *
 * @param {number} nSeats - Número de asientos consecutivos requeridos.
 * @returns {Set<number>} - Conjunto de IDs de los asientos reservados.
 */
function suggest(nSeats) {
    const tempSeats = new Set();
    if (nSeats <= N) {
        for (let i = N - 1; i >= 0 && tempSeats.size < nSeats; i--) {
            tempSeats.clear(); // Aseguramos que el set está vacío antes de buscar asientos en la fila.
            for (let j = 0; j < N && tempSeats.size < nSeats && N - j >= nSeats - tempSeats.size; j++) {
                if (!seats[i][j].estado) {
                    tempSeats.add(seats[i][j].id);
                } else {
                    tempSeats.clear();
                }
            }
        }
    }
    return tempSeats;
}