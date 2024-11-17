let seats = [];

// Definir el tamaño de la matriz de butacas
const N = 6; // Número de filas y columnas

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

// Devuelve un Set con los id de los asientos contiguos disponibles
function suggest(seats, numberOfSeats) {
  const seatIds = new Set();

  // Si el número de asientos solicitados excede el tamaño máximo de la fila, devolver set vacío
  if (numberOfSeats > N) return new Set();

  // Itera partiendo desde la última fila
  for (let row = N - 1; row >= 0; row--) {

    seatIds.clear();

    // Recorre cada asiento en la fila actual
    for (let seat = 0; seat < N; seat++) {

      // Si el asiento esta libre
      if (seats[row][seat].estado === false) {
        // Se agrega su id al set
        seatIds.add(seats[row][seat].id);
        // Si se encontraron los asientos consecutivos que se buscaban, retorna el set con los id's
        if (seatIds.size === numberOfSeats) {
          return seatIds;
        }

      } else {
        // Asiento ocupado, inicializa el Set
        seatIds.clear();
      }
    }
  }
  // No se encontro el numero requerido de asientos juntos, devolver set vacío
  return new Set();
}

function reserveSeat(seats, idSeat) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (seats[i][j].id === idSeat) {
        seats[i][j].estado = true;
        return true;
      }
    }
  }
  return false;
}

function confirmReservation() {
  const numSeats = parseInt(document.getElementById("num-seats").value);
  if (isNaN(numSeats) || numSeats <= 0) return;
  
  const free = suggest(seats, numSeats);
  
  if (free.size === 0) {
    alert(`No se encontraron ${numSeats} asientos contiguos.`)
    return;
  }
  
  // Establece las reservas
  let seatElement;
  free.forEach((id) => {
    if (reserveSeat(seats, id)) {
      seatElement = document.getElementById("r"+id.toString());
      if (seatElement) {
        seatElement.className = "seat reserved";
      } else {
          console.error(`No se encontró el asiento con id: r${id}`);
      }   
    } else {
      console.error(`No se encontró el asiento con id: ${id}`);
    }
  });
  //console.log(seats);
}
