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

function suggest(numAsientos) {
    let asientos = [];
    let cont = 0; //0 la mas cercana a la pantalla / 9 la más alejada
    let asientosElegidosIds = [];
    let aux = false;

    if (numAsientos > N || numAsientos === 0) {
        return asientos;
    }

    for (let i = N - 1; i >= 0; i--) {
        for (let j = N - 1; j >= 0; j--) {
            if (!butacas[i][j].estado && cont < numAsientos) {
                cont++;
                asientos.push(butacas[i][j]);
            } else
                if (cont === numAsientos) {
                    for (let k = 0; k < asientos.length; k++) {
                        asientos[k].estado = true; 
                    }
                    aux = true;
                } else {
                    cont = 0;
                    asientos = [];
                    asientosElegidosIds = [];
                }
        }
        // Reiniciamos el contador y el grupo si no logramos encontrar suficientes en esta fila
        if (!aux) {
            cont = 0;
            asientos = [];
        }

    }

    console.log(asientos);
    return asientos;
}

// Imprimir la matriz
console.log(butacas);
suggest(2);
suggest(12);
suggest(7);
suggest(5);
suggest(6);