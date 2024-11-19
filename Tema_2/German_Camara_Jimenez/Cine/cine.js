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

function suggest(numAsientosReserva, butacas) {
    let asientosReservados = new Set();
    let reserva = false;

    if(numAsientosReserva > butacas.length) {
        return asientosReservados;
    }

    for(let i = butacas.length -1; i  >= 0 && !reserva; i--) { //Esto es para que empiece a contar desde la última fila, la más alejada de la pantalla
        let numLibres = 0;
        for (let j = butacas[i].length -1; j >= 0; j--) {

            if(butacas[i][j].estado === false && numLibres < numAsientosReserva){
                asientosReservados.add(butacas[i][j].id);
                numLibres++;
            } else if (numLibres === numAsientosReserva) {
                reserva = true;
            } else {
                asientosReservados = new Set();
                numLibres = 0;
            }
        }
    }

    if(reserva) { //Cambiar el estado a ocupada
        for (let i = 0; i  <butacas.length ; i++) {
            for ( let j = 0; j < butacas[i].length; j++ ) {
                for (const valor of asientosReservados) {
                    if(butacas[i][j].id === valor){
                        butacas[i][j].estado = true;
                    }
                }
            }
        }
    }

    return asientosReservados;

}

// Inicializar la matriz
let butacas = setup();


// Prueba de la función

let butacasReservadas = suggest(9, butacas);


console.log(butacasReservadas);

// Imprimir la matriz
console.log(butacas);