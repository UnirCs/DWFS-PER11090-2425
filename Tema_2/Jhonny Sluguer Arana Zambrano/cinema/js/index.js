console.log("Archivo index.js cargado correctamente");

// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; 
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

// Función para buscar los asientos juntos en la fila más lejana a la pantalla
function suggest(butacas, numAsientos) {
    if (numAsientos > N) return new Set(); // Si el número de asientos solicitados excede el tamaño de la fila, devolver vacío.

    for (let i = butacas.length - 1; i >= 0; i--) { // Comenzar desde la fila más lejana
        let fila = butacas[i];
        let contadorLibres = 0; // Contador para asientos disponibles consecutivos
        let asientosSeleccionados = [];

        for (let j = 0; j < fila.length; j++) {
            if (!fila[j].estado) { // Si el asiento está libre
                contadorLibres++;
                asientosSeleccionados.push(fila[j].id);
            } else {
                contadorLibres = 0; // Reiniciar si hay un asiento ocupado
                asientosSeleccionados = [];
            }

            if (contadorLibres === numAsientos) { // Si se encuentran suficientes asientos consecutivos
                return new Set(asientosSeleccionados);
            }
        }
    }

    return new Set(); // Devolver vacío si no se encuentran asientos consecutivos
}

// Función para renderizar las butacas en el DOM
function renderizarButacas(butacas) {
    const container = document.getElementById('seat-container');
    container.innerHTML = ''; // Limpia el contenedor antes de renderizar

    butacas.forEach(fila => {
        const filaDiv = document.createElement('div');
        filaDiv.classList.add('d-flex', 'justify-content-center', 'mb-2');

        fila.forEach(butaca => {
            const butacaDiv = document.createElement('div');
            butacaDiv.classList.add('seat');
            if (butaca.estado) butacaDiv.classList.add('occupied');
            butacaDiv.setAttribute('data-id', butaca.id);
            filaDiv.appendChild(butacaDiv);
        });

        container.appendChild(filaDiv);
    });
}

// Inicializar butacas y renderizar
let butacas = setup();
console.log("Butacas inicializadas:", butacas);
renderizarButacas(butacas);

// Listener para sugerir asientos
document.getElementById('btn-suggest').addEventListener('click', () => {
    const numAsientos = parseInt(document.getElementById('numAsientos').value, 10);
    if (!isNaN(numAsientos) && numAsientos > 0) {
        const asientosSugeridos = suggest(butacas, numAsientos);
        if (asientosSugeridos.size > 0) {
            alert(`Asientos sugeridos (IDs): ${Array.from(asientosSugeridos).join(', ')}`);
            asientosSugeridos.forEach(id => {
                for (let fila of butacas) {
                    const asiento = fila.find(b => b.id === id);
                    if (asiento) asiento.estado = true;
                }
            });
            renderizarButacas(butacas);
        } else {
            alert('No hay suficientes asientos disponibles juntos.');
        }
    } else {
        alert('Introduce un número válido de asientos.');
    }
});
