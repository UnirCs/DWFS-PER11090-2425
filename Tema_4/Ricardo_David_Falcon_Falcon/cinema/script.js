const N = 10; // Número de filas y columnas

// Función para inicializar la matriz de butacas
function setup() {
  let idContador = 1;
  let butacas = [];

  for (let i = 0; i < N; i++) {
    let fila = [];
    for (let j = 0; j < N; j++) {
      fila.push({
        id: idContador++, // ID único para cada asiento
        estado: false, // Estado inicial libre
      });
    }
    butacas.push(fila);
  }

  return butacas;
}

// Inicializar la matriz
let butacas = setup();

// Nueva función suggest (adaptada con las variables existentes)
function suggest(numAsientos) {
  const tempSeats = new Set(); // Temporal para almacenar los asientos sugeridos

  if (numAsientos <= N) {
    // Iterar desde la última fila hacia la primera
    for (let i = N - 1; i >= 0 && tempSeats.size < numAsientos; i--) {
      tempSeats.clear(); // Limpiar el conjunto para cada fila

      // Iterar por cada asiento en la fila
      for (
        let j = 0;
        j < N &&
        tempSeats.size < numAsientos &&
        N - j >= numAsientos - tempSeats.size;
        j++
      ) {
        if (!butacas[i][j].estado) {
          tempSeats.add(butacas[i][j].id); // Añadir el asiento si está libre
        } else {
          tempSeats.clear(); // Reiniciar si un asiento está ocupado
        }
      }
    }
  }

  return tempSeats; // Devolver el conjunto de asientos sugeridos
}

// Función para sugerir y actualizar visualmente los asientos
function sugerir(numeroAsiento) {
  const numAsientos = parseInt(numeroAsiento, 10);

  if (isNaN(numAsientos) || numAsientos <= 0) {
    // Limpiar todas las reservas si el número no es válido
    document.querySelectorAll(".seat").forEach((seat) => {
      seat.classList.remove("reserved");
    });
    return;
  }

  // Obtener los IDs de los asientos sugeridos
  const asientos = suggest(numAsientos);

  // Limpiar la clase 'reserved' de todos los asientos antes de aplicar la nueva selección
  document.querySelectorAll(".seat").forEach((seat) => {
    seat.classList.remove("reserved");
  });

  if (asientos.size > 0) {
    asientos.forEach((asientoId) => {
      const asiento = document.getElementById(asientoId);
      if (asiento) {
        asiento.classList.add("reserved"); // Añadir clase para pintar los asientos seleccionados
      }
    });
  } else {
    console.log("No hay asientos disponibles para la cantidad solicitada.");
  }
}

// Función para asignar IDs únicos dinámicamente al DOM de los asientos
function asignarIdsAsientos() {
  const filas = document.querySelectorAll(".row"); // Todas las filas de butacas
  let idContador = 1;

  filas.forEach((fila) => {
    const asientos = fila.querySelectorAll(".seat"); // Todas las butacas de la fila
    asientos.forEach((asiento) => {
      asiento.id = idContador++; // Asignar un ID único incremental
    });
  });
}

// Asignar IDs a los asientos y preparar el evento del input
document.addEventListener("DOMContentLoaded", () => {
  asignarIdsAsientos(); // Asigna IDs a los asientos al cargar la página

  // Referencia al input por su ID
  const inputAsientos = document.getElementById("numAsientos");

  // Agregar un event listener al input
  inputAsientos.addEventListener("input", function () {
    const numeroAsientos = parseInt(this.value, 10); // Obtiene el valor del input
    sugerir(numeroAsientos); // Llama a la función sugerir
  });
});
