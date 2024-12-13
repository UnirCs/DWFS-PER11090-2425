// Definir el tamaño de la matriz de butacas
const filas = 5;
const columnas = 7;

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1;
    let butacas = [];

    for (let i = 0; i < filas; i++) {
        let fila = [];
        for (let j = 0; j < columnas; j++) {
            fila.push({
                id: idContador++,
                estado: i === filas - 1 && j === columnas - 1 // Última butaca ocupada
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

// Inicializar la matriz
let seats = setup();

// Asignar IDs únicos a los elementos de la página
function assignIds() {
    const asientosDOM = document.querySelectorAll('.cine__asiento');
    let contador = 1;

    asientosDOM.forEach((asiento) => {
        asiento.id = `asiento-${contador++}`;
    });
}

// Sugerir asientos consecutivos desde la última fila
function suggest(nSeats) {
    let tempSeats = [];
    let filaActual = filas - 1; // Comenzar desde la última fila

    while (tempSeats.length < nSeats && filaActual >= 0) {
        const fila = seats[filaActual];
        let consecutivos = [];

        for (let asiento of fila) {
            if (!asiento.estado) {
                consecutivos.push(asiento.id);
                if (consecutivos.length === nSeats - tempSeats.length) {
                    tempSeats = [...tempSeats, ...consecutivos];
                    break;
                }
            } else {
                consecutivos = [];
            }
        }

        // Si no se completa el total en la fila actual, avanzar a la fila anterior
        filaActual--;
    }

    // Mostrar sugerencias visualmente
    const asientosDOM = document.querySelectorAll('.cine__asiento');
    asientosDOM.forEach((asientoDOM) => {
        const id = parseInt(asientoDOM.id.split('-')[1]);
        if (tempSeats.includes(id)) {
            asientoDOM.classList.add('cine__asiento--sugerido');
        } else {
            asientoDOM.classList.remove('cine__asiento--sugerido');
        }
    });

    console.log('Sugerencia de asientos:', tempSeats);
    return tempSeats;
}

// Manejar el evento onInput
function handleInputChange() {
    const input = document.getElementById('num_asientos');
    const numAsientos = parseInt(input.value);

    if (!isNaN(numAsientos) && numAsientos > 0) {
        suggest(numAsientos);
    }
}

// Manejar la reserva de asientos al hacer clic
function handleSeatClick(event) {
    const asientoDOM = event.target;
    const id = parseInt(asientoDOM.id.split('-')[1]);

    // Encontrar el asiento en la matriz
    for (let fila of seats) {
        const asiento = fila.find((a) => a.id === id);
        if (asiento && !asiento.estado) {
            asiento.estado = true;
            asientoDOM.classList.remove('cine__asiento--sugerido', 'cine__asiento--disponible');
            asientoDOM.classList.add('cine__asiento--ocupado');
            break;
        }
    }
}

// Inicializar el sistema
function init() {
    assignIds();

    // Agregar listeners a los asientos
    const asientosDOM = document.querySelectorAll('.cine__asiento');
    asientosDOM.forEach((asientoDOM) => {
        asientoDOM.addEventListener('click', handleSeatClick);
    });

    // Configurar evento del input
    const input = document.getElementById('num_asientos');
    input.addEventListener('input', handleInputChange);

    // Agregar listeners al formulario de reserva
    const reservaFormulario = document.querySelector('.cine__reserva-formulario');
    reservaFormulario.addEventListener('submit', (event) => {
        event.preventDefault();
        // Lógica para manejar la reserva
        alert('Reserva confirmada');
    });
}

// Llamada inicial
init();