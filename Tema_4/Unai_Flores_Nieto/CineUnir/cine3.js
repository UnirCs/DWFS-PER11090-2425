const N = 8; // Número de butacas por fila

// Crear y configurar las butacas en el DOM
function setupSeats() {
    const seatSelection = document.querySelector('.seat-selection');
    const butacas = [];

    // Creamos 3 filas de asientos
    for (let i = 0; i < 3; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('seat-row');

        const fila = [];
        for (let j = 0; j < N; j++) {
            const id = `${i}-${j}`;
            const seat = {
                id,
                estado: false // Todas libres inicialmente
            };

            // Marcar asientos ocupados según el diseño original
            if ((i === 0 && (j === 2 || j === 6)) || (i === 1 && j === 2) || (i === 2 && (j === 0 || j === 5))) {
                seat.estado = true;
            }

            fila.push(seat);

            // Crear asiento en el DOM
            const seatDiv = document.createElement('div');
            seatDiv.classList.add('seat');
            seatDiv.id = `seat-${id}`;
            seatDiv.textContent = j + 1; // Mostrar el número del asiento
            if (seat.estado) {
                seatDiv.classList.add('occupied');
            }

            rowDiv.appendChild(seatDiv);
        }

        butacas.push(fila);
        seatSelection.appendChild(rowDiv);
    }

    console.log("Matriz de butacas:", butacas); // Depuración: Ver la estructura de la matriz
    return butacas;
}

// Sugerir butacas consecutivas
function suggest(numAsientos, butacas) {
    let butacasLibres = new Set();
    let encontrado = false;

    // Depuración: Ver la cantidad de filas en la matriz
    console.log("Número de filas:", butacas.length);
    
    for (let i = N - 1; i >= 0 && !encontrado; i--) {
        console.log("Revisando fila:", i); // Depuración: Ver qué fila se está revisando
        let asientosSeguidos = 0;
        let idsAsientos = [];

        // Recorremos las columnas
        for (let j = 0; j < N; j++) {
            // Verificar si estamos accediendo a un valor válido
            if (butacas[i] && butacas[i][j] && !butacas[i][j].estado) {
                idsAsientos.push(butacas[i][j].id);
                asientosSeguidos++;
            } else {
                asientosSeguidos = 0;
                idsAsientos = [];
            }

            if (asientosSeguidos === numAsientos) {
                idsAsientos.forEach(id => butacasLibres.add(id));
                encontrado = true;
            }
        }
    }

    console.log("Asientos sugeridos:", [...butacasLibres]); // Depuración
    return encontrado ? butacasLibres : new Set();
}

// Actualizar visualmente las butacas preseleccionadas
function updateSeats(selectedSeats) {
    document.querySelectorAll('.seat').forEach(seat => {
        seat.classList.remove('preselected');
    });

    console.log("Seats to be preselected:", selectedSeats); // Depuración
    selectedSeats.forEach(id => {
        const seatDiv = document.getElementById(`seat-${id}`);
        if (seatDiv) {
            seatDiv.classList.add('preselected');
        }
    });
}

// Manejar cambios en el input
function handleInput(event, butacas) {
    const numSeats = parseInt(event.target.value, 10);
    console.log("Number of seats selected:", numSeats); // Depuración
    if (!isNaN(numSeats) && numSeats > 0 && numSeats <= N) {
        const selectedSeats = suggest(numSeats, butacas);
        updateSeats(selectedSeats);
    }
}

// Configuración inicial
document.addEventListener('DOMContentLoaded', () => {
    const butacas = setupSeats();
    const input = document.getElementById('numSeats');
    input.addEventListener('input', (event) => handleInput(event, butacas));
});
