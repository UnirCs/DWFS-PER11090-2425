const N = 10; // Número de filas y columnas
const asientosContainer = document.getElementById("asientos-container");

// Inicializar la matriz de butacas con IDs dinámicos
function setup() {
  let idContador = 1;
  let butacas = [];

  for (let i = 0; i < N; i++) {
    let fila = document.createElement("div");
    fila.classList.add("fila");
    let filaArray = [];

    for (let j = 0; j < N; j++) {
      let asiento = document.createElement("button");
      asiento.id = `asiento-${idContador}`;
      asiento.classList.add("asiento-libre");
      asiento.textContent = idContador;

      asiento.addEventListener("click", () => toggleEstado(asiento, i, j));

      fila.appendChild(asiento);

      filaArray.push({
        id: idContador++,
        estado: idContador === 100,
      });
    }

    asientosContainer.appendChild(fila);
    butacas.push(filaArray);
  }
  return butacas;
}

function toggleEstado(asiento, fila, columna) {
  if (asiento.classList.contains("asiento-libre")) {
    asiento.classList.remove("asiento-libre");
    asiento.classList.add("asiento-ocupado");
    butacas[fila][columna].estado = true;
  } else {
    asiento.classList.remove("asiento-ocupado");
    asiento.classList.add("asiento-libre");
    butacas[fila][columna].estado = false;
  }
}

function suggest(butacas, asientos) {
  let numeroFilas = butacas.length;
  let resultado = null;
  let encontrado = false;

  for (let i = numeroFilas - 1; i >= 0 && !encontrado; i--) {
    let consecutivos = [];
    for (let j = 0; j < numeroFilas && !encontrado; j++) {
      if (!butacas[i][j].estado) {
        consecutivos.push(butacas[i][j].id);
        if (consecutivos.length === asientos) {
          resultado = new Set(consecutivos);
          encontrado = true;
        }
      } else {
        consecutivos = [];
      }
    }
  }
  return resultado || new Set();
}

function dibujarAsientos(butacas) {
  const contenedor = document.getElementById('asientos-container');
  contenedor.innerHTML = ''; // Limpia el contenedor por si ya hay contenido

  butacas.forEach(fila => {
      const divFila = document.createElement('div');
      divFila.classList.add('fila');

      fila.forEach(asiento => {
          const boton = document.createElement('button');
          boton.id = `asiento-${asiento.id}`;
          boton.textContent = asiento.id;

          if (asiento.estado) {
              boton.classList.add('asiento-ocupado');
              boton.disabled = true; 
          } else {
              boton.classList.add('asiento-libre');
          }

          divFila.appendChild(boton);
      });

      contenedor.appendChild(divFila);
  });
}

let butacas = setup();

dibujarAsientos(butacas);


const inputAsientos = document.getElementById("cantidad-asientos");
inputAsientos.addEventListener("input", () => {
  const asientosDisponibles = suggest(
    butacas,
    parseInt(inputAsientos.value) || 0
  );

  document.querySelectorAll(".asiento-sugerido").forEach((asiento) => {
    asiento.classList.remove("asiento-sugerido");
  });

 
  asientosDisponibles.forEach((id) => {
    const asiento = document.getElementById(`asiento-${id}`);
    asiento.classList.add("asiento-sugerido");
  });

  console.log(asientosDisponibles);
});
