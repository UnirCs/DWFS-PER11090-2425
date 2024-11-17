// Definir el tamaño de la matriz de butacas
const N = 3; // Número de filas y columnas

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
    // Verificar si el número de asientos solicitados excede el tamaño de una fila
    if (numberSeats > N) {
        return new Set(); // No es posible satisfacer la solicitud
    }

    // Recorrer las filas desde la última hacia la primera
    for (let row = N - 1; row >= 0; row--) {
        let consecutiveSeats = [];
        for (let seat = 0; seat < N; seat++) {
            if (!butacas[row][seat].estado) {
                // Asiento libre, agregar a la lista temporal
                consecutiveSeats.push(butacas[row][seat].id);
                // Verificar si se han encontrado suficientes asientos contiguos
                if (consecutiveSeats.length === numberSeats) {
                    return new Set(consecutiveSeats);
                }
            } else {
                // Asiento ocupado, reiniciar la lista temporal
                consecutiveSeats = [];
            }
        }
    }

    // No se encontraron suficientes asientos contiguos disponibles
    return new Set();
}

// Solicitar una sugerencia de 3 asientos
 suggest(3);
