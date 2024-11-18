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
                estado: false // Estado inicial libre
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

// Función para reservar
function suggest(asientosAReservar) {
    // Validar que asientosAReservar sea un número entero
    if (!isNaN(asientosAReservar) && Number.isInteger(asientosAReservar)) {
        if (butacas[0].length < asientosAReservar) {
            console.log("El número de asientos solicitados excede el tamaño máximo de la fila");
            return new Set();
        }

        let butacasReservadas = new Set();
        let filaEncontrada = false;

        // Recorremos cada fila desde la última hasta la primera
        for (let i = butacas.length - 1; i >= 0 && !filaEncontrada; i--) {
            let fila = butacas[i];
            let disponible = fila.findIndex(butaca => !butaca.estado);
            let asientosConsecutivos = 0;

            // Verificar si hay suficientes asientos consecutivos disponibles en la fila actual
            for (let j = disponible; j < fila.length && !filaEncontrada; j++) {
                if (!fila[j].estado) {
                    asientosConsecutivos++;
                } else {
                    asientosConsecutivos = 0; // Resetear el contador si se encuentra un asiento ocupado
                }

                // Si se encuentran suficientes asientos consecutivos, marcar filaEncontrada como verdadera
                if (asientosConsecutivos === asientosAReservar) {
                    filaEncontrada = true;
                }
            }

            // Reservar asientos si se encontraron suficientes consecutivos en la fila actual
            if (asientosConsecutivos >= asientosAReservar) {
                let asientosReservadosEnFila = 0;
                for (let j = disponible; asientosReservadosEnFila < asientosAReservar && j < fila.length; j++) {
                    if (!fila[j].estado) {
                        fila[j].estado = true;
                        butacasReservadas.add(fila[j].id);
                        asientosReservadosEnFila++;
                    }
                }
            }
        }

        return butacasReservadas;
    } else {
        console.log("No es un número válido");
        return new Set();
    }
}


// Inicializar la matriz
let butacas = setup();

// Asientos ocupados
butacas[9][4].estado=true
butacas[9][5].estado=true
butacas[9][6].estado=true
butacas[9][7].estado=true
butacas[9][8].estado=true
butacas[9][9].estado=true

// Imprimir la matriz
//console.log(butacas);

console.log("Butacas a reservar: ", suggest(5));
