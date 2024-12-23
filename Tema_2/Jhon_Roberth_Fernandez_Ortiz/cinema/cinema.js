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
                estado: true // Estado inicial libre
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

// Inicializar la matriz
let butacas = setup();
butacas[7][0].estado = false; // Reservar una butaca
butacas[7][1].estado = false;
butacas[7][2].estado = false;
butacas[7][3].estado = false;
butacas[7][4].estado = true;
butacas[7][5].estado = true;
butacas[7][6].estado = false;
butacas[7][7].estado = false;
butacas[7][8].estado = false;
butacas[7][9].estado = false;

// Imprimir la matriz
console.log(butacas);

function suggest(reserva) {
    if(reserva > N) {
        return [];
    }

    let reserveNumber = new Array(reserva).fill(0);
    let availableRows = [];

    butacas.forEach(x => {
        let availableChair = x.map(x => x.estado === true ? 1 : 0)
        availableRows.push(availableChair.toString().includes(reserveNumber.toString()));
    });

    let availableChairs = availableRows.includes(true)
        ? butacas[availableRows.lastIndexOf(true)].filter(x => x.estado === false)
        : [];

    return getConsecutiveChairsIntoAvailableRow(availableChairs.map(x => x.id), reserva);
}

function getConsecutiveChairsIntoAvailableRow(arr, reserva) {
    let consecutiveChairs = [];
    for (let i = 0; i <= arr.length - reserva; i++) {
        let isConsecutive = true;
        for (let j = 1; j < reserva; j++) {
            if (arr[i + j] !== arr[i] + j) {
                isConsecutive = false;
            }
        }
        if (isConsecutive) {
            consecutiveChairs.push(arr.slice(i, i + reserva));
        }
    }
    return consecutiveChairs;
}

console.log(suggest(4)); // [true, true, true, true, true, true, true, true, true, true]

