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
                estado: false // Estado inicial aleatorio
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

// Inicializar la matriz
const butacas = setup();

// Imprimir la matriz
console.log(butacas);

/**
 * En el tema anterior diseñamos una sala de cine. Se incluía una matriz de asientos (cuadrada, mismo número de filas y columnas).
 * En código JavaScript, utilizaremos una matriz para representar los asientos. Serán objetos y tendrán dos atributos.
 * El id, que será un entero, y el estado, que será un booleano (true si está ocupada y false si está libre).
 * Se pide desarrollar en JavaScript la función suggest que recibe como argumento el número de asientos que se desea reservar.
 *
 *      Si el número de asientos solicitados excede el tamaño máximo de la fila, la función debe devolver un set vacío.
 *      Si en ninguna fila hay suficientes asientos disponibles juntos, la función debe devolver un set vacío.
 *      Se comenzará a buscar asientos juntos en la fila más lejana a la pantalla, por lo que si varias filas pudiesen albergar el número de asientos solicitado, se elegiría siempre la más lejana a la pantalla. El resultado debe ser un Set con los ids de los asientos pre-seleccionados.
 */

function suggest(n){
    console.log("Número de asientos solicitados: " + n);
    let butacas = setup();
    n = parseInt(n)

    if (n > N) {
        return new Set();
    }

    let idsSuggested = new Set();
    let found = false;

    for (let i = butacas.length-1; i >=0 && found===false; i--) {
        let fila = butacas[i];
        let idsAvailable = new Set();
        for (let j = 0; j < fila.length; j++) {
            if (fila[j].estado === false) {
                idsAvailable.add(fila[j].id);
                if (idsAvailable.size === n) {
                    found = true;
                    idsSuggested = new Set(idsAvailable);
                }
            } else {
                idsAvailable.clear();
            }
        }
    }
    return console.log("Asientos sugeridos: " + Array.from(idsSuggested));

}

/*// Prueba de la función suggest
let resultado = suggest(3);

resultado = suggest(5);

resultado = suggest(10);

resultado = suggest(11);*/
