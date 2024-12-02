const N = 10; // Número de filas y columnas

// Función para inicializar la matriz de butacas
function setup() {
  let idContador = 1; // Iniciar el contador de IDs en 1
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

// Función para sugerir asientos
function suggest(numAsientos) {
  let reservados = new Set([]);
  let filaCorrecta = -1;
  // Verificar
  if (numAsientos > N) return reservados;

  for (let i = N - 1; i >= 0 && filaCorrecta < 0; i--) {
    const fila = butacas[i];
    const asientosLibres = fila.filter((asiento) => !asiento.estado).length;
    if (asientosLibres >= numAsientos) {
      filaCorrecta = i; //Se encontró una fila correcta
      // Marcar Reservados
      let marcados = numAsientos;
      for (let j = 0; j < N && marcados > 0; j++) {
        const e = butacas[i][j];
        if (e.estado === false) {
          //Si el asiento está libre, reservar
          e.estado = true;
          reservados.add(e.id);
          marcados -= 1;
        }
      }
    }
  }

  // Devolver resultado:
  return reservados;
}

// Ejemplos de uso
console.log(suggest(11));
console.log(suggest(1));
console.log(suggest(7));
