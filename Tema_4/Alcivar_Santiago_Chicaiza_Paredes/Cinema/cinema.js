// Definir el tamaño de la matriz de butacas
const N = 7; // Número de filas y columnas
let selectedSeats = [];

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

function removeSelectedSeats(seats) {
    seats.forEach(seatId => {
        document.getElementById(`seat-${seatId}`).classList.remove("occupied");
    });
}

function addSelectedSeats(seats) {
    seats.forEach(seatId => {
        document.getElementById(`seat-${seatId}`).classList.add("occupied");
    });
}

function suggest(numberSeats) {
    if (numberSeats > N) return new Set(); // Verificación temprana de solicitud inválida
    let suggestedSeats = new Set();

    for (let row = N - 1; suggestedSeats.size < numberSeats; row--) {
        let consecutiveSeats = [];
        for (let seat = 0; seat < N; seat++) {
            if (!butacas[row][seat].estado) {
                const seatId = butacas[row][seat].id;
                consecutiveSeats.push(seatId);
                if (consecutiveSeats.length === numberSeats) {
                    suggestedSeats = new Set(consecutiveSeats);
                    seat = N; // Forzar la salida del bucle interno
                }
            } else {
                consecutiveSeats = []; // Reiniciar si se encuentra un asiento ocupado
            }
        }
    }
    console.log('Butacas sugeridas:', suggestedSeats);
    return suggestedSeats;
}

document.getElementById('seatCount').addEventListener('input', (event) => {
    event.preventDefault();
    const numberSeats = event.target.value;
    const isValidSeats = !!numberSeats && !isNaN(numberSeats) && numberSeats > 0;
    if (isValidSeats) {
        const suggestedSeats = Array.from(suggest(parseInt(numberSeats)));
        if (suggestedSeats.length > 0 && selectedSeats.length > 0) {
            removeSelectedSeats(selectedSeats);
            selectedSeats = [];
        }
        selectedSeats = suggestedSeats;
        addSelectedSeats(selectedSeats);
    }
});

function initSeats() {
    console.log('Inicializando butacas');
    const seats = document.getElementsByClassName("seat");
    for (let i = 0; i < seats.length; i++) {
        seats[i].setAttribute("id", `seat-${i + 1}`);
    }
}

initSeats();
