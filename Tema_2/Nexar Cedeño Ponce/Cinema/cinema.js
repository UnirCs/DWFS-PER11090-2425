// Definir el tamaño de la matriz de butacas
const N = 4; // Número de filas y columnas

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

function suggest(butacas, numAsientos) {

    if (numAsientos > N) {
        return new Set();
    }

    for (let i = N - 1; i >= 0; i--) {
        let fila = butacas[i];

        let asientosDisponibles = [];
        for (let j = 0; j < N; j++) {
            if (!fila[j].estado) {
                asientosDisponibles.push(fila[j].id);
            } else {
                asientosDisponibles = [];
            }

            if (asientosDisponibles.length === numAsientos) {
                return new Set(asientosDisponibles);
            }
        }
    }

    return new Set();
}

// Inicializar la matriz de butacas
let butacas = setup();

// Ejemplo de uso: buscar 3 asientos
let resultado = suggest (butacas, 3);

// Imprimir el resultado
console.log(resultado);
