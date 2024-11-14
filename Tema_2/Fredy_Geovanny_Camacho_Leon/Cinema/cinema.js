// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas
// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let arrButacas = [];
    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < N; j++) {
            // Asigna algunos asientos como ocupados por defecto
            let ocupado = Math.random() < 0.3; // Ejemplo: 30% de probabilidad de estar ocupado
            fila.push({
                id: idContador++,
                estado: ocupado // true ocupado, false libre
            });
        }
        arrButacas.push(fila);
    }
    return arrButacas;
}
// Inicializar la matriz
var butacas = setup();
// Imprimir la matriz
console.log("Butacas: ");
console.log(butacas);

// Función para sugerir asientos    
function suggest(butacas, asientosReserva) {
    // Validar si el número de asientos solicitados excede el tamaño máximo de la fila
    if (asientosReserva > butacas[0].length) {
        return new Set();
    }
    // Comenzar la búsqueda desde la última fila y columna hasta la primera
    for (let i = butacas.length - 1; i >= 0; i--) {
        let fila = butacas[i];
        let contador = 0; // Contador de asientos totales de la fila actual
        let asientosConsecutivos = 0; // Contador de asientos consecutivos libres
        // Buscar asientos consecutivos en la fila, se empieza a buscar desde el final de la columna
        for (let j = fila.length - 1; j >= 0; j--) { // Recorrer la fila de derecha a izquierda
            contador++; // Incrementar el contador de asientos total, reservados y libres de la fila
            if (!fila[j].estado) { // Si el asiento está libre
                asientosConsecutivos++; // Incrementa el contador de asientos consecutivos libres
                // Verifica si se alcanzó el número de asientos solicitados
                if (asientosConsecutivos === contador && asientosConsecutivos === asientosReserva) {
                    // Crear un Set con los IDs de los asientos seleccionados
                    let reservaAsientos = new Set();
                    for (let k = fila[j].id; k < fila[j].id + asientosConsecutivos; k++) {
                        reservaAsientos.add(k);
                    }
                    return reservaAsientos; // Retornar el conjunto de IDs encontrados
                }
            } else {
                // Reinicia el contador total y el contador de consecutivos si el asiento está ocupado -- no cumple condición de asientos consecutivos
                contador = 0;
                asientosConsecutivos = 0;
            }
        }
    }
    // Si no se encontró un grupo de asientos consecutivos suficientes
    return new Set();
}
// Reservar asientos TEST
// const butacasReservadas = suggest(butacas, 1);
// const butacasReservadas = suggest(butacas, 2);
// const butacasReservadas = suggest(butacas, 3);
const butacasReservadas = suggest(butacas, 4);
// const butacasReservadas = suggest(butacas, 5);
// const butacasReservadas = suggest(butacas, 6);
// const butacasReservadas = suggest(butacas, 7);
// const butacasReservadas = suggest(butacas, 8);
// const butacasReservadas = suggest(butacas, 9);

// Imprimir reserva sugerida
console.log(butacasReservadas);