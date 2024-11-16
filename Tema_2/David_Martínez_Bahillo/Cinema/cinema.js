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

    if (numeroAsientos > N)
        return asientosDisponibles;

    for (let i = N - 1; i >= 0; i--) {
        let count = 0;
        for (let j = N - 1; j >= 0; j--) {
            if (!butacas[i][j].estado) {
                count++;
                if (count === numeroAsientos) {
                    for (k = 0; k < count; k++) {
                        asientosDisponibles.add(butacas[i][j + k].id);
                        butacas[i][j + k].estado = true;
                    }
                    renderButacas();
                    return asientosDisponibles;
                }
            }
        }
    }
    return asientosDisponibles;
}

