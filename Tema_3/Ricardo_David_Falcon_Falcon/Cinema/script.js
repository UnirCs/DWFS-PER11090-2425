  const N = 10; // Número de filas y columnas

  // Función para inicializar la matriz de butacas
  function setup() {
    let idContador = 1;
    let butacas = [];

    for (let i = 0; i < N; i++) {
      let fila = [];
      for (let j = 0; j < N; j++) {
        fila.push({
          id: idContador++,
          estado: false, // Estado inicial libre
        });
      }
      butacas.push(fila);
    }

    return butacas;
  }

  // Función para sugerir asientos juntos
  function suggest(butacas, numAsientos) {
    // Validar que el número de asientos solicitados no sea mayor al tamaño de la fila
    if (numAsientos > N) {
      return new Set();
    }

    let asientosSeleccionados = new Set(); // Conjunto para almacenar los asientos seleccionados
    let encontrado = false; // Bandera para verificar si se encontraron los asientos

    // Iterar sobre las filas desde la última hacia la primera
    for (let fila = butacas.length - 1; fila >= 0 && !encontrado; fila--) {
      let filas = butacas[fila];
      let contadorConsecutivos = 0;
      let inicio = -1;

      // Iterar sobre cada columna en la fila actual
      for (let columna = 0; columna < filas.length; columna++) {
        if (!filas[columna].estado) {
          contadorConsecutivos++;
          if (inicio === -1) inicio = columna; // Registrar el inicio de la secuencia
        } else {
          contadorConsecutivos = 0;
          inicio = -1;
        }

        // Verificar si se encontraron los asientos consecutivos necesarios
        if (contadorConsecutivos === numAsientos) {
          // Agregar los IDs de los asientos seleccionados al conjunto
          for (let k = 0; k < numAsientos; k++) {
            asientosSeleccionados.add(filas[inicio + k].id);
          }

          encontrado = true; // Indicar que ya se encontraron los asientos
        }
      }
    }

    // Marcar los asientos seleccionados como ocupados
    if (encontrado) {
      for (let fila of butacas) {
        for (let asiento of fila) {
          if (asientosSeleccionados.has(asiento.id)) {
            asiento.estado = true;
          }
        }
      }
    }

    // Devolver el conjunto de IDs de los asientos seleccionados
    return asientosSeleccionados;
  }

  // Inicializar la matriz
  let butacas = setup();




function sugerir(numeroAsiento) {
  const asientos = suggest(butacas, +numeroAsiento);

  if (asientos.size > 0) {
    const asientosSugeridos = Array.from(asientos).join(', ');
    console.log(`Asientos sugeridos: ${asientosSugeridos}`);
  } else {
    console.log('No hay asientos disponibles para la cantidad solicitada.');
  }
}

