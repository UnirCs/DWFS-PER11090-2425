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

// Función para sugerir los asientos que se pueden reservar
function suggest(butacas, nAsientosReservar) {
    let butacasReservadas = new Set();
    
    // Verificar si el número de asientos solicitado es mayor que el número de columnas
    if (nAsientosReservar > N) {
        return butacasReservadas; // Retornar un set vacío si no caben los asientos
    }
    
    // Recorrer las filas de atrás hacia adelante
    for (let i = butacas.length - 1; i >= 0; i--) {
        let contador = 0;
        let butacasReservadasTemp = [];
        
        // Recorrer los asientos de la fila
        for (let j = 0; j < butacas[i].length; j++) {
            if (!butacas[i][j].estado) { // Si el asiento está libre
                contador++;
                butacasReservadasTemp.push(butacas[i][j]); // Añadir a la lista de asientos reservados temporalmente
                
                // Si encontramos los asientos suficientes, los reservamos
                if (contador === nAsientosReservar) {
                    // Marcar como ocupados y añadir los IDs al set
                    for (let x = 0; x < butacasReservadasTemp.length; x++) {
                        butacasReservadasTemp[x].estado = true;
                        butacasReservadas.add(butacasReservadasTemp[x].id);
                    }
                    return butacasReservadas; // Salir después de reservar los asientos
                }
            } else {
                // Resetear el contador si encontramos un asiento ocupado
                contador = 0;
                butacasReservadasTemp = [];
            }
        }
    }

    // Si no encontramos suficientes asientos consecutivos, retornamos un set vacío
    return butacasReservadas;
}

// Inicializar la matriz
let butacas = setup();

// Imprimir la matriz inicial
console.log("Matriz de Butacas Inicial:");
console.log(butacas);

// Pruebas de la función suggest
console.log("Reservando 10 asientos:");
console.log(suggest(butacas, 10));

console.log("Reservando 7 asientos:");
console.log(suggest(butacas, 7));

console.log("Reservando 4 asientos:");
console.log(suggest(butacas, 4));

console.log("Intentando reservar 10 asientos nuevamente:");
console.log(suggest(butacas, 10));

