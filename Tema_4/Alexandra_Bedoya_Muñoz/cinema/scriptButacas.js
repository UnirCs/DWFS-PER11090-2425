const N = 10;
let butacas = [];

// Configuración inicial
function setup() {
  let idContador = 1;
  const filas = document.querySelectorAll("#sillas-cine tr");
  filas.forEach((fila, i) => {
    let filaButacas = [];
    const asientos = fila.querySelectorAll(".silla");
    asientos.forEach((asiento, j) => {
      const id = `asiento-${i}-${j}`;
      asiento.id = id;
      asiento.addEventListener("click", () => clicAsientoIndividual(i, j, id));
      
      filaButacas.push({
        id: idContador++,
        estado: asiento.classList.contains("ocupada"),
      });
    });
    butacas.push(filaButacas);
  });
}


function clicAsientoIndividual(fila, columna, id) {
  const asiento = document.getElementById(id);
  const ocupado = asiento.classList.contains("ocupada");
  if (!ocupado) {
    asiento.classList.add("ocupada");
    butacas[fila][columna].estado = true;
    const casillaSeleccionada = asiento.textContent.trim();
    const mensaje2 = `Reserva OK para el asiento: ${casillaSeleccionada || id}`;
    document.getElementById("output").textContent = mensaje2;
  } else {
    asiento.classList.remove("ocupada");
    butacas[fila][columna].estado = false;
  }
}


function updateButacas() {
  const filas = document.querySelectorAll("#sillas-cine tr");
  filas.forEach((fila, i) => {
    const asientos = fila.querySelectorAll(".silla");
    asientos.forEach((asiento, j) => {
      butacas[i][j].estado = asiento.classList.contains("ocupada");
    });
  });
}


function suggest(asientosSolicitados) {
  if (asientosSolicitados > N) return new Set();

  let resultado = new Set();
  let encontrado = false;

  for (let i = butacas.length - 1; i >= 0 && !encontrado; i--) {
    let consecutivos = 0;
    let inicio = -1;

    for (let j = 0; j < butacas[i].length && !encontrado; j++) {
      if (!butacas[i][j].estado) {
        consecutivos++;
        if (consecutivos === 1) inicio = j;
        if (consecutivos === asientosSolicitados) {
          resultado = new Set(
            butacas[i]
              .slice(inicio, inicio + asientosSolicitados)
              .map((asiento) => asiento.id)
          );
          encontrado = true;
        }
      } else {
        consecutivos = 0;
      }
    }
  }
  return resultado;
}

function sillaReservada(value) {
  const seatCount = parseInt(value || document.getElementById("contador_silla").value);
  let mensaje = "";
  if (isNaN(seatCount) || seatCount < 1) {
    mensaje = "Por favor, ingresa un número válido.";
  } else {
    updateButacas();
    const suggestion = suggest(seatCount);
    if (suggestion.size === 0) {
      mensaje = "No hay suficientes asientos disponibles juntos.";
    } else {
      if (!value) {
        document.querySelectorAll(".silla").forEach((silla, index) => {
          const fila = Math.floor(index / N);
          const columna = index % N;
          const id = butacas[fila][columna].id;
          if (suggestion.has(id)) {
            silla.classList.add("ocupada");
          }
        });

        mensaje = `Reserva OK para los asientos: ${Array.from(suggestion).join( ", ")}`;
        updateButacas();
        document.getElementById("contador_silla").value = 0;
      } else {
        mensaje = `Da clic en el botón CONFIRMAR RESERVA para apartar los asientos: [${Array.from(suggestion).join(", ")}]`;
      }
    }
  }

  document.getElementById("output").textContent = mensaje;
}

document.addEventListener("DOMContentLoaded", () => {
  setup();
  const input = document.getElementById("contador_silla");
  input.addEventListener("input", (event) => {
    const value = event.target.value;
    marcarSugerencias(value);
  });
});
function marcarSugerencias(value) {
  const seatCount = parseInt(value);
  document
    .querySelectorAll(".silla")
    .forEach((silla) => silla.classList.remove("sugerida"));

  let mensaje = "";

  if (isNaN(seatCount) || seatCount < 1) {
    mensaje = "Por favor, ingresa un número válido.";
  } else {
    updateButacas();
    const suggestion = suggest(seatCount);

    if (suggestion.size === 0) {
      mensaje = "No hay suficientes asientos disponibles juntos.";
    } else {
      document.querySelectorAll(".silla").forEach((silla, index) => {
        const fila = Math.floor(index / N);
        const columna = index % N;
        const id = butacas[fila][columna].id;

        if (suggestion.has(id)) {
          silla.classList.add("sugerida");
        }
      });
      mensaje = `Asientos sugeridos: ${Array.from(suggestion).join(", ")}`;
    }
  }

  document.getElementById("output").textContent = mensaje;
}
