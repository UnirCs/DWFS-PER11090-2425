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

function suggest(numAsientos) {
    let butacasLibres = new Set(); // Conjunto para almacenar los IDs de los asientos seleccionados
    let encontrado = false;       //  Indicar si se han encontrado los asientos necesarios

    // Recorrer las filas comenzando desde la más lejana a la pantalla
    for (let i = N - 1; i >= 0 && !encontrado; i--) {
        let asientosSeguidos = 0; // Contador de asientos libres consecutivos
        let idsAsientos = [];    // Lista temporal de IDs de los asientos libres consecutivos

        // Recorrer los asientos de la fila actual
        for (let j = 0; j < N; j++) {
            if (!butacas[i][j].estado) { // Si el asiento está libre
                idsAsientos.push(butacas[i][j].id); // Agregar el ID del asiento a la lista temporal
                asientosSeguidos++;                // Incrementar el contador
            } else {
                // Si el asiento está ocupado, reiniciar la búsqueda en esta fila
                idsAsientos = [];
                asientosSeguidos = 0;
            }

            // Si encontramos suficientes asientos seguidos
            if (asientosSeguidos === numAsientos) {
                idsAsientos.forEach(id => butacasLibres.add(id)); // Añadir los IDs al conjunto
                encontrado = true; // Marcar que hemos encontrado una solución
            }
        }
    }

    // Si no hemos encontrado suficientes asientos consecutivos, devolver un conjunto vacío
    if (!encontrado) {
        return new Set();
    }

    return butacasLibres; // Devolver los asientos seleccionados
}

// Inicializar la matriz
let butacas = setup();

// Modificar algunas butacas para simular que están ocupadas 
butacas[5][2].estado = true;  // Asiento 23 está ocupado
butacas[5][3].estado = true;  // Asiento 24 está ocupado
butacas[5][4].estado = true;  // Asiento 25 está ocupado

// Llamada de prueba a la función
let resultado = suggest(3);

// Mostrar el resultado
console.log("Asientos seleccionados:", [...resultado]);
