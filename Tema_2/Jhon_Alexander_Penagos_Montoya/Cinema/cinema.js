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
                estado: Math.random() < 0.5 // Estado inicial libre
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

// El recorrido de butacas ocurre des la fila mas cercana a la pantalla hasta la mas lejana
// Por ende las butacas disponibles en la fila mas lejana serán cuyos Id sean los mas grandes
// o mayores para esta condición
function suggest(numReserva) {
    const reserva = new Set();
    const reservaTemporal = new Set();
    if (numReserva <= N) {
        butacas.forEach((row) => {
            reservaTemporal.clear()
            row.forEach((col) => {
                if (!col.estado && reservaTemporal.size < numReserva)
                    reservaTemporal.add(col.id);
                else if (reservaTemporal.size < numReserva)
                    reservaTemporal.clear();
            })
            if (reservaTemporal.size === numReserva) {
                reserva.clear();
                reservaTemporal.forEach(id => reserva.add(id));
            }
        })
    }
    return reserva;
}

// Inicializar la matriz
let butacas = setup();

// Imprimir la matriz
console.log(butacas);

// Imprimir pruebas
console.log(suggest(4));
console.log(suggest(2));
console.log(suggest(1));
console.log(suggest(7));
console.log(suggest(5));
console.log(suggest(11));