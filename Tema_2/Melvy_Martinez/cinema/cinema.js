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

  for (let iRow = butacas.length - 1; iRow >= 0 && reserved.size === 0; iRow--) {
    const availablesRow = butacas[iRow].filter(p => p.estado === false);
    
    if (availablesRow.length >= seats) {
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

// Pruebas para validar selección de asientos juntos en una fila mediante esta función. No se considera que un ente externo seleccione butacas al azar.
const response = suggest(2);
console.log('Set', response); // { { id: 91, estado: true }, { id: 92, estado: true } }

const response1 = suggest(5);
console.log('Set', response1); // { id: 93, estado: true }, { id: 94, estado: true }, { id: 95, estado: true }, { id: 96, estado: true }, { id: 97, estado: true }

const response2 = suggest(1);
console.log('Set', response2); // { { id: 98, estado: true } }

const response3 = suggest(7);
console.log('Set', response3); // { id: 81, estado: true }, { id: 82, estado: true }, { id: 83, estado: true }, { id: 84, estado: true }, { id: 85, estado: true }, { id: 86, estado: true }, { id: 87, estado: true }

// Imprimir la matriz
// console.log(butacas);
