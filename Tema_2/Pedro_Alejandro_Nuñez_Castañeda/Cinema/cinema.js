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
                estado: false // Estado inicial libre
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

// Inicializar la matriz
let butacas = setup();

// Imprimir la matriz
// console.table(butacas);

/*
1. En el tema anterior diseñamos una sala de cine. Se incluía una matriz de asientos (cuadrada, mismo número de filas y columnas). En código JavaScript, utilizaremos una matriz para representar los asientos. Serán objetos y tendrán dos atributos. El ``id``, que será un entero, y el ``estado``, que será un booleano (``true`` si está ocupada y ``false`` si está libre). Se pide desarrollar en JavaScript la función ``suggest`` que recibe como argumento el número de asientos que se desea reservar.

    - Si el número de asientos solicitados excede el tamaño máximo de la fila, la función debe devolver un set vacío.
    - Si en ninguna fila hay suficientes asientos disponibles **juntos**, la función debe devolver un set vacío.
    - Se comenzará a buscar asientos **juntos** en la **fila más lejana** a la pantalla, por lo que si varias filas pudiesen albergar el número de asientos solicitado, se elegiría siempre la más lejana a la pantalla. El resultado debe ser un Set con los ids de los asientos pre-seleccionados.

**IMPORTANTE: No se aceptan soluciones que violen las invariantes de un bucle**
*/
function asientosLibres(fila) {
  let libres = 0
  for (let i = 0; i < fila.length; i++) {
    const e = fila[i];
    libres += (e.estado === false)
  }
  return libres
}
function suggest(asientos=0) {
  console.debug("N# Asientos: " + asientos);
  
  let reservados = new Set([]) //set de asientos reservados
  let filaCorrecta = -1;
  // Verificar
    if(asientos > N) return reservados //Si se quieren más asientos que los que hay en una fila
    for (let i = N-1; i >= 0 && filaCorrecta < 0; i--) { //Empezar desde la última fila y terminar si encontramos la fila correcta
      const fila = butacas[i];
      if(asientosLibres(fila) >= asientos){
        filaCorrecta = i //Se encontró una fila correcta
        // Marcar Reservados
        let marcados = asientos
        for (let j = 0; j < N && marcados > 0; j++) {
          const e = butacas[i][j];
          if(e.estado === false){ //Si el asiento está libre, reservar
            e.estado = true
            reservados.add(e.id)
            marcados -= 1
          }
        }
      }
    }

  // Devolver resultado:
    return reservados //Si no se ha encontrado una fila adecuada devolverá un set vacío
}

console.log(suggest(11));
console.log(suggest(8));
console.log(suggest(8));
console.log(suggest(1));
console.log(suggest(2));
console.log(suggest(10));
console.log(suggest(10));
console.log(suggest(10));
console.log(suggest(10));
console.log(suggest(10));
console.log(suggest(10));
console.log(suggest(10));
console.log(suggest(10));
console.log(suggest(1));
console.log(suggest(1));

console.log("EOF");
