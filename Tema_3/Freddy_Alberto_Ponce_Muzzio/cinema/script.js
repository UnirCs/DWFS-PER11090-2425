// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < N; j++) {
            // Nuevo asiento
            fila.push({
                id: idContador++,
                estado: true // Estado inicial libre
            });
        }
        butacas.push(fila);
    }
    console.log('Butacas inicializadas')
    return butacas;
}

// Inicializar la matriz
let butacas = setup();


function suggest(reserveAmount) {
    maxAsientosPerFile = []

    if ( reserveAmount > N ) return []

    let asientosDisponiblesPerFIla = []
    for ( let i = 0; i < N; i++) {
        let asientosDisponible = []
        for ( let j=0; j<N; j++) {
            let asiento = butacas[i][j]
            if ( asiento.estado ) {
                asientosDisponible.push(asiento.id)
            }
            else if ( asientosDisponible.length < reserveAmount ) {
                asientosDisponible = []
            }
        }
        if (asientosDisponible.length > 0) {
            asientosDisponiblesPerFIla.push(asientosDisponible)
        }
    }

    let filasDisponibles = asientosDisponiblesPerFIla.length

    if (filasDisponibles == 0) return []

    return new Set(asientosDisponiblesPerFIla[filasDisponibles-1])
}

document.addEventListener('DOMContentLoaded', () => {
    inputElement = document.querySelector('input')
    buttonElement = document.querySelector('button')
    buttonElement.addEventListener('click', (e) => {
        console.log(inputElement.value)
        console.log(suggest(inputElement.value))
    })
})