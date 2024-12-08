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


function suggest(numAsientos, butacas) {
    const asientosTemporales = new Set();
    if (numAsientos <= N) {
        for (let i = N - 1; i >= 0 && asientosTemporales.size < numAsientos; i--) {
            asientosTemporales.clear(); // Aseguramos que el set está vacío antes de buscar asientos en la fila.
            for (let j = 0; j < N && asientosTemporales.size < numAsientos && N - j >= numAsientos - asientosTemporales.size; j++) {
                if (!butacas[i][j].estado) {
                    asientosTemporales.add(butacas[i][j].id);
                } else {
                    asientosTemporales.clear();
                }
            }
        }
    }

    if(asientosTemporales.size !== 0) { //Cambiar el estado a ocupada
        for (let i = 0; i  <butacas.length ; i++) {
            for ( let j = 0; j < butacas[i].length; j++ ) {
                for (const valor of asientosTemporales) {
                    if(butacas[i][j].id === valor){
                        butacas[i][j].estado = true;
                    }
                }
            }
        }
    }

    return asientosTemporales;
}

// Inicializar la matriz
let butacas = setup();


// Prueba de la función


let butacasReservadas = suggest(6, butacas);
let butacasReservadas2 = suggest(6, butacas);



console.log(butacasReservadas);

// Imprimir la matriz
console.log(butacas);