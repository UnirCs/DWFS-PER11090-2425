// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

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

function suggest(reserva) {
    let butacas = setup();
    let asientos = [];
    let asientosEncontrados = false;

    for (let i = butacas.length - 1; i >= 0; i--) {
        let contador = 0; // Número de asientos libres consecutivos
        let asientosLibres = []; // Array con los asientos libres consecutivos por fila

        for (let j = 0; j < (butacas[i].length); j++) {
            if (butacas[i][j].estado == false && !asientosEncontrados) {
                contador++;
                asientosLibres.push(butacas[i][j].id);

                if (contador === reserva && !asientosEncontrados) { // Si el numero de asientos seguidos es igual a la reserva
                    // Cambiar el estado de los asientos a ocupados (true)
                    for (let k = 0; k < asientosLibres.length; k++) {
                        let asientoId = asientosLibres[k];
                        for (let m = 0; m < butacas[i].length; m++) {
                            if (butacas[i][m].id === asientoId) {
                                butacas[i][m].estado = true;
                            }
                        }
                    }
                    asientos = asientosLibres;  
                    asientosEncontrados = true;              
                }
            } else {
                contador = 0;
                asientosLibres = [];
            }
        }
    }
    return console.log(`Se encontraron ${reserva} asientos consecutivos:`,asientos) // Devolver los asientos
}