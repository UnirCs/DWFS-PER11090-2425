const N = 10;

let butacas = setup();
renderButacas();

document.getElementById('botonComprar').addEventListener('click', suggest);




// Funciones Lógica

function setup() {
    let idContador = 1;
    let butacas = [];

    for (let i = 0; i < N; i++) {
        let fila = [];
        for (let j = 0; j < N; j++) {
            fila.push({
                id: idContador++,
                estado: false
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

function renderButacas() {
    const contenedor = document.querySelector('.contenedor-filas');
    contenedor.innerHTML = "";

    butacas.forEach((fila, index) => {
        const filaDiv = document.createElement('div');
        filaDiv.classList.add('fila');
        filaDiv.innerHTML = `<div class="numero-fila">Fila ${index + 1}</div>`;

        fila.forEach(asiento => {
            const butacaDiv = document.createElement('div');
            butacaDiv.classList.add('butaca', asiento.estado ? 'reservada' : 'libre');
            butacaDiv.dataset.id = asiento.id;
            filaDiv.appendChild(butacaDiv);
        });

        contenedor.appendChild(filaDiv);
    });
}

function suggest() {
    const numeroAsientos = parseInt(document.getElementById('numeroAsientos').value);
    let asientosDisponibles = new Set();
    let filaSeleccionada = -1;
    let inicioAsientos = -1;

    if (numeroAsientos > N)
        return asientosDisponibles;

    for (let i = N - 1; i >= 0; i--) {
        let count = 0;
        for (let j = 0; j < N; j++) {
            if (!butacas[i][j].estado) {
                count++;
                if (count === numeroAsientos) {
                    filaSeleccionada = i;
                    inicioAsientos = j - numeroAsientos + 1;
                }
            } else
                count = 0;
        }
        if (filaSeleccionada !== -1)
            i = -1;
    }

    if (filaSeleccionada !== -1) {
        for (let k = 0; k < numeroAsientos; k++) {
            const index = inicioAsientos + k;
            asientosDisponibles.add(butacas[filaSeleccionada][index].id);
            butacas[filaSeleccionada][index].estado = true;
        }
        renderButacas();
    }

    return asientosDisponibles;
}