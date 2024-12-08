// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

// Función para inicializar la matriz de butacas
function setup() {
    console.log('Butacas iniciadas');
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

function renderCine() {
    const cine = document.querySelector('.cine');
    cine.innerHTML = '';
    butacas.forEach(fila => {
        const filaDiv = document.createElement('div');
        filaDiv.className = 'd-flex';
        fila.forEach(seat => {
            const seatDiv = document.createElement('div');
            seatDiv.className = 'seat';
            seatDiv.id = seat.id;
            filaDiv.appendChild(seatDiv);
        });
        cine.appendChild(filaDiv);
    });
}

function suggest(numSeats) {
    const numColumns = butacas[0].length;

    if (numSeats > numColumns) {
        return new Set();
    }

    let availableSeats = [];
    let reserved = false;
    for (let row = butacas.length - 1; row >= 0; row--) {
        for (let col = 0; col < numColumns; col++) {
            if (!butacas[row][col].estado) {
                if (!reserved) availableSeats.push(butacas[row][col].id);
                if (availableSeats.length === numSeats) reserved = true;
            } else {
                availableSeats = [];
            }
        }
    }

    return new Set(availableSeats);
}


const butacas = setup();
renderCine();
window.onload = function () {
    document.getElementById('seatCount').addEventListener('change', () => {
        renderCine();
        const seatCount = parseInt(document.getElementById('seatCount').value);
        if (seatCount > N) {
            document.getElementById('seatCount').value = 0;
            alert('El número de asientos a reservar no puede ser mayor al número de columnas');
            return;

        }

        if (seatCount < 1) {
            document.getElementById('seatCount').value = 0;
            alert('El número de asientos a reservar no puede ser menor a 0');
            return;

        }
        var seatReserved = suggest(seatCount);
        seatReserved.forEach(seat => {
            document.getElementById(seat).classList.add('reserved');
        });
    });
};