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

function suggest(numberSeats) {
    if (numberSeats > N) return new Set(); // Verificación temprana de solicitud inválida

    let suggestedSeats = new Set();

    for (let row = N - 1; suggestedSeats.size < numberSeats; row--) {
        let consecutiveSeats = [];
        for (let seat = 0; seat < N; seat++) {
            if (!butacas[row][seat].estado) {
                consecutiveSeats.push(butacas[row][seat].id);
                if (consecutiveSeats.length === numberSeats) {
                    suggestedSeats = new Set(consecutiveSeats);
                    seat = N; // Forzar la salida del bucle interno
                }
            } else {
                consecutiveSeats = []; // Reiniciar si se encuentra un asiento ocupado
            }
        }
    }
    console.log('Butacas sugeridas:', suggestedSeats);
    return suggestedSeats;
}

function loadSeats(seats) {
    const isValidSeats = !!seats && !isNaN(seats) && seats > 0;
    if (isValidSeats) {
        suggest(parseInt(seats));
    }
}
