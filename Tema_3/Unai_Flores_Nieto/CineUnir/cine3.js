// Tamaño de la sala de cine (10x10 butacas)
const N = 10;

// Inicializar la matriz de butacas (simula el diseño del HTML)
function setup() {
    let butacas = [];
    for (let i = 0; i < N; i++) {
        let fila = [];
        for (let j = 0; j < N; j++) {
            fila.push({
                id: `${i + 1}-${j + 1}`, // ID basado en fila y columna
                estado: false // Todas libres inicialmente
            });
        }
        butacas.push(fila);
    }

    // Simular las ocupadas según el diseño del HTML
    butacas[0][2].estado = true; // Fila 1, Asiento 3
    butacas[0][6].estado = true; // Fila 1, Asiento 7
    butacas[1][3].estado = true; // Fila 2, Asiento 4
    butacas[2][0].estado = true; // Fila 3, Asiento 1
    butacas[2][5].estado = true; // Fila 3, Asiento 6

    return butacas;
}

// Sugerir butacas consecutivas
function suggest(numAsientos) {
    let butacasLibres = new Set();
    let encontrado = false;

    for (let i = N - 1; i >= 0 && !encontrado; i--) {
        let asientosSeguidos = 0;
        let idsAsientos = [];

        for (let j = 0; j < N; j++) {
            if (!butacas[i][j].estado) {
                idsAsientos.push(butacas[i][j].id);
                asientosSeguidos++;
            } else {
                asientosSeguidos = 0;
                idsAsientos = [];
            }

            if (asientosSeguidos === numAsientos) {
                idsAsientos.forEach(id => butacasLibres.add(id));
                encontrado = true;
            }
        }
    }

    console.log("Asientos sugeridos:", [...butacasLibres]);
    return encontrado ? butacasLibres : new Set();
}

// Inicializar la sala
const butacas = setup();

// Manejar el evento oninput
function handleInput(event) {
    const numAsientos = parseInt(event.target.value, 10);
    if (!isNaN(numAsientos) && numAsientos > 0) {
        suggest(numAsientos); // Llamar a la función con el número ingresado
    }
}
