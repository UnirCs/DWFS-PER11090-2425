const N = 6; // Número de filas y columnas

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1
    let butacas = [];

    for (let i = 0; i < N; i++) {
        let fila = [];
        for (let j = 0; j < N; j++) {
            fila.push({
                id: idContador++, // Asignar un ID único
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
function suggest(asientosSolicitados) {
    console.clear(); // Limpiar la consola antes de mostrar el nuevo resultado
    let emptySeats = new Set(); // Variable para almacenar el resultado
    asientosSolicitados = parseInt(asientosSolicitados); // Asegurar que sea un número
    let valid = false; // Variable para verificar si encontramos suficientes asientos

    if (asientosSolicitados > N) {
        console.log(emptySeats); // Mostrar los IDs encontrados (vacío)
        return emptySeats; // Si los asientos solicitados exceden el tamaño de la fila, devolver un set vacío
    }

    // Recorrer las filas desde la ultima hacia la primera
    for (let i = N - 1; i >= 0; i--) {
        let fila = butacas[i];
        let contador = 0;
        let ids = [];

        // Recorrer la fila buscando asientos libres consecutivos
        for (let j = 0; j < N; j++) {
            if (!fila[j].estado) { // Si el asiento está libre
                contador++;
                ids.push(fila[j].id); // Agregar el ID del asiento a la lista de IDs seleccionados

                // Si hemos encontrado suficientes asientos consecutivos
                if (contador === asientosSolicitados && !valid) {
                    emptySeats = new Set(ids); // Guardamos los IDs encontrados
                    valid = true; // Marcamos que hemos encontrado una solución válida
                }
            } else {
                // Resetear el contador si encontramos un asiento ocupado
                contador = 0;
                ids = [];
            }
        }
    }

    if (valid) {
        console.log("Asientos sugeridos:", emptySeats); // Log de los asientos sugeridos
    } else {
        console.log("No se encontraron suficientes asientos consecutivos.");
    }
    
    return emptySeats; // Devolver los asientos encontrados o un set vacío si no se encontraron suficientes asientos consecutivos
}

function suggestSeats() {
    let numAsientos = document.getElementById("numAsientos");
    numAsientos.addEventListener('input', () => suggest(numAsientos.value));
}

// Inicializar el evento para sugerir asientos
suggestSeats();
