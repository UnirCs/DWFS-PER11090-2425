// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

// Función para inicializar la matriz de butacas
function setup() {
    let butacas = [];
    let idContador = 1; // Comenzar el contador de IDs desde 1

    for (let i = 0; i < N; i++) {
        let fila = [];
        for (let j = 0; j < N; j++) {
            fila.push({
                id: idContador++, // ID numérico secuencial
                ocupado: false // Estado inicial libre
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

// Función para buscar asientos
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
function suggest(numSeats, butacas) {
    if (numSeats > N || numSeats <= 0) {
        return new Set();
    }
    let result = [];
    let i = N - 1;
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


// Inicializar la matriz
let butacas = setup();

butacas[4][5].estado = true;
butacas[9][5].estado = true;
butacas[9][6].estado = true;
butacas[8][2].estado = true;
butacas[7][0].estado = true;
butacas[6][5].estado = true;


// Se reservan 3 filas cada una de a 5 asientos
console.log(suggest(5, butacas));
console.log(suggest(7, butacas));
console.log(suggest(3, butacas));