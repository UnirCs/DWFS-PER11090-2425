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

// Implementación de la función `suggest`
function suggest(butacas, numAsientos) {
    let resultado = new Set(); // Conjunto para almacenar los IDs de los asientos encontrados
    let filaEncontrada = false; // Bandera para determinar si se encontró un grupo válido

    // Buscar asientos en las filas desde la más lejana hacia la más cercana
    for (let i = butacas.length - 1; i >= 0 && !filaEncontrada; i--) {
        let consecutivos = 0; // Contador de asientos consecutivos libres
        let ids = []; // Almacenar temporalmente IDs de asientos seleccionados

        for (let asiento of butacas[i]) {
            if (!asiento.estado) { // Si el asiento está libre
                consecutivos++;
                ids.push(asiento.id);

                // Si se han encontrado suficientes asientos
                if (consecutivos === numAsientos) {
                    resultado = new Set(ids);
                    filaEncontrada = true; // Marcar como fila válida
                }
            } else {
                consecutivos = 0; // Reiniciar si se encuentra un ocupado
                ids = [];
            }
        }
    }

    // Retornar el conjunto de asientos encontrados (vacío si no se encontraron suficientes)
    return resultado;
}

// Inicializar la matriz
let butacas = setup();

// Modificar algunos asientos para probar
butacas[8][1].estado = true; // Ocupamos un asiento
butacas[9][3].estado = true; // Ocupamos otro asiento

// Probar la función suggest
let resultado = suggest(butacas, 5); // Solicitar 5 asientos consecutivos
console.log(resultado); // Imprime el resultado
