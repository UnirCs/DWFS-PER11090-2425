// La matriz de asientos proporcionada
let butacas = [
    [{ id: 1, estado: false }, { id: 2, estado: false }, { id: 3, estado: false }, { id: 4, estado: false }, { id: 5, estado: false }, { id: 6, estado: false }, { id: 7, estado: false }, { id: 8, estado: false }, { id: 9, estado: false }, { id: 10, estado: false }],
    [{ id: 11, estado: false }, { id: 12, estado: false }, { id: 13, estado: false }, { id: 14, estado: false }, { id: 15, estado: false }, { id: 16, estado: false }, { id: 17, estado: false }, { id: 18, estado: false }, { id: 19, estado: false }, { id: 20, estado: false }],
    [{ id: 21, estado: false }, { id: 22, estado: false }, { id: 23, estado: false }, { id: 24, estado: false }, { id: 25, estado: false }, { id: 26, estado: false }, { id: 27, estado: false }, { id: 28, estado: false }, { id: 29, estado: false }, { id: 30, estado: false }],
    [{ id: 31, estado: false }, { id: 32, estado: false }, { id: 33, estado: false }, { id: 34, estado: false }, { id: 35, estado: false }, { id: 36, estado: false }, { id: 37, estado: false }, { id: 38, estado: false }, { id: 39, estado: false }, { id: 40, estado: false }],
    [{ id: 41, estado: false }, { id: 42, estado: false }, { id: 43, estado: false }, { id: 44, estado: false }, { id: 45, estado: false }, { id: 46, estado: false }, { id: 47, estado: false }, { id: 48, estado: false }, { id: 49, estado: false }, { id: 50, estado: false }],
    [{ id: 51, estado: false }, { id: 52, estado: false }, { id: 53, estado: false }, { id: 54, estado: false }, { id: 55, estado: false }, { id: 56, estado: false }, { id: 57, estado: false }, { id: 58, estado: false }, { id: 59, estado: false }, { id: 60, estado: false }],
    [{ id: 61, estado: false }, { id: 62, estado: false }, { id: 63, estado: false }, { id: 64, estado: false }, { id: 65, estado: false }, { id: 66, estado: false }, { id: 67, estado: false }, { id: 68, estado: false }, { id: 69, estado: false }, { id: 70, estado: false }],
    [{ id: 71, estado: false }, { id: 72, estado: false }, { id: 73, estado: false }, { id: 74, estado: false }, { id: 75, estado: false }, { id: 76, estado: false }, { id: 77, estado: false }, { id: 78, estado: false }, { id: 79, estado: false }, { id: 80, estado: false }],
    [{ id: 81, estado: false }, { id: 82, estado: false }, { id: 83, estado: false }, { id: 84, estado: false }, { id: 85, estado: false }, { id: 86, estado: false }, { id: 87, estado: false }, { id: 88, estado: false }, { id: 89, estado: false }, { id: 90, estado: false }],
    [{ id: 91,estado: true }, { id: 92, estado: true }, { id: 93, estado: true }, { id: 94, estado: false }, { id: 95, estado: true }, { id: 96, estado: false }, { id: 97, estado: true }, { id: 98, estado: false }, { id: 99, estado: false }, { id: 100, estado: false }]
  ];
  
  // Función para sugerir asientos consecutivos disponibles
  function suggest(numSeats) {
      // se valida que sea un numero valido de butacas posibles
      if (numSeats <= 0 || numSeats > 10) {
          return new Set();
      }
  
      // Recorremos las filas de atrás hacia adelante (comenzando desde la última fila)
      for (let i = butacas.length - 1; i >= 0; i--) {
          let fila = butacas[i];
         
          // Recorremos los asientos de la fila buscando un bloque de numSeats asientos libres consecutivos
          for (let j = 0; j <= fila.length - numSeats; j++) {
              let available = true;
              // Verificamos si hay numSeats asientos consecutivos libres
              for (let k = 0; k < numSeats; k++) {
                  if (fila[j + k].estado) { // Si alguno de los asientos está ocupado
                    console.log(j +"   k")
                      available = false;
                      console.log(available)
                      break;
                  }
              }
  
              // Si encontramos un bloque libre
              if (available) {
                  // Creamos un Set para devolver los IDs de los asientos
                  let selectedSeats = new Set();
                  for (let k = 0; k < numSeats; k++) {
                      // Marcamos los asientos como ocupados
                      fila[j + k].estado = true;
                      // Agregamos el ID del asiento al Set
                      selectedSeats.add(fila[j + k].id);
                  }
                  return selectedSeats; // Devolvemos el Set con los IDs de los asientos reservados
              }
          }
      }
  
      // Si no encontramos asientos disponibles, devolvemos un Set vacío
      return new Set();
  }
  
  // Ejemplo de uso: intentar reservar 3 asientos consecutivos
  const result = suggest(3);
  console.log(result);  // Debería imprimir un Set con los IDs de los asientos reservados
  console.log(butacas.length)
  