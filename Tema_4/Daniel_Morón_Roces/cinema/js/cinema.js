document.addEventListener('DOMContentLoaded', () => {
    // Obtener el input para la cantidad de asientos a reservar
    const inputReserva = document.getElementById('reserva_cantidad');
    const filas = document.querySelectorAll('tbody tr'); // Las filas de asientos

    // Función para marcar el último asiento de la fila 5 como reservado
    function marcarUltimoAsientoFila5() {
        const fila5 = filas[4]; // La fila 5 está en el índice 4 (empezando desde 0)
        const ultimoAsiento = fila5.querySelectorAll('td div')[11]; // El último div en la fila 5
        ultimoAsiento.classList.add('butacaReservada'); // Marcarlo como reservado
    }

    // Función sugerir: Encuentra butacas consecutivas en la fila más alejada
    function suggest(numAsientos) {
        // Recorre las filas de atrás hacia adelante
        for (let i = filas.length - 1; i >= 0; i--) {
            const butacasFila = filas[i].querySelectorAll('div');
            let consecutivos = 0;
            const seleccionados = [];

            for (let j = 0; j < butacasFila.length; j++) {
                // Si la butaca no está reservada
                if (!butacasFila[j].classList.contains('butacaReservada')) {
                    consecutivos++;
                    seleccionados.push(butacasFila[j]);

                    // Si encontramos suficientes asientos consecutivos
                    if (consecutivos === numAsientos) {
                        return new Set(seleccionados);
                    }
                } else {
                    // Si la butaca está reservada, reiniciamos la cuenta
                    consecutivos = 0;
                    seleccionados.length = 0;
                }
            }
        }
        return new Set(); // No encontró suficientes asientos
    }

    // Limpiar selección previa de butacas
    function limpiarSeleccion() {
        const butacas = document.querySelectorAll('.butacaDisponible');
        butacas.forEach(butaca => {
            butaca.classList.remove('butacaSeleccionada');
        });
    }

    // Actualizar la selección de butacas (amarillo)
    function actualizarButacasSeleccionadas(asientosSeleccionados) {
        limpiarSeleccion();
        asientosSeleccionados.forEach(butaca => {
            butaca.classList.add('butacaSeleccionada');
        });
    }

    // Evento al cambiar el valor del input
    inputReserva.addEventListener('input', () => {
        const numAsientos = parseInt(inputReserva.value, 10);
        if (isNaN(numAsientos) || numAsientos <= 0) {
            limpiarSeleccion();
            return;
        }

        const asientosSeleccionados = suggest(numAsientos);
        actualizarButacasSeleccionadas(asientosSeleccionados);
    });

    // Marcar el último asiento de la fila 5 como reservado al cargar la página
    marcarUltimoAsientoFila5();
});
