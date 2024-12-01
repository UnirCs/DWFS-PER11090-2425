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
    let asientosPropuestos = new Set();

    if(numAsientosPedidos <= 0 || numAsientosPedidos > N) {
        return asientosPropuestos;
    }

    for(let fila = N-1; fila >= 0 && asientosPropuestos.size < numAsientosPedidos; fila--) {
        asientosPropuestos.clear();
        for(let asiento = 0; asiento < N && asientosPropuestos.size < numAsientosPedidos && N-asiento >= numAsientosPedidos - asientosPropuestos.size; asiento++) {
            const { id, estado } = butacas[fila][asiento];

            if (!estado) {
              asientosPropuestos.add(id);
            } else {
              asientosPropuestos.clear();
            }
        }
    }
    
    return asientosPropuestos;
}

// Reservar 3 asientos contiguos
console.log(suggest(3)); // Set { 91, 92, 93 }

// Supongamos que se reservan los asientos 91 a 98
butacas[9][0].estado = true;
butacas[9][1].estado = true;
butacas[9][2].estado = true;
butacas[9][3].estado = true;
butacas[9][4].estado = true;
butacas[9][5].estado = true;
butacas[9][6].estado = true;
butacas[9][7].estado = true;

// Reservar 4 asientos contiguos
console.log(suggest(4)); // Set { 81, 82, 83, 84 }