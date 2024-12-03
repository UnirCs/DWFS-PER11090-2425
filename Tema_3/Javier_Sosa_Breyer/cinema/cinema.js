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
 * Función para darle valores al asar a un asiento.
 *
 * Devuelve true si la variable x vale entre 1 y 5,
 * devuelve false si la variable x vale entre 6 y 10.
 */
function getRandomStatus() {
    let x = Math.floor((Math.random() * 10) + 1);
    return x <= 5;
}

function suggest(numSeats= 0) {
    const selection = new Set();

    // Retornamos directamente si el número de asientos a buscar supera el tamaño de una fila.
    if (numSeats > N) {
        return selection;
    }

    // El iterador de filas comienza en la última fila.
    for (let row = N-1; row >= 0 && (selection.size < numSeats); row--) {
        selection.clear();
        for (let column = 0; column < N  && (selection.size < numSeats); column++) {
            let seat = butacas[row][column];
            seat.estado === false ? selection.add(seat) : selection.clear();
        }
    }

    console.log(selection);
    return selection;
}

// Inicializar la matriz
let butacas = setup();
