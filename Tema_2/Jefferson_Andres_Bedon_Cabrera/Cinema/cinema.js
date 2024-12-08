const SIZE = 10;

function initializeSeats() {
    let seatId = 1;
    let seatLayout = [];
    for (let i = 0; i < SIZE; i++) {
        let row = [];
        for (let j = 0; j < SIZE; j++) {
            row.push({id: seatId++, available: false});
        }
        seatLayout.push(row);
    }
    return seatLayout;
}

/**
 * * Busca una secuencia de asientos consecutivos libres en una fila específica.
 * * Si no encuentra suficientes asientos, retorna un array vacío
 */
function searchConsecutiveFreeSeats(row, requiredSeats) {
    let currentSequence = [];
    let bestSequence = [];
    let index = 0;

    while (index < SIZE && bestSequence.length < requiredSeats) {
        if (!row[index].available) {
            currentSequence.push(row[index].id);
            if (currentSequence.length === requiredSeats) {
                bestSequence = [...currentSequence];
            }
        } else {
            currentSequence = [];
        }
        index++;
    }

    return bestSequence;
}

/**
 * * Sugiere una secuencia de asientos consecutivos libres.
 * * Donde acientos es la matriz de asientos del cine
 * * requiredSeats es la cantidad de asientos consecutivos que se necesitan
 * * Si no encuentra suficientes asientos o el número pedido es inválido, retorna un conjunto vacío
 */
function suggest(acientos, requiredSeats) {
    if (requiredSeats > SIZE || requiredSeats <= 0) {
        return new Set();
    }

    let result = [];
    let i = SIZE - 1;
    let found = false;

    while (i >= 0 && !found) {
        const foundSeats = searchConsecutiveFreeSeats(acientos[i], requiredSeats);
        if (foundSeats.length === requiredSeats) {
            result = foundSeats;
            found = true;
        }
        i--;
    }

    return new Set(result);
}

// Inicializamos los asientos
let acientos = initializeSeats();
// Colocamos algunos asientos como ocupados:
acientos[9][0].available = true;
acientos[9][1].available = true;
acientos[9][2].available = true;
acientos[9][3].available = true;
acientos[9][4].available = true;
acientos[9][5].available = true;
acientos[9][6].available = true;
acientos[9][7].available = true;
acientos[9][8].available = true;
acientos[6][2].available = true;
acientos[8][0].available = true;

// Probamos la función
console.log('Prueba',suggest(acientos, 5));