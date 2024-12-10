// Tamaño de la matriz de butacas
const N = 10;

// Función para inicializar la matriz de butacas 
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1
    butacas = []; // Asegúrate de que la variable butacas esté declarada fuera de la función

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
}

// Inicializar la matriz de butacas
let butacas; // Declara la variable fuera de la función
setup(); // Ejecutar la función

// Función para buscar asiento 
function buscarAsiento(butacas, id, resultado) {
    let encontrado = false;
    for (let i = 0; i < butacas.length && !encontrado; i++) {
        for (let j = 0; j < butacas[i].length && !encontrado; j++) {
            if (butacas[i][j].id === id) {
                resultado.posicion = [i, j]; // Asignamos la posición encontrada al objeto resultado
                encontrado = true;
            }
        }
    }
}

// Función para sugerir asientos consecutivos 
function suggest(butacas, numAsientos, resultado) {
    const N = butacas.length;
    resultado.ids = new Set(); // Iniciar un set vacío para guardar los IDs de los asientos sugeridos

    if (numAsientos <= N) {
        let encontrado = false;
        let i = N - 1;

        while (i >= 0 && !encontrado) {
            let consecutivos = 0;
            let ids = [];
            let j = 0;

            while (j < N && !encontrado) {
                if (!butacas[i][j].estado) {
                    consecutivos++;
                    ids.push(butacas[i][j].id);

                    if (consecutivos === numAsientos) {
                        ids.forEach(id => {
                            const posicion = { posicion: null }; // Variable para almacenar la posición
                            buscarAsiento(butacas, id, posicion); // Buscar la posición del asiento
                            if (posicion.posicion !== null) {
                                const [fila, columna] = posicion.posicion;
                                butacas[fila][columna].estado = true;
                            }
                        });
                        ids.forEach(id => resultado.ids.add(id)); // Añadir los IDs al set de resultado
                        encontrado = true;
                    }
                } else {
                    consecutivos = 0;
                    ids = [];
                }
                j++;
            }
            i--;
        }
    }

    // Si no se encontró ningún resultado, dejamos el set vacío
    if (!resultado.ids.size) {
        resultado.ids = new Set();
    }
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
setup();
console.log("\nPrueba 1: Solicitar 11 asientos consecutivos (más que el tamaño de la fila)");
let resultado2 = { ids: new Set() }; // Objeto para guardar el resultado
suggest(butacas, 11, resultado2);
console.log("Resultado:", resultado2.ids);
imprimirEstado(butacas);

// Prueba 2: No hay suficientes asientos disponibles consecutivos en ninguna fila
setup();
console.log("\nPrueba 2: No hay suficientes asientos disponibles consecutivos en ninguna fila");

// Bloquear butacas para que no haya suficientes consecutivos en ninguna fila
butacas.forEach(fila => {
    for (let i = 0; i < fila.length; i++) {
        if (i % 2 === 0) {
            fila[i].estado = true; // Bloquear los asientos en posiciones pares
        }
    }
});

let resultado4 = { ids: new Set() }; // Objeto para guardar el resultado
suggest(butacas, 3, resultado4);
console.log("Resultado:", resultado4.ids);
imprimirEstado(butacas);

// Prueba 3: Solicitar 3 asientos consecutivos
setup();
console.log("\nPrueba 3: Solicitar 3 asientos consecutivos");
let resultado1 = { ids: new Set() }; // Objeto para guardar el resultado
suggest(butacas, 3, resultado1);
console.log("Resultado:", resultado1.ids);
imprimirEstado(butacas);

// Prueba 4: Bloquear todos los asientos en la fila más lejana y solicitar 3 asientos consecutivos
setup();
console.log("\nPrueba 4: Bloquear todos los asientos en la fila más lejana y solicitar 3 asientos consecutivos");
butacas[N - 1].forEach(asiento => (asiento.estado = true)); // Bloqueamos todos los asientos de la última fila
let resultado3 = { ids: new Set() }; // Objeto para guardar el resultado
suggest(butacas, 3, resultado3);
console.log("Resultado:", resultado3.ids);
imprimirEstado(butacas);

