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


// Función para reservar un asiento

function suggest(numAsientosPedidos) {
    let asientosPropuestos = new Set(); // Set para almacenar los IDs de los asientos propuestos

    if(numAsientosPedidos <= 0 || numAsientosPedidos > N) {
        return asientosPropuestos; // Devolver un Set vacío si el número de asientos pedidos no es válido
    }

    for(let fila = N-1; fila >= 0 && asientosPropuestos.size < numAsientosPedidos; fila--) { // Recorrer las filas de abajo a arriba
        asientosPropuestos.clear(); // Limpiar el Set de asientos propuestos
        for(let asiento = 0; asiento < N && asientosPropuestos.size < numAsientosPedidos && N-asiento >= numAsientosPedidos - asientosPropuestos.size; asiento++) { // Recorrer los asientos de izquierda a derecha
            const { id, estado } = butacas[fila][asiento]; // Obtener el ID y el estado del asiento actual

            if (!estado) { // Si el asiento está libre
              asientosPropuestos.add(id); // Añadir el ID del asiento al Set de asientos propuestos
            } else {
              asientosPropuestos.clear(); // Limpiar el Set de asientos propuestos si el asiento no está libre
            }
        }
    }
    
    // return asientosPropuestos; // Devolver el Set de asientos propuestos. Desactivado para el ejercicio
    return console.log(asientosPropuestos);
}