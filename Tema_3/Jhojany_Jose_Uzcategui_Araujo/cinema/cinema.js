// Definir el tamaño de la matriz de butacas
const rows = 5; // Número de filas
const cols = 10; // Número de columnas

const diccionarieNumbersToAlphabet = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
    5: 'E',
    6: 'F',
    7: 'G',
    8: 'H',
    9: 'I',
    0: 'J',
}

const butacasSection = document.getElementById('butacas');

const butacasRow = document.createElement('div');
butacasRow.classList.add('row', 'mb-2');

const butacasRowName = document.createElement('div');
butacasRowName.classList.add('col-1', 'text-center', 'row-container');

const butacasColums = document.createElement('div');
butacasColums.classList.add('col-1', 'text-center');

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < rows; i++) {
        // Nueva fila
        let fila = [];
        const butacasRowClone = butacasRow.cloneNode(true);

        const butacasRowNameClone = butacasRowName.cloneNode(true);
        const spanRowName = document.createElement('span');
        spanRowName.classList.add('fw-bold');
        spanRowName.innerHTML = `Fila ${i + 1}`;
        butacasRowNameClone.appendChild(spanRowName);

        butacasRowClone.appendChild(butacasRowNameClone.cloneNode(true));
        for (let j = 0; j < cols; j++) {
            // Nuevo asiento
            const butacaId = idContador++
            // const estado: false // Estado inicial libre
            const estado = Math.random() < 0.5
            fila.push({
                id: butacaId,
                estado: estado,
            });
            const butacaCol = document.createElement('div');
            butacaCol.id = `butaca-${butacaId}`;
            butacaCol.classList.add('butaca', 'rounded', 'border', 'border-2');
            if (estado)
                butacaCol.classList.add('butaca-ocupada');
            const lastNumber = butacaId % 10;
            butacaCol.innerHTML = `💺${diccionarieNumbersToAlphabet[lastNumber]}`;

            const butacasColumsClone = butacasColums.cloneNode(true);
            butacasColumsClone.appendChild(butacaCol);
            butacasRowClone.appendChild(butacasColumsClone);
        }
        butacas.push(fila);
        butacasRowClone.appendChild(butacasRowNameClone.cloneNode(true));

        butacasSection.appendChild(butacasRowClone);
    }
    return butacas;
}

// El recorrido de butacas ocurre des la fila mas cercana a la pantalla hasta la mas lejana
// Por ende las butacas disponibles en la fila mas lejana serán cuyos Id sean los mas grandes
// o mayores para esta condición 
function suggest(numOri) {
    const numReserva = parseInt(numOri);
    const reserva = new Set();
    const reservaTemporal = new Set();
    butacas.forEach((row) => {
        reservaTemporal.clear()
        row.forEach((col) => {
            document.getElementById(`butaca-${col.id}`).classList.remove('butaca-seleccionada')
            if (!col.estado && reservaTemporal.size < numReserva)
                reservaTemporal.add(col.id);
            else if (reservaTemporal.size < numReserva) 
                reservaTemporal.clear();
        })
        if (reservaTemporal.size === numReserva) {
            reserva.clear();
            reservaTemporal.forEach(id => reserva.add(id));
        }
    })
    reserva.forEach((butacaId) => document.getElementById(`butaca-${butacaId}`).classList.add('butaca-seleccionada'))
    console.log(`Asientos sugeridos: ${reserva.size > 0? Array.from(reserva).join(', ') : 0}`);
    return reserva;
}

// Inicializar la matriz
let butacas = setup();

// Imprimir la matriz
console.log(butacas);
console.log('Butacas inicializadas');
