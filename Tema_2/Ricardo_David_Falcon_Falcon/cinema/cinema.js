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

  //coloco que todas las filas menos la primera fila estén ocupadas
  /*   for (let i = 1; i < N; i++) {
    for (let j = 0; j < N; j++) {
      butacas[i][j].estado = true;
    }
  } */
  return butacas;
}

// Función para sugerir asientos juntos
function suggest(butacas, numAsientos) {
  //Se valida que el número de asientos solicitados no sea mayor al número de filas
  if (numAsientos > N) {
    return new Set();
  }
  //Iterar sobre las filas de `butacas` desde la última hasta la primera (buscando en las filas traseras primero)
  for (let fila = butacas.length - 1; fila >= 0; fila--) {
    // Obtener la fila actual
    let filas = butacas[fila];
    // Contador de asientos libres consecutivos
    let contadorConsecutivos = 0;

    // Almacenar el índice de inicio de la secuencia de asientos libres consecutivos
    let inicio = -1;

    // Iterar sobre cada asiento (columna) en la fila actual
    for (let columna = 0; columna < filas.length; columna++) {
      //Verifico si el estado es falso
      if (!filas[columna].estado) {
        contadorConsecutivos++;
        // Registrar el inicio de la secuencia si no se ha establecido
        if (inicio === -1) inicio = columna;
      } else {
        contadorConsecutivos = 0;
        inicio = -1;
      }

      if (contadorConsecutivos === numAsientos) {
        const asientosSeleccionados = new Set();
        for (let k = 0; k < numAsientos; k++) {
          asientosSeleccionados.add(filas[inicio + k].id);
          filas[inicio + k].estado = true; // Cambia el estado del asiento a true
        }
        return asientosSeleccionados;
      }
    }
  }

  return new Set();
}

// Inicializar la matriz
let butacas = setup();

// Prueba de la función suggest
console.log(suggest(butacas, 1));
console.log(suggest(butacas, 2));
console.log(suggest(butacas, 3));
console.log(suggest(butacas, 4));
console.log(suggest(butacas, 5));
console.log(suggest(butacas, 6));
console.log(suggest(butacas, 7));

console.log(butacas);
