// Definir el tamaño de la matriz de butacas
const N = 10;

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1
    let butacas = [];

    for (let i = 0; i < N; i++) {
        let fila = [];
        for (let j = 0; j < N; j++) {
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
let seats = setup();

// Función para sugerir butacas en la última fila
function suggest(nSeats) {
    const tempSeats = new Set(); // Resultado temporal

    if (nSeats <= N) {
        const lastRow = seats[N - 1]; // Última fila
        for (let asiento of lastRow) {
            if (!asiento.estado && tempSeats.size < nSeats) {
                tempSeats.add(asiento.id); // Agregar el ID al Set
            }
        }
    }

    console.log("Sugerencia de asientos:", Array.from(tempSeats));
    return tempSeats;
}

// Función para manejar el evento onInput
function handleInputChange() {
    const input = document.getElementById("num_asientos");
    const numAsientos = parseInt(input.value);

    if (!isNaN(numAsientos)) {
        suggest(numAsientos); // Usar el número de asientos del input
    }
}

// Llamada inicial a la función suggest para sugerir 8 asientos
suggest(8);
