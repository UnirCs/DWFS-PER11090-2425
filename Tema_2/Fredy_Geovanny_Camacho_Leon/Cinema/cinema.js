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
    if (asientosReserva > butacas[0].length) {
        return new Set();
    }
    let reservaAsientos = new Set();
    let encontrado = false; // Variable de control para saber si se encontró una reserva
    for (let i = butacas.length - 1; i >= 0 && !encontrado; i--) {
        let fila = butacas[i];
        let asientosConsecutivos = 0;
        for (let j = fila.length - 1; j >= 0 && !encontrado; j--) {
            if (!fila[j].estado) { // Asiento libre
                asientosConsecutivos++;
                reservaAsientos.add(fila[j].id);
                if (asientosConsecutivos === asientosReserva) {
                    encontrado = true; // Indicar que se encontró una secuencia adecuada
                }
            } else { // Asiento ocupado
                reservaAsientos.clear();
                asientosConsecutivos = 0;
            }
        }
    }
    return reservaAsientos;
}
// Prueba de la función
const butacasReservadas = suggest(butacas, 6);
// const butacasReservadas = suggest(butacas, 1);
// const butacasReservadas = suggest(butacas, 2);
// const butacasReservadas = suggest(butacas, 3);
// const butacasReservadas = suggest(butacas, 5);
// const butacasReservadas = suggest(butacas, 6);
// const butacasReservadas = suggest(butacas, 7);
// const butacasReservadas = suggest(butacas, 8);
// const butacasReservadas = suggest(butacas, 9);
console.log("Reserva sugerida: ");
console.log(butacasReservadas);