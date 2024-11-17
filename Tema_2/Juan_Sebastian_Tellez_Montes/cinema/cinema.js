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
//------------------------------------------------------------------------------------------------------------------
function suggest(nasiento, butacas) {
    const asiento = new Set();
    if (nasiento > N) {
        return asiento;
    }
    for (let ix = N - 1; ix >= 0 && asiento.size < nasiento; ix--) {
        for (let iy = 0; iy < N && asiento.size < nasiento && N - iy >= nasiento - asiento.size; iy++) {
            if (!butacas[ix][iy].estado) {
                asiento.add(butacas[ix][iy].id);
            } else {
                asiento.clear();
            }
        }
    }
    return asiento;
}
//------------------------------------------------------------------------------------------------------------------

// Inicializar la matriz
let butacas = setup();

// Imprimir la matriz
console.log(butacas);

let r = suggest(2, butacas);
console.log(r)
