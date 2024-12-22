// Definir el tamaño de la matriz de butacas.
const N = 5; // Número de filas
const M = 10 // Número de columnas

// Variable global que representa la matriz de butacas.
let butacas = [];

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < M; j++) {
            // Nuevo asiento
            fila.push({
                id: idContador++,
                estado: getRandomStatus() // Estado inicial al azar.
            });
        }
        butacas.push(fila);
    }

    return butacas;
}

/**
 * Función para darle valores al azar a un asiento.
 *
 * Devuelve true si la variable x vale entre 1 y 5,
 * devuelve false si la variable x vale entre 6 y 10.
 */
function getRandomStatus() {
    let x = Math.floor((Math.random() * 10) + 1);
    return x <= 5;
}

/**
 * Función que dibuja el patio de butacas.
 * @param seatMatrix
 */
function drawSeatingPlan(seatMatrix = []) {
    let seatingPlanElement = document.getElementById('seating-plan');
    let tableHeadElement, tableBodyElement;

    // Recorre la matriz de butacas.
    seatMatrix.forEach((row, index) => {
        if (index === 0) {
            // En la primera iteración se crean el head y el body de la tabla de asientos.
            tableHeadElement = createTableHead();
            tableBodyElement = createTableBody();
        }

        // Crea el header correspondiente a la fila.
        let headElement = createHeadElement(index);

        // Añade el elemento al head de la tabla de asientos.
        tableHeadElement.appendChild(headElement);

        // Crea la nueva fila.
        let rowElement = createRowElement();

        // Añade un asiento por cada elemento que contiene la fila de la matriz.
        addSeatsToRowElement(row, rowElement);

        // Añade la nueva fila al body de la tabla.
        tableBodyElement.appendChild(rowElement);
    });

    // Al terminar de recorrer la matriz de butacas se agregan el head y el body al plano del patio butacas.
    seatingPlanElement.appendChild(tableHeadElement);
    seatingPlanElement.appendChild(tableBodyElement);
}

function createTableHead() {
    let tableHeadElement = document.createElement('div');
    tableHeadElement.setAttribute('id', 'table-head');
    tableHeadElement.classList.add('d-flex', 'flex-column', 'justify-content-between');

    return tableHeadElement;
}

function createTableBody() {
    let tableBodyElement = document.createElement('div');
    tableBodyElement.setAttribute('id', 'table-body');
    tableBodyElement.classList.add('d-flex', 'flex-column', 'd-inline-flex');

    return tableBodyElement;
}

function createHeadElement(index) {
    let headElement = document.createElement('div');
    headElement.classList.add('my-1', 'p-1');
    headElement.innerText = `Fila ${index + 1}`;

    return headElement;
}

function createRowElement() {
    let rowElement = document.createElement('div');
    rowElement.classList.add('d-flex', 'flex-row', 'my-1', 'justify-content-between');

    return rowElement;
}

function addSeatsToRowElement(row, rowElement) {
    row.forEach((seat) => {
        let seatElement = document.createElement('div');
        seatElement.setAttribute('id', seat.id);
        seatElement.classList.add('p-3', 'mx-1', 'border', 'border-warning-subtle');
        if (seat.estado === true) {
            seatElement.classList.add('bg-warning');
        }
        rowElement.appendChild(seatElement);
    });
}

function suggest(numSeats= 0) {
    const selection = new Set();

    // Retornamos directamente si el número de asientos a buscar supera el tamaño de una fila.
    if (numSeats > M) {
        return selection;
    }

    // El iterador de filas comienza en la última fila.
    for (let row = N-1; row >= 0 && (selection.size < numSeats); row--) {
        selection.clear();
        for (let column = 0; column < M  && (selection.size < numSeats); column++) {
            let seat = butacas[row][column];
            seat.estado === false ? selection.add(seat) : selection.clear();
        }
    }

    return selection;
}

function drawSuggestion(selection) {
    selection.forEach((seat) => {
        let seatElement = document.getElementById(seat.id);
        seatElement.classList.add('bg-warning-subtle');
    });
}

function removeSuggestion() {
    /**
     * getElementsByClassName devuelve una HTMLCollection; un elemento vivo que se actualiza automáticamente si cambia
     * el DOM, como es en este caso al eliminar la misma clase que se usa para buscar los elementos de la colección.
     * Por lo que es mejor transformar la HTMLCollection en un array para poder manipularlo sin efectos secundarios.
     * Fuente: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
     */
    let suggestions = Array.from(document.getElementsByClassName('bg-warning-subtle'));

    suggestions.forEach((suggestion) => {
        suggestion.classList.remove('bg-warning-subtle');
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // Inicializar la matriz.
    butacas = setup();
    drawSeatingPlan(butacas);

    // Listener para el elemento input.
    document.getElementById('seats').addEventListener('input', function() {
        removeSuggestion();
        drawSuggestion(suggest(this.value));
    });
});
