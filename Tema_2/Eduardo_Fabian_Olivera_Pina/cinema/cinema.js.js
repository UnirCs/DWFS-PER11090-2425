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

function suggest(seats, numberOfSeats) {
  const seatIds = new Set();
  let foundSeats = false; // Si se encontraron los asientos consecutivos

  // Si el número de asientos solicitados excede el tamaño máximo de la fila, devolver set vacío
  if (numberOfSeats > N) return new Set();

  // itera partiendo desde la última fila
  for (let row = N - 1; row >= 0 && !foundSeats; row--) {

    seatIds.clear();  // limpiar los IDs de asientos previos

    // Recorre cada asiento en la fila actual
    for (let seat = 0; seat < N && !foundSeats; seat++) {

      // Si el asiento está libre
      if (seats[row][seat].estado === false) {
        seatIds.add(seats[row][seat].id);  // agrega su id al set        
        if (seatIds.size === numberOfSeats) { // si se encontraron los asientos consecutivos que se buscaban
          foundSeats = true;
        }

      } else {
        seatIds.clear(); // Asiento ocupado, inicializa el Set
      }
    }
  }
  return foundSeats ? seatIds : new Set();  
}

function reserveSeat(seats, idSeat) {
  let seatReserved  = false
  for (let i = 0; i < N && !seatReserved ; i++) {
    for (let j = 0; j < N && !seatReserved ; j++) {
      if (seats[i][j].id === idSeat) {
        seats[i][j].estado = true;
        seatReserved  = true;
      }
    }
  }
  return seatReserved ;
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
