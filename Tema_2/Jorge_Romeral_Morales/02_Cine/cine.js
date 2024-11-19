const { Console } = require("console");

// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

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

function suggest(butacas, reserva) {
    for (let i = butacas.length - 1; i >= 0; i--) {
        let maxContador = 0; // Número MÁXIMO de asientos libres consecutivos por fila
        let contador = 0; // Número de asientos libres consecutivos
        let asientos = []; // Array con los asientos libres consecutivos por fila
        let fila = butacas[i];

        for (let j = 0; j < fila.length; j++) {
            if (butacas[i][j].estado === false) {
                contador++;
                asientos.push(butacas[i][j].id);
                if (contador > maxContador) { // Si el contador es mayor que el máximo, se actualiza
                    maxContador = contador;
                }
            } else {
                contador = 0;
                asientos = [];
            }

            if (maxContador >= reserva) {
                for (let k = 0; k < reserva; k++) {
                    let asientoId = asientos[k];
                    for (let x = 0; x < butacas.length; x++) {
                        for (let y = 0; y < butacas[x].length; y++) {
                            if (butacas[x][y].id === asientoId) {
                                butacas[x][y].estado = true;
                            }
                        }
                    }
                }
                return asientos.slice(0, reserva);
            }
        }
    }
    return null; // No se encontraron suficientes asientos consecutivos
}

// Inicializar la matriz
let butacas = setup();

// Buscar asientos
let reserva = 3; // Número de asientos requeridos
let resultado = suggest(butacas, reserva);

// Imprimir la matriz
console.log(butacas);

// Imprimir el resultado
if (resultado) {
    console.log(`Se encontraron ${reserva} asientos consecutivos:`, resultado);
} else {
    console.log(`No se encontraron ${reserva} asientos consecutivos.`);
}