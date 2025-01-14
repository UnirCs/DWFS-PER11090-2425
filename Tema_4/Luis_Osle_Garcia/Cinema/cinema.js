// Definir el tamaño de la matriz de butacas
const N = 8;

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

// Imprimir la matriz
console.log("Butacas inicializadas");

function liberarAsientos(asientos) {
    asientos.forEach(asiento => {
        butacas[asiento.fila - 1][asiento.columna - 1].estado = false;
        // Actualizar el DOM para desmarcar el asiento
        const seatElement = document.querySelector(`.seat[data-fila="${asiento.fila}"][data-columna="${asiento.columna}"]`);
        if (seatElement) {
            seatElement.classList.remove('reserved');
        }
    });
}

function suggest(numAsientos) {
    // Liberar los asientos previamente seleccionados
    const asientosReservados = document.querySelectorAll('.seat.reserved');
    const asientos = Array.from(asientosReservados).map(seatElement => {
        return {
            fila: parseInt(seatElement.getAttribute('data-fila')),
            columna: parseInt(seatElement.getAttribute('data-columna'))
        };
    });
    liberarAsientos(asientos);
    
    let resultado = { fila: -1, asientos: [] };
    let found = false;

    for (let i = N - 1; i >= 0 && !found; i--) {
        let consecutivos = 0;
        let asientosFila = [];

        for (let j = 0; j < N; j++) {
            if (!butacas[i][j].estado) {
                consecutivos++;
                asientosFila.push({ fila: i + 1, columna: j + 1 });
                if (consecutivos === numAsientos) {
                    // Marcar los asientos como reservados
                    asientosFila.forEach(asiento => {
                        butacas[asiento.fila - 1][asiento.columna - 1].estado = true;
                        // Actualizar el DOM para marcar el asiento de verde
                        const seatElement = document.querySelector(`.seat[data-fila="${asiento.fila}"][data-columna="${asiento.columna}"]`);
                        seatElement.classList.add('reserved');
                    });
                    resultado = { fila: i + 1, asientos: asientosFila };
                    found = true;
                }
            } else {
                consecutivos = 0;
                asientosFila = [];
            }
        }
    }

    console.log("Asientos sugeridos: \n" + "Fila: " + resultado.fila + "\n");
    
    
    return resultado;
}

document.addEventListener('DOMContentLoaded', function() {
    const numAsientosInput = document.querySelector('input[type="number"]');

    numAsientosInput.addEventListener('input', function() {
        const numAsientos = parseInt(numAsientosInput.value);
        if (!isNaN(numAsientos) && numAsientos > 0) {
            suggest(numAsientos);
        }
    });
});