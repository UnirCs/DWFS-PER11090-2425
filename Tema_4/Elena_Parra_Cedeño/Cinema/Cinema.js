let butacas = [];

document.addEventListener('DOMContentLoaded', () => {
    butacas = setup();
    document.getElementById('numeroAsientos').addEventListener('change', () => {
        let value = document.getElementById('numeroAsientos').value;
        clearStyle();
        resevarAsientos(suggest(parseInt(value)));
    });
});

// Inicializar la matriz
function setup() {
    let array = [];
    let idContador = 1
    document.querySelectorAll('.row').forEach((fila, index) => {
        let filaArray = [];
        fila.querySelectorAll('.silla').forEach((silla, index) => {
            silla.id = idContador;
            filaArray.push({
                id: idContador,
                estado: false
            });
            idContador++
        });
        array.push(filaArray);
    });
    return array;
}

function suggest(n) {
    let sillasSeleccionadas = new Set();
    if (n < 0) return new Set();

    for (let i = butacas.length - 1; i >= 0 && sillasSeleccionadas.size < n; i--) {
        sillasSeleccionadas.clear();
        for (let j = butacas[i].length - 1; j >= 0 && sillasSeleccionadas.size < n; j--) {
            let silla = butacas[i][j];
            if (silla.estado === false) {
                sillasSeleccionadas.add(silla.id);
            } else {
                sillasSeleccionadas.clear();
            }
        }
    }
    return sillasSeleccionadas;
}

function resevarAsientos(sillasSeleccionadas) {
    sillasSeleccionadas.forEach(id => {
        let silla = document.getElementById(id);
        silla.classList.add('ocupada');
        butacas.forEach(fila => {
            fila.forEach(silla => {
                if (silla.id == id) {
                    silla.estado = true;
                }
            });
        });
    });
}

function clearStyle() {
    document.querySelectorAll('.ocupada').forEach(silla => {
        silla.classList.remove('ocupada');
    });
    butacas = setup();
}