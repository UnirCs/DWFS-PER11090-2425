// Configuración inicial
const ROWS = 5;
const COLS = 13;

// Inicializar la matriz de butacas
function setup() {
    let idContador = 1;
    let butacas = [];
    for (let i = 0; i < ROWS; i++) {
        let fila = [];
        for (let j = 0; j < COLS; j++) {
            fila.push({
                id: idContador++, // ID único
                estado: false // Estado inicial: libre
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

let butacas = setup(); // Generar la matriz

// Cambiar manualmente algunos estados para probar
butacas[0][2].estado = true; // A3 ocupada
butacas[2][6].estado = true; // C7 ocupada
butacas[4][10].estado = true; // E11 ocupada

// Función sugerir asientos
function suggest(matrix, numSeats) {
    if (numSeats > COLS) return new Set(); // Más asientos que columnas

    for (let i = ROWS - 1; i >= 0; i--) {
        let consecutiveSeats = 0;
        let ids = [];
        for (let j = 0; j < COLS; j++) {
            if (!matrix[i][j].estado) {
                consecutiveSeats++;
                ids.push(matrix[i][j].id);
                if (consecutiveSeats === numSeats) {
                    return new Set(ids); // Retornar IDs
                }
            } else {
                consecutiveSeats = 0; // Reiniciar si no están juntos
                ids = [];
            }
        }
    }
    return new Set(); // No se encontraron suficientes asientos consecutivos
}

// Función para gestionar la reserva de butacas
function reserveSeats() {
    const numSeats = parseInt(document.getElementById("numberOfSeats").value);
    if (isNaN(numSeats) || numSeats <= 0) {
        alert("Ingrese un número válido de asientos.");
        return;
    }

    const result = suggest(butacas, numSeats);
    if (result.size > 0) {
        result.forEach((id) => markAsOccupied(id));
        alert(`Asientos reservados con éxito: ${Array.from(result).join(", ")}`);
        renderSeats(butacas); // Actualizar visualización
    } else {
        alert("No se encontraron suficientes asientos disponibles juntos.");
    }
}

// Marcar asientos como ocupados
function markAsOccupied(id) {
    for (let fila of butacas) {
        for (let asiento of fila) {
            if (asiento.id === id) {
                asiento.estado = true;
            }
        }
    }
}

// Renderizar visualmente las butacas
function renderSeats(matrix) {
    const seatingArea = document.querySelector(".seating-area");
    seatingArea.innerHTML = ""; // Limpiar contenido previo

    matrix.forEach((fila, i) => {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("d-flex", "justify-content-center", "mb-2");

        fila.forEach((asiento, j) => {
            const seat = document.createElement("span");
            seat.classList.add("seat");
            seat.innerText = `${String.fromCharCode(65 + i)}${j + 1}`; // Ej: A1, B2

            if (asiento.estado) {
                seat.classList.add("occupied"); // Marcar ocupado
            } else {
                seat.classList.add("available"); // Disponible
            }

            rowDiv.appendChild(seat);
        });

        seatingArea.appendChild(rowDiv);
    });
}

// Renderizar butacas al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    renderSeats(butacas);
});
