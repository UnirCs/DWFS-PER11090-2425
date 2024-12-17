// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

// Función para inicializar la matriz de butacas
function setup({ reservedSeats = [] } = {}) {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < N; j++) {
            // Nuevo asiento
            fila.push({
                id: idContador++,
                estado: reservedSeats.includes(idContador - 1) ? true : false // Estado inicial libre
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

// Inicializar la matriz
export const butacas = setup({ reservedSeats: [100, 95, 94, 93, 92, 91, 87, 86, 85, 73, 72, 70, 69, 67, 66, 51] });

// Imprimir la matriz
console.log('Butacas inicializadas');

// Función para reservar un asiento
export function suggest(numSeats) {
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