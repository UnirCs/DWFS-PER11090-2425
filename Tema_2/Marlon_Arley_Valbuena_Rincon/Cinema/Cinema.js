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
const butacas = setup();

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
    const N = butacas.length;

    // Regla 1: Si el número de asientos solicitados excede el tamaño de una fila, devolver Set vacío
    if (numAsientos > N) {
        return new Set();
    }

    // Buscar en cada fila desde la más lejana
    for (let i = N - 1; i >= 0; i--) {
        let consecutivos = 0;
        let ids = [];

        for (let j = 0; j < N; j++) {
            if (!butacas[i][j].estado) {
                consecutivos++;
                ids.push(butacas[i][j].id);

                // Regla 2: Si se encuentran suficientes asientos consecutivos
                if (consecutivos === numAsientos) {
                    // Marcar los asientos como ocupados
                    ids.forEach(id => {
                        const [fila, columna] = buscarAsiento(butacas, id);
                        if (fila !== null && columna !== null) {
                            butacas[fila][columna].estado = true;
                        }
                    });

                    return new Set(ids);
                }
            } else {
                consecutivos = 0; // Reiniciar si hay un asiento ocupado
                ids = [];
            }
        }
    }

    // Regla 3: Si no hay suficientes asientos consecutivos, devolver Set vacío
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

// Pruebas
console.log("Estado inicial de las butacas:");
imprimirEstado(butacas);


// Prueba 1: Solicitar 11 asientos consecutivos (más que el tamaño de la fila)
console.log("\nPrueba 1: Solicitar 11 asientos consecutivos (más que el tamaño de la fila)");
const resultado2 = suggest(butacas, 11);
console.log("Resultado:", resultado2);
imprimirEstado(butacas);

// Prueba 2: No hay suficientes asientos disponibles consecutivos en ninguna fila
console.log("\nPrueba 2: No hay suficientes asientos disponibles consecutivos en ninguna fila");

// Bloquear butacas para que no haya suficientes consecutivos en ninguna fila
butacas.forEach(fila => {
    for (let i = 0; i < fila.length; i++) {
        if (i % 2 === 0) {
            fila[i].estado = true; // Bloquear los asientos en posiciones pares
        }
    }
});

const resultado4 = suggest(butacas, 3);
console.log("Resultado:", resultado4);
imprimirEstado(butacas);

// Prueba 3: Solicitar 3 asientos consecutivos
console.log("\nPrueba 3: Solicitar 3 asientos consecutivos");
const resultado1 = suggest(butacas, 3);
console.log("Resultado:", resultado1);
imprimirEstado(butacas);



// Prueba 3: Bloquear todos los asientos en la fila más lejana y solicitar 3 asientos consecutivos
console.log("\nPrueba 3: Bloquear todos los asientos en la fila más lejana y solicitar 3 asientos consecutivos");
butacas[N - 1].forEach(asiento => (asiento.estado = true)); // Bloqueamos todos los asientos de la última fila
const resultado3 = suggest(butacas, 3);
console.log("Resultado:", resultado3);
imprimirEstado(butacas);


