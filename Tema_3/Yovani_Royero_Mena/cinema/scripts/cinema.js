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
                estado: idContador > 96 ? true :false // Estado inicial libre
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

// Inicializar la matriz
let butacas = setup();

// Imprimir la matriz
//console.log(butacas[9]);

// Función para reservar una butaca
function suggest(cantidaAReservar) {
    if(butacas.length > 0){
        if(butacas[0].length < cantidaAReservar){
            console.log("El número de asientos solicitados excede el tamaño máximo de la fila");
            return new Set();
        }
        let butacasReservadas = new Set();    
        let i = butacas.length -1;
        let fila = butacas[i];
        while(butacasReservadas.size < cantidaAReservar && i >= 0){
            fila.reverse();
            let disponible = fila.findIndex(butaca => !butaca.estado);
            if( disponible >= 0 && fila.length - disponible >= cantidaAReservar){
                let j = disponible;
                while(butacasReservadas.size < cantidaAReservar){
                    fila[j].estado = true;
                    butacasReservadas.add(fila[j].id);                    
                    j++;
                }
            }           
            fila = butacas[--i];
        }
        console.log("Butacas reservadas: ", butacasReservadas);
        return butacasReservadas;
    }else{
        console.log("No hay butacas disponibles");
        return new Set();
    }
}


//console.log("Butacas a reservar: ", suggest(8));