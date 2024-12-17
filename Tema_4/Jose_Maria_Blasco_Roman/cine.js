// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

// Inicializar la matriz de butacas
let butacas = [];

function setup() {
    let idContador = 1; // Contador para asignar ID único
    for (let i = 0; i < N; i++) {
        let fila = [];
        for (let j = 0; j < N; j++) {
            fila.push({
                id: idContador++,
                estado: false, // Libre
                fila: i + 1,
                columna: String.fromCharCode(65 + j), // A-J
            });
        }
        butacas.push(fila);
    }
}

// Función para asignar IDs a cada asiento en el DOM
function asignarIDs() {
    const filas = document.querySelectorAll(".cine__asientos tr");
    filas.forEach((fila, i) => {
        const asientos = fila.querySelectorAll(".cine__asiento");
        asientos.forEach((asiento, j) => {
            // Asignamos el ID del objeto butaca al elemento HTML
            asiento.setAttribute("id", `asiento-${butacas[i][j].id}`);
        });
    });
}

// Actualizar el DOM para reflejar los asientos
function renderAsientos() {
    const filas = document.querySelectorAll(".cine__asientos tr");
    filas.forEach((fila, i) => {
        const asientos = fila.querySelectorAll(".cine__asiento");
        asientos.forEach((asiento, j) => {
            if (butacas[i][j].estado) {
                asiento.classList.add("reserved");
            } else {
                asiento.classList.remove("reserved");
            }
        });
    });
}

// Liberar asientos
function liberarAsientos() {
    document.querySelectorAll(".reserved").forEach(seat => {
        seat.classList.remove("reserved");
    });
    butacas.flat().forEach(asiento => (asiento.estado = false));
}

// Sugerir y reservar asientos
function suggest(numAsientos) {
    liberarAsientos();
    let resultado = { fila: -1, asientos: [] };

    for (let i = N - 1; i >= 0; i--) {
        let consecutivos = 0;
        let seleccionados = [];

        for (let j = 0; j < N; j++) {
            if (!butacas[i][j].estado) {
                consecutivos++;
                seleccionados.push(butacas[i][j]);
                if (consecutivos === numAsientos) {
                    seleccionados.forEach(asiento => (asiento.estado = true));
                    resultado = { fila: i + 1, asientos: seleccionados };
                    renderAsientos();
                    return resultado;
                }
            } else {
                consecutivos = 0;
                seleccionados = [];
            }
        }
    }
    alert("No se encontraron suficientes asientos consecutivos.");
    return resultado;
}

// Función para validar el input y habilitar/deshabilitar el botón
function validarInput(numAsientos, botonConfirmar) {
    if (!isNaN(numAsientos) && numAsientos > 0 && numAsientos <= N) {
        botonConfirmar.disabled = false;
    } else {
        botonConfirmar.disabled = true;
    }
}

// Evento DOMContentLoaded para inicializar
document.addEventListener("DOMContentLoaded", () => {
    setup();       // Inicializa la estructura de butacas
    asignarIDs();  // Asigna IDs a cada asiento en el DOM

    const botonConfirmar = document.getElementById("boton-confirmar");
    const inputAsientos = document.getElementById("cantidad-asientos");
    const formulario = document.getElementById("formulario-reserva");

    // Validar el input en cada cambio
    inputAsientos.addEventListener("input", () => {
        const numAsientos = parseInt(inputAsientos.value, 10);
        validarInput(numAsientos, botonConfirmar);
    });

    // Evento submit del formulario
    formulario.addEventListener("submit", function(e) {
        e.preventDefault();
        const numAsientos = parseInt(inputAsientos.value, 10);
        if (!isNaN(numAsientos) && numAsientos > 0 && numAsientos <= N) {
            suggest(numAsientos);
        } else {
            alert("Ingresa un número válido entre 1 y 10.");
        }
    });

    // Al cargar la página, deshabilitamos el botón hasta que el input sea válido
    validarInput(parseInt(inputAsientos.value, 10), botonConfirmar);
});
