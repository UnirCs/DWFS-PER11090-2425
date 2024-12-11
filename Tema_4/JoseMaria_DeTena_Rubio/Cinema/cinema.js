document.addEventListener('DOMContentLoaded', () =>{

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
    
    return asientosPropuestos; // Devolver el Set de asientos propuestos
}

// Obtener contenedor de butacas
const butacasContainer = document.querySelector('.butacas');

// Asignación de IDs a los asientos
butacasContainer.querySelectorAll(".asiento").forEach((asiento, index) => {
    asiento.id = `${index + 1}`;
});

// Establecer algunos asientos ocupados para el ejemplo
butacas[9][0].estado = true;
butacas[9][1].estado = true;
butacas[9][2].estado = true;
butacas[8][8].estado = true;
butacas[8][9].estado = true;

// Identificar y marcar los asientos ocupados
butacas.forEach((fila, filaIndex) => {
    fila.forEach(({estado}, asientoIndex) => {
        if (estado === true) {
            const asientoId = `${filaIndex * 10 + asientoIndex + 1}`;
            document.getElementById(asientoId)?.classList.add("asiento--ocupado");
        }
    });
});

// Escuchar cambios en el campo input y lanzar la función suggest
document.getElementById('txt-formularioReserva').addEventListener('input', function() {
    const numAsientos = parseInt(this.value, 10);
    if (!isNaN(numAsientos)) {
        const asientosPropuestos = Array.from(suggest(numAsientos)); // Convertir el set a un array
        console.log("Asientos propuestos: ", asientosPropuestos.join(", "));

        // Limpiar asientos propuestos anteriores
        document.querySelectorAll('.asiento--seleccionado').forEach(asiento => {
            asiento.classList.remove('asiento--seleccionado');
        });

        // Marcar los asientos propuestos como seleccionados
        asientosPropuestos.forEach(id => {
            document.getElementById(id)?.classList.add('asiento--seleccionado');
        });
    }
});
});