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
    // Asignar un asiento ocupado
    butacas[9][9].estado = true;
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
                // Si el numero de asientos conseguidos es igual a la reserva y no se han encontrado los asientos aun
                if (contador === reserva && !asientosEncontrados) { 
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
    console.log(`Se encontraron ${reserva} asientos consecutivos:`,asientos) // Devolver los asientos
    return asientos;
}

window.onload = function() {
    let butacasSeleccionadas = []; // Array para guardar las butacas seleccionadas
    let inputReserva = document.getElementById("input"); // Input para el número de butacas a reservar
    let restaurarButacas = document.querySelectorAll(".fila__butaca"); // Seleccionar todas las butacas

    // Cuando cambiar valor del input --> llamar a la función suggest
    inputReserva.addEventListener("input", () => {
        
        // Para que se actualicen en azul las butacas seleccionadas, pintamos de blaco todas antes
        restaurarButacas.forEach((butaca) => {
            butaca.style.backgroundColor = "#fdfefe";
        });
        
        // Recorremos la lista de butacas de "suggest" y cambiamos la clase para que aparezcan como ocupadas
        butacasSeleccionadas = suggest(parseInt(inputReserva.value)).forEach((butaca) => {
            let butacaOcupada = document.getElementById(butaca);
            butacaOcupada.style.backgroundColor = "#3498db";
        });
    });
}