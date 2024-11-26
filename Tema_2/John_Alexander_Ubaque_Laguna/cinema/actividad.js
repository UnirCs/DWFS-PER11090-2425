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




//recorre cada fila de la matriz
function findSeatsInMatrix(matrix, numSeats) {
    let result = new Set();
    if (numSeats>10){
        return result;
    }

    for (let i = matrix.length - 1; i >= 0; i--) {
        findSeatsInaRow(matrix[i], numSeats,matrix[i].length,result);
        if (result.size > 0) {
            i=0;
        }

    }
    return result;
}

//recorre cada asiendo de una fila y si encuentra un asiento libre, busca los siguientes asientos consecutivos
function findSeatsInaRow(row, numSeats, seatsPerRow, ids) {
    let consecutiveSeats = 0;

    for (let i = seatsPerRow - 1; i >= 0; i--) {
        if (!row[i].estado) {
            consecutiveSeats++;
            ids.add(row[i].id);
            //marca los asientos consecutivos como ocupados
            if (consecutiveSeats === numSeats) {
                for (let j = i; j < i + numSeats; j++) {
                    row[j].estado = true;
                }
                i=-1;
            }
        } else {
            consecutiveSeats = 0;
            ids.clear();
        }
    }
    //si no se encontraron suficientes asientos consecutivos, se limpia el set
    if (consecutiveSeats < numSeats) {
        ids.clear();
    }
}


// Inicializar la matriz
let sillas = setup();

let sillasLibres= findSeatsInMatrix(sillas,5);
console.log(sillasLibres);

sillasLibres= findSeatsInMatrix(sillas,10);
console.log(sillasLibres);


 sillasLibres= findSeatsInMatrix(sillas,3);
console.log(sillasLibres);


sillasLibres= findSeatsInMatrix(sillas,10);
console.log(sillasLibres);




