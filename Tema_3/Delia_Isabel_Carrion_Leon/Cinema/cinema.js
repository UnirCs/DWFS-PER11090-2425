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
        estado: false, // Estado inicial libre
      });
    }
    butacas.push(fila);
  }
  return butacas;
}

// Inicializar la matriz
let butacas = setup();

// Imprimir la matriz
console.log(butacas);

function suggest(seats, numSeats) {
  const rowCount = seats.length;
  const colCount = seats[0].length;
  
  // arrreglo para almacenar resultados
  const foundSeats = new Set();
  
  // Bandera para indicar si se encontraron los asientos
  let seatsFound = false;
  
  // Se verifica la capacidad de la sala
  if (numSeats > colCount) {
    return foundSeats;
  }
  
  // Empezar desde la fila más lejana a la pantalla
  let row = rowCount - 1;
  
  while (row >= 0 && !seatsFound) {
    let count = 0;
    let startIdx = -1;
    let col = 0;
    
    while (col < colCount && !seatsFound) {
      if (!seats[row][col].estado) {
        if (count === 0) {
          startIdx = col;
        }
        count++;
        
        if (count === numSeats) {
          // Agregamos los asientos al conjunto
          let i = startIdx;
          while (i < startIdx + numSeats) {
            foundSeats.add(seats[row][i].id);
            i++;
          }
          
          // Marcamos que encontramos los asientos
          seatsFound = true;
        }
      } else {
        // Reiniciar el conteo si se encuentra un asiento ocupado
        count = 0;
        startIdx = -1;
      }
      
      col++;
    }
    
    // Movernos a la siguiente fila si no hemos encontrado asientos
    if (!seatsFound) {
      row--;
    }
  }
 return foundSeats;
}

function buscarAsientos() {
  const numAsientos = document.getElementById("num-asientos").value;
  console.log(suggest(butacas, parseInt(numAsientos)));
}

// Ejemplo de uso
console.log(suggest(butacas, 5)); // Debería devolver un set con los ids de los asientos
