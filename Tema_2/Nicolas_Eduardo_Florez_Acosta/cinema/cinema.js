// Función para inicializar la matriz de butacas
function setup(N) {
  let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
  let butacas = [];

  for (let i = 0; i < N; i++) {
    // Nueva fila
    let fila = [];
    for (let j = 0; j < N; j++) {
      // Nuevo asiento
      fila.push({
        id: idContador++,
        estado: false, // Estado inicial libre
      });
    }
    butacas.push(fila);
  }
  return butacas;
}

function suggest(butacas, nOfSeats) {
  let seats = [];

  // Se realiza una copia de las butacas, para evitar que cualquier operación con las butacas
  // modifique su valor original, lo que mantiene esta función como una función pura.
  const butacasClone = [...butacas];

  // Se busca, de todas las filas, cuales tienen la cantidad de butacas con estado disponible (true)
  const availableRows = butacasClone.filter(row => row.filter(seat => seat.estado).length >= nOfSeats);

  if (availableRows.length === 0) return seats;

  for (row of availableRows) {
    for (let index = 0; index < row.length; index++) {
      // Se dividen los asientos de cada fila en grupos de "nOfSeats"
      const seatsGroup = row.slice(index, index + nOfSeats);
      const rowHasSeatsAvailable = seatsGroup.length >= nOfSeats && seatsGroup.every((seat) => seat.estado);
      if (rowHasSeatsAvailable) seats = seatsGroup;
    }
  }

  return seats.map((seat) => seat.id);
}

let butacas = setup(5);
suggest(butacas, 3);
