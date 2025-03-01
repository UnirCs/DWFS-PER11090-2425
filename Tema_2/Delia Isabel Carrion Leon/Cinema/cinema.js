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
    let asientosEncontrados = new Set();
    let i = N - 1; // Comenzar desde la última fila

    while (i >= 0) {
        let fila = butacas[i];
        let asientosContinuos = [];
        let j = 0; // Índice de la columna

        while (j < N) {
            if (!fila[j].estado) {
                asientosContinuos.push(fila[j].id);
            } else {
                asientosContinuos = []; // Reset cuando hay un asiento ocupado
            }

            if (asientosContinuos.length === numAsientos) {
                // Solo agregar sin sobrescribir
                for (let asiento of asientosContinuos) {
                    asientosEncontrados.add(asiento);
                }
                return asientosEncontrados; // Ahora respetamos la invariante saliendo correctamente
            }
            j++;
        }
        i--;
    }

    return asientosEncontrados; // Si no se encontraron suficientes, devolvemos el set vacío
}


// Inicializamos la matriz*/
let butacas = setup();

// Probar la función
console.log("Matriz inicial:");
//console.log(butacas);
console.table(butacas);//Otra manera de visualizar las butacas

console.log("Sugerencia de 6 asientos:");
console.log(suggest(4)); // Devuelve los IDs de los asientos sugeridos de la ult fila

// Marcar algunos asientos como ocupados para probar
butacas[9][2].estado = true;
butacas[9][3].estado = true;

console.log("Matriz modificada:");
console.table(butacas);

console.log("Sugerencia de 4 asientos Preseleccionados:");
console.log(suggest(4)); /* Devuelve un set con IDs de los asientos sugeridos, en este ejemplo 
como no encontro en la ultima fila los 6 asientos juntos me recomendo la fila 8*/