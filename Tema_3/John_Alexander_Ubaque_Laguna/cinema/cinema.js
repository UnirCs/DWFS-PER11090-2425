// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas


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

//recorre cada fila de la matriz
function suggest(numSeats) {
    let matrix = setup();
    let result = new Set();
    if (numSeats>10){
        return result;
    }

    for (let i = matrix.length - 1; i >= 0 ||  result.size === 0; i--) {
        findSeatsInaRow(matrix[i], numSeats,matrix[i].length,result);
    }
    console.log(result);
    return result;

}

function findSeatsInaRow(row, numSeats, seatsPerRow, ids) {
    let consecutiveSeats = 0;

    for (let i = seatsPerRow - 1; i >= 0; i--) {
        if (!row[i].estado) {
            consecutiveSeats++;
            ids.add(row[i].id);
            if (consecutiveSeats === numSeats) {
                for (let j = i; j < i + numSeats; j++) {
                    row[j].estado = true;
                }
                i=-1;
            }
        } else {
            consecutiveSeats = 0;
            ids.clear();
        }
    }
    if (consecutiveSeats < numSeats) {
        ids.clear();
    }
}


