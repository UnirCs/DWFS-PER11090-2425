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
            estado: false // Estado inicial libre
        });
    }
    butacas.push(fila);
  }
  return butacas;
}

// Función para reservar n assientos
function suggest(butacas, n) {
  let reserva = new Set();

  for (let i = butacas.length - 1; i >= 0 && n <= butacas.length && reserva.size == 0; i--) {
    let fila = butacas[i];
    let primeraLibre = fila.findIndex(butaca => !butaca.estado);

    // Si hay n butacas libres, haz reserva
    if (fila.length - primeraLibre >= n) {
      for (let j = primeraLibre; n > 0; j++, n--) {
        let butaca = fila[j];

        butaca.estado = true;
        reserva.add(butaca.id);
      }
    }
  }

  return reserva;
}

export {
  setup,
  suggest
}