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

    let resultado = new Set();
    let encontrado = false;

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
                resultado = new Set(asientosDisponibles);
                encontrado = true;
            }
        }
    }

    return resultado
}

// Inicializar la matriz de butacas
let butacas = setup();
butacas[0][1].estado = true;
butacas[0][2].estado = true;
butacas[3][0].estado = true;
butacas[3][1].estado = true;

// Ejemplo de uso: buscar 3 asientos
let resultado = suggest (butacas, 3);

// Imprimir el resultado
console.log(resultado);
