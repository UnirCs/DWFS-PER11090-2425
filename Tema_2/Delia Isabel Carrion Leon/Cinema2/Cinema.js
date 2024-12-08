// Definir el tamaño de la matriz de butacas
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
        estado: false // Estado inicial libre
      });
    }
    butacas.push(fila);
  }
  return butacas;
}

// Implementación de la función suggest
function suggest(numAsientos) {
  // Si el número de asientos solicitados excede el tamaño máximo de la fila, devolver un set vacío
  if (numAsientos > N) {
    return new Set();
  }

  // Buscamos asientos disponibles juntos, comenzando desde la última fila hacia la primera
  for (let i = N - 1; i >= 0; i--) {
    let fila = butacas[i];
    let asientosContinuos = [];
    for (let j = 0; j < N; j++) {
      // Verificar si el asiento está libre
      if (!fila[j].estado) {
        asientosContinuos.push(fila[j].id);
        // Si encontramos suficientes asientos juntos, devolver el set de IDs
        if (asientosContinuos.length === numAsientos) {
          return new Set(asientosContinuos);
        }
      } else {
        // Reiniciar la búsqueda en esta fila si encontramos un asiento ocupado
        asientosContinuos = [];
      }
    }
  }

  // Si no se encontraron suficientes asientos juntos en ninguna fila, devolver un set vacío
  return new Set();
}

// Inicializamos la matriz*/
let butacas = setup();

// Probar la función
console.log("Matriz inicial:");
//console.log(butacas);
console.table(butacas);//Otra manera de visualizar las butacas

console.log("Sugerencia de 6 asientos:");
console.log(suggest(6)); // Devuelve los IDs de los asientos sugeridos de la ult fila

// Marcar algunos asientos como ocupados para probar
butacas[9][5].estado = true;
butacas[9][6].estado = true;

console.log("Matriz modificada:");
console.table(butacas);

console.log("Sugerencia de 4 asientos Preseleccionados:");
console.log(suggest(6)); /* Devuelve un set con IDs de los asientos sugeridos, en este ejemplo 
como no encontro en la ultima fila los 6 asientos juntos me recomendo la fila 8*/
