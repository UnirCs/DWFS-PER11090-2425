const N = 10; // Número de filas y columnas

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1
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

// Función para sugerir asientos
function suggest(numAsientos) {
    // Si el número de asientos excede el tamaño máximo de la fila
    if (numAsientos > N) {
        return new Set(); 
    }

    let asientosSugeridos = new Set(); // Variable para almacenar los asientos sugeridos

    for (let i = N - 1; i >= 0; i--) {
        let fila = butacas[i];
        let count = 0;
        let asientos = new Set();

        for (let j = 0; j < N; j++) {
            if (!fila[j].estado) {
                count++;
                asientos.add(fila[j].id);

                // Si encontramos suficientes asientos juntos
                if (count === numAsientos) {
                    // Marcar los asientos como ocupados
                    for (let k = j; k > j - numAsientos; k--) {
                        fila[k].estado = true;
                    }
                    asientosSugeridos = asientos; // Almacenar los asientos en la variable
                    break; // Salir del bucle interno
                }
            } else {
                count = 0; 
                asientos.clear(); 
            }
        }

        if (asientosSugeridos.size > 0) {
            break; // Salir del bucle externo si se encontraron asientos
        }
    }

    return asientosSugeridos; // Devolver los asientos sugeridos al final
}

// Ejemplos de uso
console.log(suggest(11));
console.log(suggest(1));
console.log(suggest(7));