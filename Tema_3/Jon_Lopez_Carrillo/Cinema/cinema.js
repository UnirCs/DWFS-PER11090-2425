let cine; // Matriz de butacas
// Definir el tamaño de la matriz de butacas
const N = 9; // Número de filas y columnas

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

/**
 * Funcion para sugerir asientos libres contiguos
 * @param {number} nAsientos - Número de asientos a sugerir
 * @returns {Array} - Array con los IDs de los asientos sugeridos
 */
function suggest(nAsientos) {
    const tempAsientos = new Set();
    if (nAsientos <= N) {
        for (let i = N - 1; i >= 0 && tempAsientos.size < nAsientos; i--) {
            tempAsientos.clear();
            for (let j = 0; j < N && tempAsientos.size < nAsientos && N - j >= nAsientos - tempAsientos.size; j++) {
                if (!cine[i][j].estado) {
                    tempAsientos.add(cine[i][j].id);
                } else {
                    tempAsientos.clear();
                }
            }
        }
    }
    console.log(Array.from(tempAsientos));
    return Array.from(tempAsientos);
}
// Inicializar la matriz
cine = setup();
//console.log(cine);
//let sugerencia = suggest(5);
//console.log(sugerencia);

