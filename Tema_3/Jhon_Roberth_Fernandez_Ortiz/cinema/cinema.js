const N = 10;

// Función para inicializar la matriz de butacas
function setupCinemaSeats() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < N; j++) {
            // Nuevo asiento
            fila.push({
                id: idContador++,
                estado: true // Estado inicial libre
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

let seats = setupCinemaSeats();
seats[7][0].estado = true;
seats[7][1].estado = true;
seats[7][2].estado = true;
seats[7][3].estado = true;
seats[7][4].estado = true;
seats[7][5].estado = false;
seats[7][6].estado = false;
seats[7][7].estado = false;
seats[7][8].estado = false;
seats[7][9].estado = false;


function suggest() {

    const input = document.getElementById('inputNumberChairs');
    const reserva = input.value;

    if(reserva > N) {
        alert(`The number of tickets exceeds the number of chairs:  ${reserva}`);
        return [];
    }

    let reserveNumber = new Array(parseInt(reserva)).fill(1).toReversed();
    let availableRows = [];

    seats.forEach(x => {
        let availableChair = x.map(x => x.estado === true ? 1 : 0)
        availableRows.push(availableChair.toString().includes(reserveNumber.toString()));
    });

    let availableChairs = availableRows.includes(true)
        ? seats[availableRows.lastIndexOf(true)].filter(x => x.estado === true)
        : [];

    const freeChairs = getConsecutiveAvailableSeats(availableChairs.map(x => x.id), reserva);
    console.log(freeChairs)
    return freeChairs;
}

function getConsecutiveAvailableSeats(arr, reserva) {
    let freeSeats = [];
    for (let i = 0; i <= arr.length - reserva; i++) {
        let isConsecutive = true;
        for (let j = 1; j < reserva; j++) {
            if (arr[i + j] !== arr[i] + j) {
                isConsecutive = false;
            }
        }
        if (isConsecutive) {
            freeSeats.push(arr.slice(i, i + reserva));
        }
    }
    return freeSeats;
}
