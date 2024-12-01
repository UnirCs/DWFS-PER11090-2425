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

function suggest(butacas, nAsientosReservar) {
    let butacasReservadas = new Set();
    let butacasReservadasTemp = [];
    let contador = 0;
    let isReservado = false;

    if(nAsientosReservar > N){
        return butacasReservadas;
    }else{
        for (let i = butacas.length-1; i >= 0; i--) {
            contador = 0
            butacasReservadasTemp = []
            // console.log("FILA ============= "+i)
            for (let j = butacas[i].length-1; j >=0; j--) {
                if(butacas[i][j].estado === false  && isReservado === false){
                    contador++;
                    butacasReservadasTemp.push(butacas[i][j])
                    if(contador === nAsientosReservar){
                        for(let x = 0; x < butacasReservadasTemp.length ; x++){
                            butacasReservadasTemp[x].estado = true;
                            butacasReservadas.add(butacasReservadasTemp[x].id);
                        }
                        isReservado = true;
                    }
                }else{
                    contador = 0;
                    butacasReservadasTemp = [];
                }
            }
        }
    }
    return butacasReservadas;
}


// Inicializar la matriz
let butacas = setup();

// Imprimir la matriz
console.log(butacas);

// Pruebas de la funcion suggest
console.log(suggest(butacas, 10));
console.log(suggest(butacas, 7));
console.log(suggest(butacas, 4));
console.log(suggest(butacas, 10));