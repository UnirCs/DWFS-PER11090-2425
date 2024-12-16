// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

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

const seatContainer = document.getElementById('seatsContainer');

function setButacas() {
    butacas.forEach((fila,i) => {
        let seatsRow = document.createElement('div');
        seatsRow.className = "seats-row";

        fila.forEach((butaca, j) => {
            let butacaElement = document.createElement('div')
            butacaElement.className = "seat"
            butacaElement.innerText = butacas[i][j].id
            seatsRow.appendChild(butacaElement);
        })

        seatContainer.appendChild(seatsRow);
    })
}

setButacas();

function suggest(n) {
    if (n > N) return new Set();

    let selectedSeats = new Set();

    let busyRowsCount = 0
    let freeSeatsCount = 0
    let addSeats = 0

    for (let i = N-1; i >= 0; i--) {
        for (let j = N-1; j >= 0; j--) {
            if (butacas[i][j].estado === false) {
                freeSeatsCount++;
                if (addSeats < n) {
                    selectedSeats.add(butacas[i][j]);
                    butacas[i][j].estado = true;
                    addSeats++;
                }
            }
        }
        
        if (n > freeSeatsCount) {
            busyRowsCount++;
            selectedSeats.clear()   
        }
    }

    if (busyRowsCount === N) {
        return new Set();
    }

    console.log("Reservando: ", selectedSeats);

    return selectedSeats;
}