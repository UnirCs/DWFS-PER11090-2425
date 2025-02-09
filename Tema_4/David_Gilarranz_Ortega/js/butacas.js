document.addEventListener("DOMContentLoaded", () => {
  const N = 7;
  setup(N);

  // Añade listeners para el input
  const input = document.getElementById("num_butacas");
  input.setAttribute("max", N);
  input.onchange = (e) => {
    suggest(input.value);
    e.stopPropagation();
  };

  // Añade listeners para el botón
  const button = document.getElementById("reservar");
  button.onclick = reserve;
});

// Función para inicializar la matriz de butacas
function setup(N) {
  for (let i = 0; i < N; i++) {
    // Nueva fila
    const fila = document.createElement("tr");
    const id = `fila_${i + 1}`;
    fila.className = "fila";
    fila.id = id;
    document.getElementById("butacas").appendChild(fila);

    // Crea el elemento que indica el número de fila
    const tag = document.createElement("td");
    const tagText = document.createTextNode(`Fila ${i + 1}`);
    tag.appendChild(tagText);
    fila.appendChild(tag);

    // Crea las butacas de la fila
    for (let j = 0; j < N; j++) {
        // Nuevo asiento
        const butaca = document.createElement("td");
        butaca.className = "butaca";
        butaca.id = j + 1;

        fila.appendChild(butaca);
    }
  }
}

// Función para reservar n assientos
function suggest(n) {
  // Limpia sugerencias anteriores
  Array.from(document.getElementsByClassName("sugerida")).forEach(butata => butata.classList.remove("sugerida"));

  const reserva = new Set();
  const filas = document.getElementsByClassName("fila");

  for (let i = filas.length - 1; i >= 0 && n <= filas.length && reserva.size == 0; i--) {
    let fila = Array.from(filas[i].getElementsByClassName("butaca"));
    let primeraLibre = fila.findIndex(butaca => !(butaca.classList.contains("reservada")));
    console.log(fila);
    console.log(`n: ${n}, primeraLibre: ${primeraLibre}`);

    // Si hay n butacas libres, haz reserva
    if (fila.length - primeraLibre >= n && primeraLibre >= 0) {
      for (let j = primeraLibre; n > 0; j++, n--) {
        let butaca = fila[j];

        butaca.classList.add("sugerida");
        reserva.add(butaca.id);
      }
    }
  }
}

// Función para reservar las butacas sugeridas
function reserve() {
  const reserva = Array.from(document.getElementsByClassName("sugerida"));
  reserva.forEach(butata => {
    butata.classList.remove("sugerida")
    butata.classList.add("reservada");
  });

  document.getElementById("num_butacas").value = 0;
}