// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas   
let butacas = [];

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    butacas = [];

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
butacas = setup();

/**
 * En el tema anterior diseñamos una sala de cine. Se incluía una matriz de asientos (cuadrada, mismo número de filas y columnas).
 * En código JavaScript, utilizaremos una matriz para representar los asientos. Serán objetos y tendrán dos atributos.
 * El id, que será un entero, y el estado, que será un booleano (true si está ocupada y false si está libre).
 * Se pide desarrollar en JavaScript la función suggest que recibe como argumento el número de asientos que se desea reservar.
 *
 *   1.   Si el número de asientos solicitados excede el tamaño máximo de la fila, la función debe devolver un set vacío.
 *   2.   Si en ninguna fila hay suficientes asientos disponibles juntos, la función debe devolver un set vacío.
 *   3.   Se comenzará a buscar asientos juntos en la fila más lejana a la pantalla, por lo que si varias filas pudiesen albergar el número de asientos solicitado, se elegiría siempre la más lejana a la pantalla. El resultado debe ser un Set con los ids de los asientos pre-seleccionados.
 */
function suggest(n) {
    butacas = setup();
    console.log("Número de asientos solicitados: " + n);
    n = Number(n); // Convertir n a número
    if (n > N) {
        console.log("El número de asientos solicitados excede el tamaño máximo de la fila.");
        return new Set(); // 1
    }

    let idsSuggested = new Set();
    let found = false;

    for (let i = butacas.length - 1; i >= 0 && !found; i--) { //3
        let fila = butacas[i];
        let idsAvailable = new Set();
        console.log("Revisando fila: " + (i + 1));
        for (let j = 0; j < fila.length; j++) {
            if (fila[j].estado === false) {
                idsAvailable.add(fila[j].id);
                console.log("Asiento disponible encontrado: " + fila[j].id + " el valor de n es: " + n + " el tamaño de idsAvailable es: " + idsAvailable.size);
                if (idsAvailable.size == n) {
                    found = true;
                    idsSuggested = new Set(idsAvailable);
                    console.log("Suficientes asientos disponibles encontrados en la fila: " + (i + 1));
                    console.log("Asientos sugeridos en esta fila: ", Array.from(idsAvailable));
                } else {
                    console.log("ELSE Asientos disponibles en esta fila: ", Array.from(idsAvailable));
                }
            } else {
                idsAvailable.clear(); // 2
                console.log("Asiento ocupado encontrado, reiniciando búsqueda en la fila.");
            }
        }
    }
    console.log("Asientos sugeridos: ", Array.from(idsSuggested));
    return idsSuggested;
}




// CASOS DE PRUEBA
console.log("Caso de prueba 1: ", suggest(5));
//console.log("Caso de prueba 2: ", suggest(10));
//console.log("Caso de prueba 3: ", suggest(15));
//
//// OCUPAR ASIENTOS
//butacas[9][0].estado = true;
//butacas[9][5].estado = true;
//butacas[9][7].estado = true;
//
//console.log("Caso de prueba 4: ", suggest(5));
//