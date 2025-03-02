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
        estado: false, // Estado inicial libre
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

function suggest(seats, numSeats) {
  const rowCount = seats.length;
  const colCount = seats[0].length;

  // Si el número de asientos solicitados excede el tamaño máximo de la fila
  if (numSeats > colCount) {
    return new Set();
  }

  // Empezar desde la fila más lejana a la pantalla
  let row = rowCount - 1;
  while (row >= 0) {
    let count = 0;
    let startIdx = -1;
    let col = 0;
    while (col < colCount) {
      if (!seats[row][col].estado) {
        if (count === 0) {
          startIdx = col;
        }
        count++;
        if (count === numSeats) {
          const result = new Set();
          let i = startIdx;
          while (i < startIdx + numSeats) {
            result.add(seats[row][i].id);
            i++;
          }
          return result;
        }
      } else {
        // Reiniciar el conteo si se encuentra un asiento ocupado
        count = 0;
      }
      col++;
    }

    row--;
  }
  // Si no se encuentran suficientes asientos juntos en ninguna fila
  return new Set();
}

// Ejemplo de uso
console.log(suggest(butacas, 5)); // Debería devolver un set con los ids de los asientos

function buscarAsientos() {
  const numAsientos = document.getElementById("num-asientos").value;
  const sugeridos = suggest(butacas, parseInt(numAsientos));
  console.log(sugeridos);

  //limpiar los estilos de asientos anteriores
  const asientos = document.querySelectorAll(".asiento");
  asientos.forEach((asiento) => asiento.classList.remove("selected"));

  //marcar los asientos sugeridos
  sugeridos.forEach((id) => {
    const asientoDiv = document.getElementById("asiento-" + id);
    asientoDiv.classList.add("selected");
  });
}

// creacion de sala dinamicamente
document.addEventListener("DOMContentLoaded", function () {
  const asientosContainer = document.getElementById("asientosContainer");
  const numAsientosPorFila = 10; // Número de asientos por fila
  const numFilas = 10; // Número total de filas (ajusta según sea necesario)

  let fila = 1;
  while (fila <= numFilas) {
    // Crear un nuevo contenedor para cada fila
    const filaContainer = document.createElement("div");
    filaContainer.classList.add("fila");

    let asiento = 1;
    while (asiento <= numAsientosPorFila) {
      // Crear un nuevo div para cada asiento
      const asientoDiv = document.createElement("div");
      asientoDiv.classList.add("asiento");

      // Asignar un id dinámico a cada asiento
      const asientoId = (fila - 1) * numAsientosPorFila + asiento;
      asientoDiv.id = "asiento-" + asientoId;

      // Añadir el asiento al contenedor de la fila
      filaContainer.appendChild(asientoDiv);

      asiento++;
    }

    // Añadir el contenedor de la fila al contenedor principal
    asientosContainer.appendChild(filaContainer);

    fila++;
  }
});
