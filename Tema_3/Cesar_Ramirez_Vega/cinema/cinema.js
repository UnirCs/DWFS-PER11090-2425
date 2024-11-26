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

console.log('Butacas inicializadas');


// --------------------------------

function suggest(numRequestedSeats) {
  let suggestedSeats = new Set();

  if (numRequestedSeats <= 0 || numRequestedSeats > N) {
    return suggestedSeats;
  }

  for (let row = N - 1; row >= 0 && suggestedSeats.size < numRequestedSeats; row--) {
    suggestedSeats.clear();
    for (let seat = 0; seat < N && suggestedSeats.size < numRequestedSeats && N - seat >= numRequestedSeats - suggestedSeats.size; seat++) {
      const { id, estado } = butacas[row][seat];

      if (!estado) {
        suggestedSeats.add(id);
      } else {
        suggestedSeats.clear();
      }
    }
  }

  return suggestedSeats;
}

// --------------------------------

function printSeatsAsGrid(seats) {
  console.log('');
  seats.forEach(row => {
    let rowStr = '';
    row.forEach(seat => {
      rowStr += ' ' + (seat.estado ? 'xx' : seat.id.toString().padStart(2, '0')) + ' ';
    });
    console.log(rowStr);
  });
  console.log('');
}