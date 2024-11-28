// Definir el tamaño de la matriz de butacas
const N = 13; // Número columnas
const NFilas = 5; // Número de Filas

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < NFilas; i++) {
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

function suggest(nAsientosReservar) {
    let butacasReservadas = new Set();
    let butacasReservadasTemp = [];
    let contador = 0;
    let isReservado = false;
    const selectorAll = document.querySelectorAll('.row__seat--occupied');
    selectorAll.forEach((element) => {
        element.classList.remove("td-color-activo");
        element.classList.add("td-color-inactivo");
    });

    let butacas = setup();

    nAsientosReservar = parseInt(nAsientosReservar)

    if(nAsientosReservar > N){
        const selectorAll = document.querySelectorAll('.row__seat--occupied');
        selectorAll.forEach((element) => {
            element.classList.remove("row__seat--occupied");
            element.classList.add("row__seat");
        });
        return console.log("Asientos sugeridos: "+ Array.from(butacasReservadas));
    }else{
        for (let i = butacas.length-1; i >= 0; i--) {
            contador = 0
            butacasReservadasTemp = []
            // console.log("FILA ============= "+i)
            for (let j = 0; j < butacas[i].length; j++) {
                if(butacas[i][j].estado === false  && isReservado === false && butacas[i][j].id !== 65){
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
                    const selectorAll = document.querySelectorAll('.row__seat--occupied');
                    selectorAll.forEach((element) => {
                        element.classList.remove("row__seat--occupied");
                        element.classList.add("row__seat");
                    });
                }
            }
        }
    }
    butacasReservadas.forEach(seatId => {
        const seatElement = document.getElementById(`id_${seatId}`);
        //console.log(seatElement);
        if (seatElement) {
            seatElement.classList.remove("row__seat");
            seatElement.classList.add("row__seat--occupied");
        }
    });
    return console.log("Asientos sugeridos: " + Array.from(butacasReservadas));
}


// Inicializar la matriz
//let butacas = setup();
//butacas[4][12].estado = true;

console.log("Butacas Inicializadas");

// Imprimir la matriz
// console.log(butacas);

// Pruebas de la funcion suggest
//  suggest(10);

window.onload = () => {
    const asignar = document.querySelectorAll('.row__seat');
    asignar.forEach((element, index) => {
        element.id = `id_${index + 1}`;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('cantAsientos').addEventListener('input', () =>{
        suggest(document.getElementById('cantAsientos').value);
    });
});