// Configuración inicial de asientos
const rows = 5 // Número de filas
const seat = 16 // Número de asientos por fila

const contenedorButacas = document.getElementById('butacas-container')
let butacas = []

// Generar una fila de asientos
function generarFila (filaIndex) {
  const fila = []
  const wrapper = document.createElement('div')
  wrapper.className = 'seat-row'
  contenedorButacas.appendChild(wrapper)

  const titleRow = document.createElement('div')
  titleRow.className = 'row-label'
  titleRow.textContent = `Fila ${filaIndex + 1}`
  wrapper.appendChild(titleRow)

  for (let j = 0; j < seat; j++) {
    const id = filaIndex * seat + j + 1
    const cryptoRandom = crypto.getRandomValues(new Uint32Array(1))[0] / (2**32);
    const estado = cryptoRandom < 0.1; // 10% de probabilidad de "ocupado"
    fila.push({ id, estado })

    const butaca = document.createElement('div')
    butaca.id = `butaca-${id}`
    butaca.className = `seat ${estado ? 'occupied' : ''}`
    butaca.textContent = id
    wrapper.appendChild(butaca)
  }
  return fila
}

function generarButacas () {
  for (let i = 0; i < rows; i++) {
    butacas.push(generarFila(i))
  }
}

// Función para sugerir asientos
function suggest (asientosReserva) {
  if (asientosReserva > seat) {
    return new Set()
  }

  let reservaAsientos = new Set()
  let encontrado = false
  let asientosConsecutivos = 0

  for (let i = rows - 1; i >= 0 && !encontrado; i--) {
    const fila = butacas[i]
    asientosConsecutivos = 0
    reservaAsientos.clear()

    for (let j = 0; j < seat; j++) {
      if (!fila[j].estado) {
        asientosConsecutivos++
        reservaAsientos.add(fila[j].id)
        if (asientosConsecutivos === asientosReserva) {
          encontrado = true
          break
        }
      } else {
        asientosConsecutivos = 0
        reservaAsientos.clear()
      }
    }
  }

  return encontrado ? reservaAsientos : new Set()
}

function handleInputChange () {
  const cantidadAsientos = parseInt(document.getElementById('cantidadAsientos').value, 10)
  const infoReserva = document.getElementById('infoReserva')

  document.querySelectorAll('.seat').forEach(butaca => {
    butaca.classList.remove('butaca-selected')
  })

  if (isNaN(cantidadAsientos) || cantidadAsientos <= 0) {
    infoReserva.textContent = 'Por favor, ingresa una cantidad válida de asientos.'
    return
  }

  const reserva = suggest(cantidadAsientos)

  if (reserva.size > 0) {
    reserva.forEach(id => {
      const butaca = document.getElementById(`butaca-${id}`)
      if (butaca) butaca.classList.add('butaca-selected')
    })
    infoReserva.textContent = `Los asientos sugeridos son: ${Array.from(reserva).join(', ')}`
  } else {
    infoReserva.textContent = 'No se encontraron suficientes asientos consecutivos.'
  }
}

window.onload = generarButacas
document.getElementById('cantidadAsientos').addEventListener('input', handleInputChange)
document.getElementById('closeSession').addEventListener('click', () => {
  window.location.replace('../login/login.html')
})
