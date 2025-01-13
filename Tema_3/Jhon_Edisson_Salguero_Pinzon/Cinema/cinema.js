const N = 13;
const NFilas = 5;
let butacas = null;

window.onload = function() {
    butacas = setup();
}

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
    if (!nAsientosReservar || nAsientosReservar.trim() === '') {
        return;
    }

    let butacasReservadas = new Set();
    nAsientosReservar = parseInt(nAsientosReservar);

    if (nAsientosReservar <= 0) {
        console.log("Por favor ingrese un número positivo de asientos");
        return;
    }

    if (nAsientosReservar > N * NFilas) {
        console.log("No hay suficientes asientos disponibles.");
        return;
    }

    let listaButacas = butacas.flat();
    let consecutivosLibres = [];
    let secuenciaActual = [];

    listaButacas.forEach(butaca => {
        if (butaca.estado === false) {
            secuenciaActual.push(butaca);
        } else {
            if (secuenciaActual.length >= nAsientosReservar) {
                consecutivosLibres.push([...secuenciaActual]);
            }
            secuenciaActual = [];
        }
    });

    if (secuenciaActual.length >= nAsientosReservar) {
        consecutivosLibres.push([...secuenciaActual]);
    }

    let secuencia = consecutivosLibres.find(secuencia => secuencia.length >= nAsientosReservar);

    if (secuencia) {
        secuencia.slice(0, nAsientosReservar).forEach(butaca => {
            butaca.estado = true;
            butacasReservadas.add(butaca.id);
        });
        console.log("Asientos sugeridos: " + Array.from(butacasReservadas).join(", "));
        
        actualizarUI(Array.from(butacasReservadas));
    } else {
        console.log("No se encontraron asientos consecutivos disponibles");
    }
}

function actualizarUI(asientosReservados) {
}