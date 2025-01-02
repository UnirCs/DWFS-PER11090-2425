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
butacas = setup();

// Imprimir la matriz
//console.log(butacas);

const personas = 6;

function seleccion(butacas, personas) {

  if (personas > butacas[0].length) {
    return new Set();
  }

  let reservaAsientos = new Set();
  let encontrado = false; 

  for (let i = butacas.length - 1; i >= 0 && !encontrado; i--) {
    let fila = butacas[i];
    let asientosConsecutivos = 0;
    for (let j = fila.length - 1; j >= 0 && !encontrado; j--) {
      if (!fila[j].estado) { 
        asientosConsecutivos++;
        reservaAsientos.add(fila[j].id);
        if (asientosConsecutivos === personas) {
          encontrado = true;  
        }
      } else { 
        reservaAsientos.clear();
        asientosConsecutivos = 0;
      }
    }
  }
  actualizarAsientos(butacas, reservaAsientos);
  return reservaAsientos;
}

function actualizarAsientos(butacas, reserva) {
  for (let i = butacas.length - 1; i >= 0; i--) {
    let fila = butacas[i];
    for (let j = fila.length - 1; j >= 0; j--) {
      if (reserva.has(fila[j].id)) {
        fila[j].estado = true;
      }
    }
  }
  return butacas;
}

// Prueba de la función
// const butacasReservadas = seleccion(butacas, 1);
// const butacasReservadas = seleccion(butacas, 2);
// const butacasReservadas = seleccion(butacas, 3);
// const butacasReservadas = seleccion(butacas, 5);
// const butacasReservadas = seleccion(butacas, 6);
// const butacasReservadas = seleccion(butacas, 7);
// const butacasReservadas = seleccion(butacas, 8);

const butacasReservadas = seleccion(butacas, 9);
console.log(butacas);
console.log("Reserva : " + butacasReservadas);