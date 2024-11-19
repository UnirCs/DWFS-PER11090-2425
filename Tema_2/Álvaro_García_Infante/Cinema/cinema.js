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

function suggest(numberOfSeats, rows) {
    const maxRowSize = rows[0].length;
    if (numberOfSeats > maxRowSize) {
        return new Set();
    }

    for (let i = rows.length - 1; i >= 0; i--) {
        const row = rows[i];
        let consecutiveSeats = 0;
        let startIndex = -1;

        for (let j = 0; j < row.length; j++) {
            if (row[j] === 0) {
                if (consecutiveSeats === 0) {
                    startIndex = j;
                }
                consecutiveSeats++;
            } else {
                consecutiveSeats = 0;
            }

            if (consecutiveSeats === numberOfSeats) {
                const seatIds = new Set();
                for (let k = startIndex; k < startIndex + numberOfSeats; k++) {
                    seatIds.add(`Row${i + 1}-Seat${k + 1}`);
                }
                return seatIds;
            }
        }
    }

    return new Set();
}