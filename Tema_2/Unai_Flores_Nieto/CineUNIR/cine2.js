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

// Función para sugerir los asientos a reservar
function suggest(numAsientos) {
    let butacasLibres = new Set();

    // Recorrer las filas comenzando desde la más lejana
    for (let i = N - 1; i >= 0; i--) {
        let asientosSeguidos = 0;
        let idsAsientos = [];

        // Recorrer los asientos de la fila actual
        for (let j = 0; j < N; j++) {
            if (!butacas[i][j].estado) { // Si el asiento está libre
                idsAsientos.push(butacas[i][j].id);
                asientosSeguidos++;
            } else {
                // Si el asiento está ocupado, reiniciar
                idsAsientos = [];
                asientosSeguidos = 0;
            }

            // Si encontramos suficientes asientos seguidos
            if (asientosSeguidos === numAsientos) {
                // Añadir los ids de los asientos seleccionados al conjunto
                idsAsientos.forEach(id => butacasLibres.add(id));
                return butacasLibres;
            }
        }
    }

    // Si no se encuentran suficientes asientos, devolver un set vacío
    return new Set();
}

// Inicializar la matriz
let butacas = setup();

// Modificar algunas butacas para simular que están ocupadas (por ejemplo)
butacas[5][2].estado = true;  // Asiento 23 ocupado
butacas[5][3].estado = true;  // Asiento 24 ocupado
butacas[5][4].estado = true;  // Asiento 25 ocupado

// Llamada de prueba a la función
let resultado = suggest(3);

// Mostrar el resultado
console.log("Asientos seleccionados:", [...resultado]);