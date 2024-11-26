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

// Función que actualiza el estado de las butacas
function actualizarButacas(asientosSugeridos) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (asientosSugeridos.includes(butacas[i][j].id)) {
        butacas[i][j].estado = true;
      }
    }
  }
}

// Función que sugiere asientos contiguos empezando por la fila más lejana a la pantalla
function suggest(numeroAsientos) {
  let asientosSugeridos = [];
  let contador = 0;

  // Si el número de asientos solicitados excede el tamaño máximo de la fila, la función debe devolver un set vacío.
  if (numeroAsientos > N) {
    return asientosSugeridos;
  }

  // Se recorren los asientos empezando por la ultima butaca de la fila más lejana.
  for (let i = N - 1; i >= 0; i--) {
    for (let j = 0; j < N; j++) {
      if (contador < numeroAsientos) {
        if (!butacas[i][j].estado) {
          contador++;
          asientosSugeridos.push(butacas[i][j].id);
        } else {
          contador = 0;
          asientosSugeridos = [];
        }
      }
    }
  }

  // Actualizar el estado de las butacas
  if (asientosSugeridos.length > 0) {
    actualizarButacas(asientosSugeridos);
  }

  console.log("Asientos reservados: " + asientosSugeridos);
  // Si en ninguna fila hay suficientes asientos disponibles juntos, la función debe devolver un set vacío.
  return asientosSugeridos;
}

// Imprimir la matriz
console.log(butacas);

// Reserva correcta 5 asientos
suggest(5);
console.log(butacas);

// Reserva correcta 3 asientos mas
suggest(3);
console.log(butacas);

// Reserva correcta 8 asientos mas
suggest(8);
console.log(butacas);

// Error -> vacio
//console.log(suggest(11));
