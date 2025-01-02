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

    butacas.forEach(fila => {
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
    butacas.forEach(fila => {
        fila.forEach(butaca => {
            if (butaca.id === id && !butaca.estado) {
                butaca.selected = !butaca.selected;
            }
        });
    });
    renderizarButacas(butacas);
}

// Sugerir asientos juntos
function suggest(butacas, numAsientos) {
    let asientosSugeridos = [];
    let tempSeleccionados = [];
    let libres = 0;

    butacas.forEach(fila => {
        tempSeleccionados = []; // Reiniciar selección temporal para cada fila
        libres = 0; // Reiniciar contador de libres para cada fila

        fila.forEach(butaca => {
            if (!butaca.estado) {
                libres++;
                tempSeleccionados.push(butaca.id);

                if (libres === numAsientos && asientosSugeridos.length === 0) {
                    // Si encontramos suficientes asientos en una fila, los almacenamos
                    asientosSugeridos = [...tempSeleccionados];
                }
            } else {
                libres = 0; // Reiniciar si encontramos una ocupada
                tempSeleccionados = [];
            }
        });
    });

    renderizarButacas(butacas, asientosSugeridos);
}

// Confirmar la reserva
function confirmarReserva() {
    let asientosReservados = [];
    butacas.forEach(fila => {
        fila.forEach(butaca => {
            if (butaca.selected) {
                butaca.estado = true;
                butaca.selected = false;
                asientosReservados.push(butaca.id);
            }
        });
    });

    if (asientosReservados.length > 0) {
        console.log(`Reserva confirmada para las butacas: ${asientosReservados.join(', ')}`);
    } else {
        alert("No has seleccionado ninguna butaca.");
    }

    renderizarButacas(butacas);
}

// Manejar cambios en el input
function handleInputChange() {
    const numAsientos = parseInt(document.getElementById('numAsientos').value, 10);

    if (isNaN(numAsientos) || numAsientos <= 0) {
        alert("Introduce un número válido de asientos.");
    } else if (numAsientos > N) {
        alert(`No puedes reservar más de ${N} asientos.`);
    } else {
        suggest(butacas, numAsientos);
    }
}

// Inicialización
let butacas = setup();
renderizarButacas(butacas);

// Evento para confirmar la reserva
document.getElementById('btn-confirm').addEventListener('click', confirmarReserva);
