// Selección de elementos del DOM
const seatsContainer = document.getElementById('seats-container');
const seatNumberInput = document.getElementById('seat-number');
const confirmButton = document.getElementById('confirm-button');
const selectedSeatsCount = document.querySelector('#selected-seats-count span');

// Configuración para 50 asientos
const rows = 5; // 5 filas
const seatsPerRow = 10; // 10 asientos por fila
let selectedSeats = 0;

// Generar filas y asientos
for (let i = 0; i < rows; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < seatsPerRow; j++) {
        const seat = document.createElement('div');
        seat.classList.add('seat');
        // 20% de los asientos estarán reservados al azar
        if (Math.random() < 0.2) {
            seat.classList.add('reserved');
        }
        row.appendChild(seat);
    }
    seatsContainer.appendChild(row);
}

// Manejar clic en los asientos
seatsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
        e.target.classList.toggle('selected');
        selectedSeats = document.querySelectorAll('.seat.selected').length;
        selectedSeatsCount.textContent = selectedSeats;
    }
});

// Confirmar reserva
confirmButton.addEventListener('click', () => {
    const seatsToReserve = parseInt(seatNumberInput.value);
    if (seatsToReserve > selectedSeats) {
        alert('No has seleccionado suficientes asientos.');
        return;
    }
    document.querySelectorAll('.seat.selected').forEach((seat, index) => {
        if (index < seatsToReserve) {
            seat.classList.remove('selected');
            seat.classList.add('reserved');
        }
    });
    selectedSeats = document.querySelectorAll('.seat.selected').length;
    selectedSeatsCount.textContent = selectedSeats;
    alert(`${seatsToReserve} asiento(s) reservado(s).`);
});
