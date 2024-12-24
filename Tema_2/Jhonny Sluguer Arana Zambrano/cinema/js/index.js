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
    if (numAsientos > N) return new Set(); 

    for (let i = butacas.length - 1; i >= 0; i--) {
        let fila = butacas[i];
        let contadorLibres = 0;
        let asientosSeleccionados = [];

        for (let j = 0; j < fila.length; j++) {
            if (!fila[j].estado) {
                contadorLibres++;
                asientosSeleccionados.push(fila[j].id);
            } else {
                contadorLibres = 0;
                asientosSeleccionados = [];
            }

            if (contadorLibres === numAsientos) {
                return new Set(asientosSeleccionados);
            }
        }
    }

    return new Set();
}

// Función para renderizar las butacas en el DOM
function renderizarButacas(butacas) {
    const container = document.getElementById('seat-container');
    container.innerHTML = ''; 

    butacas.forEach(fila => {
        const filaDiv = document.createElement('div');
        filaDiv.classList.add('d-flex', 'justify-content-center', 'mb-3');

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

let butacas = setup();
renderizarButacas(butacas);

// Pruebas automáticas
function ejecutarPruebas() {
    console.log("Iniciando pruebas...");

    let asientosSugeridos = suggest(butacas, 3);
    console.assert(asientosSugeridos.size > 0, "Prueba 1: No se encontraron asientos juntos");

    asientosSugeridos = suggest(butacas, 11);
    console.assert(asientosSugeridos.size === 0, "Prueba 2: No se deben devolver asientos si se piden más que la capacidad de la fila");

    butacas[9][2].estado = true;
    butacas[9][3].estado = true;
    asientosSugeridos = suggest(butacas, 4);
    console.assert(asientosSugeridos.size === 0, "Prueba 3: No se deben encontrar 4 asientos juntos si hay ocupados");

    console.log("Pruebas completadas ✅");
}

ejecutarPruebas();

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
