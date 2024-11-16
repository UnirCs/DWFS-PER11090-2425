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

function suggest(seats) { 
  let reserved = new Set();

  for (let iRow = butacas.length - 1; iRow >= 0; iRow--) {
    const availablesRow = butacas[iRow].filter(p => p.estado === false);
    
    if (availablesRow.length >= seats && reserved.size === 0) {
      for (let iAva = 0; iAva < seats; iAva++) {
        availablesRow[iAva].estado = true;
        reserved.add(availablesRow[iAva]);
      }
    }
  }

  return reserved;
}

// Inicializar la matriz
let butacas = setup();

const response = suggest(10);
console.log('Set', response);

// Imprimir la matriz
console.log(butacas);
