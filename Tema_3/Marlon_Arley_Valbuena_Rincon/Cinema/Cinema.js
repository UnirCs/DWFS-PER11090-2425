// Tamaño de la matriz de butacas
const N = 10;

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1
    let butacas = [];

    for (let i = 0; i < N; i++) {
        let fila = [];
        for (let j = 0; j < N; j++) {
            fila.push({
                id: idContador++, // ID único para cada asiento
                estado: false // Estado inicial: libre
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

// Inicializar la matriz de butacas
let butacas; // Declarar la variable fuera de la función para que sea accesible globalmente

// Ejecutar la inicialización al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    butacas = setup();
    console.log('Matriz de butacas inicializada:', butacas);
});

// Función para buscar la fila y columna de un asiento por su ID
function buscarAsiento(butacas, id) {
    for (let i = 0; i < butacas.length; i++) {
        for (let j = 0; j < butacas[i].length; j++) {
            if (butacas[i][j].id === id) {
                return [i, j];
            }
        }
    }
    return null; // Retorna null si no se encuentra
}

// Función para sugerir asientos consecutivos
function suggest(butacas, numAsientos) {
    butacas = setup();
    const numAsientosint = parseInt(numAsientos);
    const N = butacas.length;

    // Regla 1: Si el número de asientos solicitados excede el tamaño de una fila, devolver Set vacío
    if (numAsientosint > N) {
        imprimirEstado(butacas);
        return new Set();
    }

    // Buscar en cada fila desde la más lejana
    for (let i = N - 1; i >= 0; i--) {
        let consecutivos = 0;
        let ids = [];

        for (let j = 0; j < N; j++) {
            if (!butacas[i][j].estado) {
                console.log(consecutivos);
                consecutivos++;
                ids.push(butacas[i][j].id);

                // Regla 2: Si se encuentran suficientes asientos consecutivos
                if (consecutivos === numAsientosint) {
                    console.log("if 2");
                    // Marcar los asientos como ocupados
                    ids.forEach(id => {
                        const [fila, columna] = buscarAsiento(butacas, id);
                        if (fila !== null && columna !== null) {
                            butacas[fila][columna].estado = true;
                        }
                    });
                    imprimirEstado(butacas);
                    return new Set(ids);
                }
            } else {
                consecutivos = 0; // Reiniciar si hay un asiento ocupado
                ids = [];
            }
        }
    }

    // Regla 3: Si no hay suficientes asientos consecutivos, devolver Set vacío
    imprimirEstado(butacas);
    return new Set();
}

// Función para imprimir el estado actual de las butacas
function imprimirEstado(butacas) {
    console.log("Estado actual de las butacas:");
    butacas.forEach((fila, i) => {
        const estadoFila = fila.map(asiento => (asiento.estado ? "O" : "L")).join(" ");
        console.log(`Fila ${i + 1}: ${estadoFila}`);
    });
}



