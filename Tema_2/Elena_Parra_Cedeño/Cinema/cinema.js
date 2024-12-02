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
console.log(butacas);

function suggest(n) {
    if (n > N) return new Set();

    let sillasSeleccionadas = new Set();

    for (let i = N - 1; i >= 0 && sillasSeleccionadas.size < n; i--) {
        sillasSeleccionadas.clear();
        for (let j = N - 1; j >= 0 && sillasSeleccionadas.size < n; j--) {
            let silla = butacas[i][j];
            if (silla.estado === false) {
                sillasSeleccionadas.add(silla.id);
            } else {
                sillasSeleccionadas.clear();
            }
        }
    }
    return sillasSeleccionadas;
}

let selecciono =  suggest(5)
console.log(selecciono);
