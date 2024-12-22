const N = 13;
const NFilas = 5;

function setup() {
    let idContador = 1;
    let butacas = [];
    for (let i = 0; i < NFilas; i++) {
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

function suggest(nAsientosReservar) {
    let butacasReservadas = new Set();
    let butacas = setup();
    nAsientosReservar = parseInt(nAsientosReservar);

    if (nAsientosReservar > N * NFilas) {
        return console.log("No hay suficientes asientos disponibles.");
    }

    let listaButacas = butacas.flat();
    let consecutivosLibres = [];
    let secuenciaActual = [];

    for (let i = 0; i < listaButacas.length; i++) {
        let butaca = listaButacas[i];
        if (butaca.estado === false) {
            secuenciaActual.push(butaca);
        } else {
            if (secuenciaActual.length >= nAsientosReservar) {
                consecutivosLibres.push(secuenciaActual);
            }
            secuenciaActual = [];
        }
    }

    if (secuenciaActual.length >= nAsientosReservar) {
        consecutivosLibres.push(secuenciaActual);
    }

    for (let i = 0; i < consecutivosLibres.length; i++) {
        if (consecutivosLibres[i].length >= nAsientosReservar) {
            for (let j = 0; j < nAsientosReservar; j++) {
                let butacaReservada = consecutivosLibres[i][j];
                butacaReservada.estado = true;
                butacasReservadas.add(butacaReservada.id);
            }
            break;
        }
    }

    return console.log("Asientos sugeridos: " + Array.from(butacasReservadas));
}

console.log("Butacas Inicializadas");
suggest(10);
