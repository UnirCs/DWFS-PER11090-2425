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

// Función para reservar un asiento
function suggest(numSeats) {
  if (numSeats > N) {
    return new Set();
  }
  
  let seats = [];
  let done = false;
  for (let i = N - 1; i >= 0 && !done; i--) {
    for (let j = N - 1; j >= 0 && !done; j--) {
      if (butacas[i][j].estado === false) {
        seats.push(butacas[i][j]);
        done = seats.length === numSeats
      } else {
        seats = [];
      }
    }
    if (!done) seats = []
  }

  return new Set(seats.map(seat => seat.id));
}

const seatsSelected = suggest(10);

console.log(seatsSelected)