const N = 10;

function setup() {
  let idCounter = 1;
  let seats = [];
  for (let i = 0; i < N; i++) {
    let row = [];
    for (let j = 0; j < N; j++) {
      row.push({id: idCounter++, state: false}); //false -> libre
    }
    seats.push(row);
  }
  return seats;
}

/**
 * Busca una secuencia de asientos consecutivos libres en una fila específica.
 * Si no encuentra suficientes asientos, retorna un array vacío
 */
function findConsecutiveSeats(row, numSeats) {
  let consecutives = [];
  let bestConsecutives = [];
  let i = 0;

  while (i < N && bestConsecutives.length < numSeats) {
    if (!row[i].state) {
      consecutives.push({id: row[i].id, position: i});
      if (consecutives.length === numSeats) {
        bestConsecutives = [...consecutives];
      }
    } else {
      consecutives = [];
    }
    i++;
  }

  return bestConsecutives;
}

/**
 * Sugiere y reserva una secuencia de asientos consecutivos libres.
 * Retorna los asientos reservados o un conjunto vacío si no hay disponibles
 */
function suggest(seats, numSeats) {
  if (numSeats > N || numSeats <= 0) {
    return new Set();
  }

  let result = [];
  let i = N - 1;
  let found = false;
  let rowFound = -1;

  // Buscar en las filas desde atrás hacia adelante
  while (i >= 0 && !found) {
    const foundSeats = findConsecutiveSeats(seats[i], numSeats);
    if (foundSeats.length === numSeats) {
      result = foundSeats;
      rowFound = i;
      found = true;
    }
    i--;
  }

  // Si encontramos asientos, los marcamos como ocupados
  if (found && rowFound !== -1) {
    result.forEach(seat => {
      seats[rowFound][seat.position].state = true;
    });
    return new Set(result.map(seat => seat.id));// Retornamos solo los IDs de los asientos
  }

  return new Set();
}

let seats = setup();

function handleSeats(value) {
  let numSeats = parseInt(value);

  if (!isNaN(numSeats)) {
    let suggestedSeats = suggest(seats, numSeats);
    console.log('Asientos reservados:', suggestedSeats);
  }
}
