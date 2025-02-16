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

// Función para sugerir asientos
function suggest(cantidad) {
    if (cantidad > N) return new Set();
    
    for (let i = N - 1; i >= 0; i--) { // Buscar desde la última fila
        let disponibles = [];
        
        for (let j = 0; j < N; j++) {
            if (!butacas[i][j].estado) {
                disponibles.push(butacas[i][j].id);
                if (disponibles.length === cantidad) {
                    return new Set(disponibles);
                }
            } else {
                disponibles = []; // Reiniciar si hay un asiento ocupado
            }
        }
    }
    return new Set();
}

// Prueba del algoritmo
console.log(suggest(3));

// Imprimir la matriz
console.log(butacas);