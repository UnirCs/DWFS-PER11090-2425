// Definir el tamaño de la matriz de butacas
const N = 5; // Número de filas y columnas

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

    // Asignar IDs a los asientos en el DOM
    const seats = document.querySelectorAll('.seat');
    seats.forEach((seat, index) => {
        seat.id = `seat-${index + 1}`;
    });

    return butacas;
}

// Inicializar la matriz
let butacas = setup();

function suggest(solicitud) {
    let respuesta = new Set();

    if(solicitud <= 0 || solicitud > N) {
        return respuesta;
    }

    for(let fila = N - 1; fila >= 0 && respuesta.size < solicitud; fila--) {
        respuesta.clear();
        
        for(let asiento = 0; asiento < N && respuesta.size < solicitud && N - asiento >= solicitud - respuesta.size; asiento++) {
            const { id, estado } = butacas[fila][asiento];

            if (!estado) {
              respuesta.add(id);
            } else {
              respuesta.clear();
            }
        }
    }
    
    return respuesta;
}

// Uso del DOM para escuchar el evento input
const inputNumber = document.getElementById('inputNumber');
inputNumber.addEventListener('input', updateSelection);


// Función para actualizar la selección de butacas
function updateSelection() {
    // Obtener el número de asientos solicitados
    const numAsientos = parseInt(document.getElementById('inputNumber').value, 10);

    // Sugerir asientos
    const asientosSugeridos = suggest(numAsientos);

    // Limpiar la selección anterior
    document.querySelectorAll('.seat.selected').forEach(seat => {
        seat.classList.remove('selected');
    });

    // Pintar los asientos sugeridos
    asientosSugeridos.forEach(id => {
        const seat = document.getElementById(`seat-${id}`);
        if (seat) {
            seat.classList.add('selected');
        }
    });
}
