// Definir el tamaño de la matriz de butacas
const N = 13; // Número de columnas
const NFilas = 5; // Número de filas
// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];
    // Inicializar las filas y butacas
    for (let i = 0; i < NFilas; i++) {
        let fila = [];
        for (let j = 0; j < N; j++) {
            fila.push({
                id: idContador++, // Asignar un ID único a cada butaca
                estado: false // Estado inicial de la butaca: libre (false)
            });
        }
        butacas.push(fila);
    }
    return butacas;
}
// Función para sugerir butacas disponibles para la reserva
function suggest(nAsientosReservar) {
    let butacasReservadas = new Set(); // Conjunto para almacenar las butacas reservadas
    let butacasReservadasTemp = []; // Arreglo temporal para almacenar las butacas seleccionadas
    let contador = 0;
    let isReservado = false;
    let butacas = setup(); // Inicializar la matriz de butacas
    nAsientosReservar = parseInt(nAsientosReservar); // Convertir la cantidad de asientos a reservar en número entero
    // Verificar si la cantidad de asientos a reservar es mayor que el total de asientos disponibles
    if (nAsientosReservar > N) {
        return console.log("Asientos sugeridos: " + Array.from(butacasReservadas));
    } else {
        // Recorrer las filas de butacas
        for (let i = butacas.length - 1; i >= 0; i--) {
            contador = 0;
            butacasReservadasTemp = [];
            // Recorrer las butacas en cada fila
            for (let j = 0; j < butacas[i].length; j++) {
                // Verificar si la butaca está libre y si no se ha reservado aún
                if (butacas[i][j].estado === false && !isReservado) {
                    contador++; // Aumentar el contador de asientos consecutivos libres
                    butacasReservadasTemp.push(butacas[i][j]); // Almacenar la butaca temporalmente
                    if (contador === nAsientosReservar) {
                        // Reservar las butacas cuando se alcanza la cantidad deseada
                        for (let x = 0; x < butacasReservadasTemp.length; x++) {
                            butacasReservadasTemp[x].estado = true; // Cambiar el estado a reservado
                            butacasReservadas.add(butacasReservadasTemp[x].id); // Agregar el ID al conjunto de reservadas
                        }
                        isReservado = true; // Marcar que se ha realizado una reserva
                    }
                } else {
                    contador = 0;
                    butacasReservadasTemp = []; // Reiniciar si se encuentra una butaca ocupada
                }
            }
        }
    }
    // Mostrar las butacas reservadas
    return console.log("Asientos sugeridos: " + Array.from(butacasReservadas));
}
// Inicializar la matriz de butacas
console.log("Butacas Inicializadas");
// Pruebas de la función suggest
// suggest(10);