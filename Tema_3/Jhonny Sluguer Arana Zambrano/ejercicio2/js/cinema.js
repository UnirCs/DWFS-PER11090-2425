const N = 7; // Número de filas y columnas

// Inicializar la matriz de butacas
function setup() {
    let idContador = 1;
    let butacas = [];

    for (let i = 0; i < N; i++) {
        let fila = [];
        for (let j = 0; j < N; j++) {
            fila.push({ id: idContador++, estado: false }); // false: libre
        }
        butacas.push(fila);
    }
    return butacas;
}

// Renderizar butacas en el DOM
function renderizarButacas(butacas, asientosSugeridos = []) {
    const container = document.getElementById('seat-container');
    container.innerHTML = ''; // Limpiar contenedor

    butacas.forEach((fila, i) => {
        const filaDiv = document.createElement('div');
        filaDiv.classList.add('d-flex', 'justify-content-center', 'mb-1');

        fila.forEach(butaca => {
            const butacaDiv = document.createElement('div');
            butacaDiv.classList.add('seat');

            if (butaca.estado) {
                butacaDiv.classList.add('occupied'); // Marcar como ocupada
            } else if (asientosSugeridos.includes(butaca.id)) {
                butacaDiv.classList.add('suggested'); // Resaltar sugeridos
            } else if (butaca.selected) {
                butacaDiv.classList.add('selected'); // Resaltar seleccionados manualmente
            }

            butacaDiv.dataset.id = butaca.id;
            butacaDiv.addEventListener('click', () => seleccionarButaca(butaca.id)); // Evento de clic
            filaDiv.appendChild(butacaDiv);
        });

        container.appendChild(filaDiv);
    });
}

// Seleccionar o deseleccionar una butaca manualmente
function seleccionarButaca(id) {
    for (let fila of butacas) {
        let butaca = fila.find(b => b.id === id);
        if (butaca && !butaca.estado) { // Solo butacas libres
            butaca.selected = !butaca.selected; // Alternar selección
        }
    }
    renderizarButacas(butacas); // Actualizar la vista
}

// Sugerir asientos juntos
function suggest(butacas, numAsientos) {
    console.log(`Sugerir ${numAsientos} asientos`);
    for (let i = butacas.length - 1; i >= 0; i--) {
        let libres = 0;
        let asientosSeleccionados = [];

        for (let j = 0; j < butacas[i].length; j++) {
            if (!butacas[i][j].estado) {
                libres++;
                asientosSeleccionados.push(butacas[i][j].id);
            } else {
                libres = 0;
                asientosSeleccionados = [];
            }

            if (libres === numAsientos) {
                console.log(`Asientos sugeridos: ${asientosSeleccionados.join(', ')}`);
                renderizarButacas(butacas, asientosSeleccionados);
                return asientosSeleccionados;
            }
        }
    }

    console.log("No hay suficientes asientos disponibles.");
    renderizarButacas(butacas); // Re-render sin sugerencias
    return [];
}

// Confirmar la reserva
function confirmarReserva() {
    let asientosReservados = [];
    for (let fila of butacas) {
        fila.forEach(butaca => {
            if (butaca.selected) {
                butaca.estado = true; // Marcar como ocupado
                butaca.selected = false; // Quitar selección
                asientosReservados.push(butaca.id);
            }
        });
    }

    if (asientosReservados.length > 0) {
        renderizarButacas(butacas);
        console.log(`Reserva confirmada para las butacas: ${asientosReservados.join(', ')}`);
    } else {
        alert("No has seleccionado ninguna butaca.");
    }
}

// Manejar cambios en el input
function handleInputChange() {
    const numAsientos = parseInt(document.getElementById('numAsientos').value, 10);

    if (isNaN(numAsientos) || numAsientos <= 0) {
        alert("Por favor, introduce un número válido de asientos.");
        renderizarButacas(butacas);
        return;
    }

    if (numAsientos > N) {
        alert(`No puedes reservar más de ${N} asientos.`);
        document.getElementById('numAsientos').value = '';
        renderizarButacas(butacas);
        return;
    }

    suggest(butacas, numAsientos);
}

// Inicialización
let butacas = setup();
renderizarButacas(butacas);

// Evento para confirmar la reserva
document.getElementById('btn-confirm').addEventListener('click', confirmarReserva);
