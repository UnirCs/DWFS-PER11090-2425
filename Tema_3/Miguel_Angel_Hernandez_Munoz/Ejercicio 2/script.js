// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1
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

// Inicializar la matriz
let butacas = setup();

// Configurar algunas butacas como ocupadas
const ocupadas = [
    [0, 1], [1, 5], [1, 0], [3, 5], [4, 6], [7, 6], [9, 1],
    [4, 2], [7, 1], [9, 9], [2, 3], [5, 4], [6, 8], [8, 2],
    [8, 7], [0, 4], [3, 2], [5, 9], [6, 1], [9, 0], [9, 2],
    [9, 3], [9, 5]
];

for (let [fila, columna] of ocupadas) {
    butacas[fila][columna].estado = true;
}

// Función para sugerir asientos
function suggest(asientos) {
    if (asientos > N) {
        console.log("No hay suficientes asientos en una sola fila");
        return;
    } else if (asientos <= 0) {
        console.log("Debe seleccionar al menos un asiento");
        return;
    }

    let asientosAsignados = false;
    for (let i = butacas.length - 1; i >= 0 && !asientosAsignados; i--) {
        if (validarDisponiblesPorFila(i) >= asientos && validarAsientosConsecutivos(i, asientos).consecutivos) {
            console.log(`Sugerencia: Fila ${i + 1}`);

            let asietosSeleccionados = validarAsientosConsecutivos(i, asientos).butacas

            for (let x of asietosSeleccionados) {
                butacas[i].find(butaca => butaca.id === x).estado = true;
            }

            imprimirCine(butacas);
            asientosAsignados = true
        }
    }

    if (!asientosAsignados){
        console.log("No se encontraron asientos disponibles consecutivos suficientes.");
    }
}

function validarDisponiblesPorFila(fila) {
    return butacas[fila].filter(butaca => !butaca.estado).length;
}

function validarAsientosConsecutivos(fila, asientos) {
    let consecutivos = 0;
    let IdsconsecutivosAsignacion = [];
    let encontradosConsecutivos = false;
    let response = {}
    for (let i = 0; i < butacas[fila].length && !encontradosConsecutivos; i++) {
        let butaca = butacas[fila][i];
        if (!butaca.estado) {
            consecutivos++;
            IdsconsecutivosAsignacion.push(butaca.id);
            if (consecutivos >= asientos && !encontradosConsecutivos) {
                encontradosConsecutivos = true;
                response =  {
                    consecutivos: true,
                    butacas: IdsconsecutivosAsignacion
                };
            }
        } else {
            consecutivos = 0;
            IdsconsecutivosAsignacion = [];
        }
    }
    return response
}

function imprimirCine(cine) {
    for (let i = 0; i < cine.length; i++) {
        let fila = "FILA " + (i + 1) + " |";
        for (let j = 0; j < cine[i].length; j++) {
            fila += cine[i][j].estado ? " X " : " O ";
        }
        console.log(fila);
    }
}

function asignarAsientos()
{
    let sillas = document.getElementById("cantidad-asientos").value;
    console.log(sillas);
    suggest(sillas)
}


