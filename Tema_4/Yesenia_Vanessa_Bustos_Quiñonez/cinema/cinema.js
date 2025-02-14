// Definir el tamaño de la matriz de butacas
const N = 7; // Número de filas y columnas
let butacasSeleccionadas = [];

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
let resultado = setup();

//Colocar la butaca 49 como ocupada
resultado.flat().find(butaca => butaca.id === 49).estado = true;

// Función para sugerir butacas
function suggest(numeroButacas) {
    const consulta = new Set();
    // Verificar si el número de butacas solicitado es mayor al número de asientos por fila
    if (numeroButacas > N) {
        alert("¡No se pueden seleccionar más de " + N + " butacas en una fila!");
        return consulta;
    }
    if (numeroButacas <= 0) {
        alert("¡El número de butacas debe ser mayor que 0!");
        return consulta;
    }
    if (numeroButacas <= N) {
        for (let i = N - 1; i >= 0 && consulta.size < numeroButacas; i--) {
            consulta.clear();
            for (let j = 0; j < N && consulta.size < numeroButacas && N - j >= numeroButacas - consulta.size; j++) {
                if (!resultado[i][j].estado) {
                    consulta.add(resultado[i][j].id);
                }
                else {
                    consulta.clear();
                }
            }
        }
    }
    // Si no se encuentran suficientes butacas, mostrar mensaje
    if (consulta.size < numeroButacas) {
        alert("No se pudo encontrar una fila con suficientes butacas libres.");
    }
    return consulta;
}

// Función para remover butacas seleccionadas
function removerButacasSeleccionadas(seats) {
    seats.forEach(seatID => {
        const butacaElement = document.getElementById(seatID);
        if (butacaElement) {
            butacaElement.classList.remove("ocupado");
        } else {
            console.error(`No se encontró el elemento con id: ${seatID}`);
        }
    });
}

// Función para agregar butacas seleccionadas
function anadirButacasSeleccionadas(seats) {
    seats.forEach(seatID => {
        const butacaElement = document.getElementById(seatID);
        if (butacaElement) {
            butacaElement.classList.add("ocupado");
        } else {
            console.error(`No se encontró el elemento con id: ${seatID}`);
        }
    });
}

// Inicializa las butacas en el DOM y les asigna el id correcto
function initSeats() {
    const seats = document.getElementsByClassName("butaca");
    for (let i = 0; i < seats.length; i++) {
        seats[i].setAttribute("id", i + 1); // Asigna el ID de 1 a 49 (según el número de butacas)
    }
}

// Llamamos a la función para inicializar las butacas cuando el DOM se haya cargado completamente
document.addEventListener("DOMContentLoaded", () => {
    // Inicializa las butacas al cargar el DOM
    initSeats();

    // Escucha el evento de entrada para cuando el usuario ingrese el número de asientos a reservar
    document.getElementById('inputElement').addEventListener('input', (event) => {
        const numeroButacas = event.target.value;

        // Validar que el valor ingresado sea un número mayor que 0
        const validarButacas = !!numeroButacas && !isNaN(numeroButacas) && numeroButacas > 0;

        if (validarButacas) {
            const consulta = Array.from(suggest(parseInt(numeroButacas)));

            // Si ya se han seleccionado butacas y el número de butacas cambia, eliminamos las seleccionadas
            if (consulta.length > 0 && butacasSeleccionadas.length > 0) {
                removerButacasSeleccionadas(butacasSeleccionadas);
                butacasSeleccionadas = [];
            }

            // Almacena las nuevas butacas seleccionadas
            butacasSeleccionadas = consulta;

            // Añade las butacas seleccionadas a la interfaz
            anadirButacasSeleccionadas(butacasSeleccionadas);
        }
    });
});
