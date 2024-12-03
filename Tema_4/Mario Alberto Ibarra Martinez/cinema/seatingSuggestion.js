const N = 10; // Número de filas y columnas

// Función para sugerir asientos
function suggest(numAsientos) {
    const reservados = new Set();
    let filaCorrecta = -1;

    // Verificar que el número de asientos no exceda el total
    if (numAsientos <= 0 || numAsientos > N) {
        alert("Por favor, ingrese un número válido de asientos.");
    } else {
        // Comenzar desde la fila 10 hacia abajo
        for (let i = N - 1; i >= 0; i--) {
            const fila = document.querySelectorAll(`.seating-chart .row:nth-child(${i + 1}) .seat`);
            let asientosLibresConsecutivos = 0;

            for (let j = 0; j < fila.length; j++) {
                if (!fila[j].classList.contains('selected')) {
                    asientosLibresConsecutivos++;
                    reservados.add(j + 1); // Agregar el ID del asiento a reservados
                } else {
                    asientosLibresConsecutivos = 0; // Reiniciar contador si hay un asiento seleccionado
                }

                // Verificar si se alcanzó el número de asientos solicitados
                if (asientosLibresConsecutivos === numAsientos) {
                    filaCorrecta = i; // Se encontró la fila correcta
                }
            }

            // Terminar el bucle de filas si se encontró una fila válida
            if (filaCorrecta >= 0) {
                i = -1; // Terminar el bucle de filas
            }
        }

        // Si se encontraron asientos, marcarlos como seleccionados
        if (filaCorrecta >= 0) {
            const fila = document.querySelectorAll(`.seating-chart .row:nth-child(${filaCorrecta + 1}) .seat`);
            let asientosContados = 0;

            for (let j = 0; j < fila.length; j++) {
                if (!fila[j].classList.contains('selected') && asientosContados < numAsientos) {
                    fila[j].classList.add('selected'); // Marcar asiento como seleccionado
                    asientosContados++;
                }
            }
            alert(`Se han reservado ${numAsientos} asientos en la fila ${filaCorrecta + 1}.`);
        } else {
            alert("No hay suficientes asientos consecutivos disponibles.");
        }
    }

    // Limpiar el campo de entrada
    document.getElementById('seats').value = '';
}

// Vincular el botón a la función suggest
const seatsInput = document.getElementById('seats');

document.getElementById('reserveButton').addEventListener('click', function() {
    suggest(parseInt(seatsInput.value));
});