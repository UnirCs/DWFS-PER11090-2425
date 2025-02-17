// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

// Función para inicializar la matriz de butacas
function setup() {
    const N = 10; // Número de filas y columnas
    const butacasContainer = document.getElementById('butacasContainer');
    let butacas = [];

    for (let i = 0; i < N; i++) {
        const filaDiv = document.createElement('div');
        filaDiv.classList.add('d-flex', 'align-items-center', 'justify-content-center');
        const filaSpan = document.createElement('span');
        filaSpan.classList.add('fw-bold', 'me-3');
        filaSpan.textContent = `Fila ${i}`;
        filaDiv.appendChild(filaSpan);

        const butacasDiv = document.createElement('div');
        butacasDiv.classList.add('d-flex');
        // Nueva fila
        let fila = [];
        for (let j = 0; j < N; j++) {
            // Nuevo asiento
            const butacaButton = document.createElement('button');
            butacaButton.classList.add('btn', 'btn-outline-warning', 'm-1');
            butacaButton.id = `butaca-${i}-${j}`;
            butacasDiv.appendChild(butacaButton);

            // Marcar algunas butacas como ocupadas de manera aleatoria
            const ocupada = Math.random() < 0.2; 
            if (ocupada) {
                butacaButton.classList.add('ocupada');
            }

            fila.push({
                id: `butaca-${i}-${j}`,
                estado: ocupada // Estado inicial libre o ocupado
            });
        }
        filaDiv.appendChild(butacasDiv);
        butacasContainer.appendChild(filaDiv);
        butacas.push(fila);
    }
    return butacas;
}

// Inicializar la matriz
let butacas = setup();
console.log(butacas);


// Función para sugerir asientos
function suggest(cantidad) {
    if (cantidad > N) return new Set();
    for (let i = N - 1; i >= 0; i--) { // Buscar desde la última fila
        let disponibles = [];
        for (let j = 0; j < N; j++) {
            if (!butacas[i][j].estado) {
                disponibles.push(butacas[i][j].id);
                if (disponibles.length === cantidad) {
                    return new Set(disponibles);
                }
            } else {
                disponibles = []; // Reiniciar si hay un asiento ocupado
            }
        }
    }
    return new Set();
}

function actualizarButacasSugeridas(sugeridos) {
    // Limpiar las butacas sugeridas anteriores
    document.querySelectorAll('.sugerido').forEach(butaca => {
        butaca.classList.remove('sugerido');
    });

    // Agregar la clase 'sugerido' a las nuevas butacas sugeridas
    sugeridos.forEach(id => {
        const butaca = document.getElementById(id);
        if (butaca) {
            butaca.classList.add('sugerido');
        }
    });
}


const cantidadAsientos = document.getElementById('cantidadAsientos');
cantidadAsientos.addEventListener('change', () => {
    const cantidad = parseInt(document.getElementById('cantidadAsientos').value,10);
    const sugeridos = suggest(cantidad); 
    actualizarButacasSugeridas(sugeridos);   
    if (sugeridos.size === 0) {
        alert('No hay asientos disponibles para esa cantidad');
    } else {
        console.log(sugeridos);
        
    }
});