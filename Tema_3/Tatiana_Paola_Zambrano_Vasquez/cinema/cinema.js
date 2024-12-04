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
 * @modified TATIANA PAOLA ZAMBRANO  - Se agregó un log que muestre el resultado de las butacas.
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
    console.log("Asientos sugeridos: " + Array.from(tempSeats).join(","));
    return tempSeats;
}



// Inicializar la matriz
let butacas = setup();
console.log("Butacas inicializadas: ");


