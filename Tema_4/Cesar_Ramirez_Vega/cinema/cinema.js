// Definir el tamaño de la matriz de butacas
const ROWS = 5;
const SEATS = 10;

// Función para inicializar la matriz de butacas
function setup() {
  let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
  let butacas = [];

  for (let i = 0; i < ROWS; i++) {
    // Nueva fila
    let fila = [];
    for (let j = 0; j < SEATS; j++) {
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

  if (numRequestedSeats <= 0 || numRequestedSeats > SEATS) {
    return suggestedSeats;
  }

  for (let row = ROWS - 1; row >= 0 && suggestedSeats.size < numRequestedSeats; row--) {
    suggestedSeats.clear();
    for (let seat = 0; seat < SEATS && suggestedSeats.size < numRequestedSeats && SEATS - seat >= numRequestedSeats - suggestedSeats.size; seat++) {
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

const seatsContainer = document.querySelector(".cinema-seats-container");

// managar el evento de submit del formulario
document.getElementById("frm-seats-reservation")?.addEventListener("submit", function (event) {
  event.preventDefault();

  const seats = seatsContainer.querySelectorAll(".cinema-seat.selected");
  const selectedSeats = [...seats].map(seat => seat.id);

  alert(`Asientos reservados: ${selectedSeats.join(", ")}`);
});

// asignar IDs a los asientos
seatsContainer.querySelectorAll(".cinema-seat").forEach((seat, index) => {
  seat.id = index + 1;
});

// simular de butacas ocupadas
butacas[4][0].estado = true;
butacas[4][3].estado = true;
butacas[4][4].estado = true;
butacas[4][7].estado = true;
butacas[4][8].estado = true;
butacas[3][4].estado = true;
butacas[3][5].estado = true;

// marcar las butacas ocupadas
butacas.forEach((row) => {
  row.forEach(({ id, estado }) => {
    if (estado === true) {
      document.getElementById(id)?.classList.add("occupied");
    }
  });
});

// marcar las butacas sugeridas
document.getElementById("txt-seats-reservation")?.addEventListener("input", function (event) {
  const suggestedSeats = [...suggest(event.target.value)];
  console.log("Asientos sugeridas: ", suggestedSeats.join(", "));

  document.querySelectorAll(".cinema-seat.selected").forEach(seat => {
    seat.classList.remove("selected");
  });

  suggestedSeats.forEach(seatId => {
    document.getElementById(seatId).classList.add("selected");
  });
});
