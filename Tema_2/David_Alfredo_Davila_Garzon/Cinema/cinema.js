const N = 10;

function setup() {
  let idCounter = 1;
  let seats = [];
  for (let i = 0; i < N; i++) {
    let row = [];
    for (let j = 0; j < N; j++) {
      row.push({id: idCounter++, state: false});
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
  let j = 0;

  while (j < N && bestConsecutives.length < numSeats) {
    if (!row[j].state) {
      consecutives.push(row[j].id);
      if (consecutives.length === numSeats) {
        bestConsecutives = [...consecutives];
      }
    } else {
      consecutives = [];
    }
    j++;
  }

  return bestConsecutives;
}

/**
 * Sugiere una secuencia de asientos consecutivos libres.
 * Donde seats es la matriz de asientos del cine
 *       numSeats es la cantidad de asientos consecutivos que se necesitan
 * Si no encuentra suficientes asientos o el número pedido es inválido, retorna un conjunto vacío
 */
function suggest(seats, numSeats) {
  if (numSeats > N || numSeats <= 0) {
    return new Set();
  }
  let result = [];
  let i = N - 1;
  let found = false;

  while (i >= 0 && !found) {
    const foundSeats = findConsecutiveSeats(seats[i], numSeats);
    if (foundSeats.length === numSeats) {
      result = foundSeats;
      found = true;
    }
    i--;
  }

  return new Set(result);
}

let seats = setup();
// Coloco algunos asientos como ocupados:
seats[9][5].state = true;
seats[9][6].state = true;
seats[8][2].state = true;
seats[7][0].state = true;

console.log(suggest(seats, 5));