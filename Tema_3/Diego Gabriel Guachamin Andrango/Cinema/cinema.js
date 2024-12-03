const rows = 5 // Número de filas
const seat = 13 // Número de asientos por fila

// Función para inicializar la matriz de SEAT
function setup () {
  let idContador = 1 // Iniciar el contador de IDs en 1
  let butacas = []
  for (let i = 0; i < rows; i++) {
    // Nueva fila
    let fila = []
    for (let j = 0; j < seat; j++) {
      // Nuevo asiento
      fila.push({
        id: idContador++,
        estado: false, // Estado inicial libre
      })
    }
    butacas.push(fila)
//preseleccionar asiento
//     function actualizarEstado(butacas, ids, nuevoEstado) {
//       ids.forEach(id => {
//         for (let fila of butacas) {
//           for (let asiento of fila) {
//             if (asiento.id === id) {
//               asiento.estado = nuevoEstado;
//             }
//           }
//         }
//       });
//     }
//     actualizarEstado(butacas, [4, 7,8,9,10], true);
  }
  console.log(butacas)

  return butacas

}

function getSeatCount () {
  return document.getElementById('seatCount').value
}

// Inicializar la matriz
let butacas = setup()

// Función para sugerir asientos
function suggest (numAsientos) {
  let reservados = new Set([])
  let filaCorrecta = -1

  if (numAsientos > seat) return reservados

  for (let i = rows - 1; i >= 0 && filaCorrecta < 0; i--) {
    const fila = butacas[i]
    const asientosLibres = fila.filter((asiento) => !asiento.estado).length
    if (asientosLibres >= numAsientos) {
      filaCorrecta = i
      // Marcar Reservados
      let marcados = numAsientos
      for (let j = 0; j < seat && marcados > 0; j++) {
        const reservado = butacas[i][j]
        if (reservado.estado === false) {
          reservado.estado = true
          reservados.add(reservado.id)
          marcados -= 1
        }
      }
    }
  }
  console.log(reservados)
  return reservados
}
// console.log(suggest (13))
