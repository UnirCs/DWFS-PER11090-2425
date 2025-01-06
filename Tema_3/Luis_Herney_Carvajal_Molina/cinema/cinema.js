const seatsContainer = document.getElementById('seatsContainer');
const selectSeatsButton = document.getElementById('selectSeatsButton');
const confirmReservationButton = document.getElementById('confirmReservationButton');
const messageElement = document.getElementById('message');
const selectedSeatsInfo = document.getElementById('selectedSeatsInfo');
const numSeatsInput = document.getElementById('numSeats');

let seats = [];
let selectedSeats = [];

// Inicializar las sillas (10x10) con números de fila
function initializeSeats() {
    seats = [];
    seatsContainer.innerHTML = ''; // Limpiar el contenedor

    // Crear las filas de sillas
    for (let i = 0; i < 10; i++) {
        const filaNum = document.createElement('div');
        filaNum.classList.add('fila-num');
        
        // Crear el contenido para cada fila: "Fila X"
        const filaLabel = document.createElement('span');
        filaLabel.textContent = `Fila ${i + 1}`;
        filaNum.appendChild(filaLabel);

        seatsContainer.appendChild(filaNum);

        // Crear las sillas de cada fila
        for (let j = 0; j < 10; j++) {
            const seatElement = document.createElement('div');
            seatElement.classList.add('seat');
            seatElement.dataset.index = `${i}-${j}`;

            // Verificar si la silla está ocupada (Ejemplo de algunas sillas ocupadas)
            if (Math.random() < 0.1) { // Ocupa aleatoriamente algunas sillas
                seatElement.classList.add('occupied');
            }

            seatElement.addEventListener('click', () => selectSeat(seatElement));
            seats.push(seatElement);
            seatsContainer.appendChild(seatElement);
        }
    }
}

// Función para seleccionar sillas contiguas
function selectContiguousSeats() {
    const seatsToSelect = parseInt(numSeatsInput.value);
    selectedSeats = [];
    let availableSeats = [];

    // Buscar en cada fila sillas contiguas disponibles, empezando desde las filas más alejadas
    for (let i = 9; i >= 0; i--) {
        const rowSeats = seats.slice(i * 10, (i + 1) * 10); // Obtener las sillas de la fila actual
        let consecutiveFreeSeats = [];
        
        // Buscar sillas libres contiguas en la fila
        for (let j = 0; j < rowSeats.length; j++) {
            if (!rowSeats[j].classList.contains('occupied')) {
                consecutiveFreeSeats.push(rowSeats[j]);
                if (consecutiveFreeSeats.length === seatsToSelect) {
                    break;
                }
            } else {
                consecutiveFreeSeats = [];
            }
        }

        // Si encontramos las sillas contiguas, las seleccionamos
        if (consecutiveFreeSeats.length === seatsToSelect) {
            selectedSeats = consecutiveFreeSeats;
            updateSelectedSeatsInfo();
            updateConfirmButtonState();
            messageElement.textContent = '';
            return;
        }
    }

    // Si no se encuentran sillas contiguas
    messageElement.textContent = 'Desafortunadamente, no hay suficientes sillas contiguas disponibles.';
    updateConfirmButtonState();
}

// Seleccionar una silla
function selectSeat(seatElement) {
    if (seatElement.classList.contains('occupied')) return; // Si está ocupada, no se puede seleccionar

    if (seatElement.classList.contains('selected')) {
        seatElement.classList.remove('selected');
        selectedSeats = selectedSeats.filter(seat => seat !== seatElement);
    } else {
        if (selectedSeats.length < parseInt(numSeatsInput.value)) {
            seatElement.classList.add('selected');
            selectedSeats.push(seatElement);
        }
    }
    updateSelectedSeatsInfo();
    updateConfirmButtonState();
}

// Actualizar la información de las sillas seleccionadas
function updateSelectedSeatsInfo() {
    if (selectedSeats.length > 0) {
        const selectedIndexes = selectedSeats.map(seat => seat.dataset.index);
        selectedSeatsInfo.textContent = `Sillas seleccionadas: ${selectedIndexes.join(', ')}`;
    } else {
        selectedSeatsInfo.textContent = '';
    }
}

// Actualizar estado del botón de confirmar reserva
function updateConfirmButtonState() {
    if (selectedSeats.length === parseInt(numSeatsInput.value)) {
        confirmReservationButton.disabled = false;
        messageElement.textContent = '';
    } else {
        confirmReservationButton.disabled = true;
    }
}

// Confirmar la reserva
function confirmReservation() {
    selectedSeats.forEach(seat => seat.classList.add('occupied'));
    selectedSeats.forEach(seat => seat.classList.remove('selected'));
    selectedSeats = [];
    updateSelectedSeatsInfo();
    updateConfirmButtonState();
    messageElement.textContent = 'Reserva confirmada. Las sillas están ocupadas.';
}

// Inicializar la sala de cine
initializeSeats();
