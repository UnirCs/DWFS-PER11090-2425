// Definir el tamaño de la matriz de butacas
const inputAsientos = document.getElementById('cantidad-asientos');
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

function suggest(butacas, asientos) {
  let numeroFilas = butacas.length;
  let resultado = null;
  let encontrado = false;

  for (let i = numeroFilas - 1; i >= 0 && !encontrado; i--) {
    let consecutivos = [];
    for (let j = 0; j < numeroFilas && !encontrado; j++) {
      if (!butacas[i][j].estado) {
        consecutivos.push(butacas[i][j].id);
        if (consecutivos.length === asientos) {
          resultado = new Set(consecutivos);
          encontrado = true;
        }
      } else {
        consecutivos = [];
      }
    }
  }
  return resultado || new Set();
}

// Inicializar la matriz
let butacas = setup();

inputAsientos.oninput = function() {
  const asientosDisponibles = suggest(butacas, parseInt(inputAsientos.value));
  console.log(asientosDisponibles)
}

