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


function suggest(numSeats) {
    let butacas = setup();
    const numColumns = butacas[0].length;

    if (numSeats > numColumns) {
        return new Set();
    }

    for (let row = butacas.length - 1; row >= 0; row--) {
        let availableSeats = [];
        for (let col = 0; col < numColumns; col++) {
            if (butacas[row][col].state) {
                continue;
            }

            availableSeats.push(butacas[row][col].id);

            if (availableSeats.length === numSeats) {
                return new Set(availableSeats);
            }
        }
    }

    return new Set();
}

console.log(suggest(9));