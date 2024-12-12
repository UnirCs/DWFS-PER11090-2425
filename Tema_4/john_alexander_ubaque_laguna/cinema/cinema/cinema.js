// Definir el tamaño de la matriz de butacas
const rows = 10;
const seatsPerRow = 10;

let matrix = setup();

document.addEventListener('DOMContentLoaded', () => {
    const seatsContainer = document.getElementById('seatsContainer');

    let seatId = 1;

    for (let i = 1; i <= rows; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('seat-row');

        const rowLabel = document.createElement('div');
        rowLabel.classList.add('row-label');
        rowLabel.textContent = `Fila ${i}`;
        rowDiv.appendChild(rowLabel);

        for (let j = 1; j <= seatsPerRow; j++) {
            const seatDiv = document.createElement('div');
            seatDiv.classList.add('seat-free');
            seatDiv.id = `seat-${seatId}`;
            rowDiv.appendChild(seatDiv);
            seatId++;
        }

        seatsContainer.appendChild(rowDiv);
    }
    document.getElementById('txtNumberOfSeats').addEventListener('change', () => {
        const numSeats = parseInt(document.getElementById('txtNumberOfSeats').value, 10);
        suggest(numSeats);
    });

});

function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < rows; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < seatsPerRow; j++) {
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

function suggest(numSeats) {

    let result = new Set();
    if (numSeats>seatsPerRow){
        return result;
    }

    for (let i = matrix.length - 1; i >= 0 &&  result.size !==numSeats; i--) {
        findSeatsInaRow(matrix[i], numSeats,matrix[i].length,result);
    }

    result.forEach(id => {
        document.getElementById(`seat-${id}`).classList.replace('seat-free', 'seat-occupied');
    });


}

function findSeatsInaRow(row, numSeats, seatsPerRow, ids) {
    let consecutiveSeats = 0;

    for (let i = seatsPerRow - 1; i >= 0 && consecutiveSeats !== numSeats; i--) {
        if (!row[i].estado) {
            consecutiveSeats++;
            ids.add(row[i].id);
            if (consecutiveSeats === numSeats) {
                for (let j = i; j < i + numSeats; j++) {
                    row[j].estado = true;
                }
            }
        } else {
            consecutiveSeats = 0;
            ids.clear();
        }
    }
    if (consecutiveSeats < numSeats) {
        ids.clear();
    }
}


