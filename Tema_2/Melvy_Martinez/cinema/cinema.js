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

function getConsecutiveSeats(row, seats) {
  let consecutive = new Set();

  for (let i = 0; i < row.length && consecutive.size < seats; i++) {
    let itemCopy = {...row[i]};

    if(itemCopy.estado) {
      consecutive = new Set();
    } else {
      itemCopy.estado = true;
      itemCopy.index = i;
      consecutive.add(itemCopy);
    }
  }

  return consecutive.size === seats? consecutive: new Set();
}

function suggest(seats) { 
  let reserved = new Set();

  for (let iRow = butacas.length - 1; iRow >= 0 && reserved.size === 0; iRow--) {
    reserved = getConsecutiveSeats(butacas[iRow], seats);
    reserved.forEach((item) => {
      butacas[iRow][item.index].estado = true;
    });
  }

  return reserved;
}

// Inicializar la matriz
let butacas = setup();
butacas[9][5].estado = true; // Considerando una selección al azar que el primer programa no permitía.

const response = suggest(5);
console.log('Set', response);

const response1 = suggest(5);
console.log('Set', response1); 


// Imprimir la matriz
console.log(butacas);
