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

// Imprimir la matriz
// console.log(butacas);

// Función para reservar un asiento

function suggest(numAsientos) {
    // Verificar si el número de asientos solicitados excede el tamaño máximo de la fila
    // o si se introducen valores cero o negativos
    if (numAsientos > N || numAsientos <= 0) {
        return new Set();
    }

    // Recorrer las filas desde la más lejana a la más cercana
    for (let i = N - 1; i >= 0; i--) {
        let fila = butacas[i];
        let contadorLibres = 0;
        let inicio = -1;

        // Buscar un bloque de asientos contiguos libres en la fila
        for (let j = 0; j < N; j++) {
            if (!fila[j].estado) {
                if (contadorLibres === 0) {
                    inicio = j;
                }
                contadorLibres++;
                if (contadorLibres === numAsientos) {
                    // Encontrado un bloque de asientos contiguos libres
                    let resultado = new Set();
                    for (let k = inicio; k < inicio + numAsientos; k++) {
                        resultado.add(fila[k].id);
                    }
                    return resultado;
                }
            } else {
                contadorLibres = 0;
                inicio = -1;
            }
        }
    }

    // Si no se encuentra ningún bloque de asientos contiguos libres en ninguna fila
    return new Set();
}

// Reservar 3 asientos contiguos
console.log(suggest(3)); // Set { 91, 92, 93 }

// Supongamos que se reservan los asientos 91, 92 y 93
butacas[9][0].estado = true;
butacas[9][1].estado = true;
butacas[9][2].estado = true;

// Reservar 4 asientos contiguos
console.log(suggest(4)); // Set { 94, 95, 96, 97 }