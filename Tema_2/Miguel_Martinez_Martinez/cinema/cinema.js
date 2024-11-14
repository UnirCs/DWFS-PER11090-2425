// Definir el tama�o de la matriz de butacas
const N = 10; // N�mero de filas y columnas

// Funci�n para inicializar la matriz de butacas
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

function suggest(n){

    if (n > N){                //Check if there are enough seats
        return new Set();
    }

    //********VARIABLES*********//
    let contSeats = new Set();
    let seats = setup();
    let rows = seats.length - 1;
    let found = false;
    //**************************//

    while (rows >= 0) {
        //New row
        contSeats.clear;
        let columns = seats[rows].length - 1;
        while (columns >= 0 && !found) {
            //New seat
            if(!seats[rows][columns].estado){           //If seat is avaliable, add it to the set
                contSeats.add(seats[rows][columns].id);
                if(contSeats.size === n){
                    found = true;
                }
            }
            columns--;
        }
        rows--;
    }

    if(contSeats.size !== n) contSeats.clear();         //The last seats in the first row are chosen but no the desired amount

    return contSeats
}

let test = suggest(3);
console.log(test);