

document.addEventListener("DOMContentLoaded", () => {
    const filas = 10;  // Cantidad de filas
    const columnas = 10; // Cantidad de butacas por fila
    crearSala(filas, columnas);

    const inputAsientos = document.getElementById("asientos");
    const btnReservar = document.getElementById("btnReservar");


    inputAsientos.addEventListener("change", () => {
        const n = parseInt(inputAsientos.value) || 0;
        sugerirAsientos(n);
    });


    btnReservar.addEventListener("click", () => {
        reservarSugeridos();
    });
});


function crearSala(filas, columnas) {
    const salaContainer = document.getElementById("sala");

    for (let i = 1; i <= filas; i++) {
        // Creamos un div que representa la fila
        const filaDiv = document.createElement("div");
        filaDiv.classList.add("fila");

        for (let j = 1; j <= columnas; j++) {
            const butaca = document.createElement("div");
            butaca.classList.add("butaca");
            butaca.id = `fila${i}_col${j}`;
            filaDiv.appendChild(butaca);
        }
        salaContainer.appendChild(filaDiv);
    }
}


function sugerirAsientos(n) {
    // Eliminamos sugerencias anteriores
    const sugeridas = document.querySelectorAll(".butaca.sugerida");
    sugeridas.forEach((b) => b.classList.remove("sugerida"));

    // Si el usuario pone 0 o algo inválido, no sugerimos nada
    if (n <= 0) return;

    // Tomamos las filas en orden inverso (la última fila primero)
    const filas = Array.from(document.getElementsByClassName("fila"));
    let found = false;

    for (let i = filas.length - 1; i >= 0 && !found; i--) {
        const asientosFila = filas[i].getElementsByClassName("butaca");

        let consecutivos = 0;
        let inicio = 0;

        for (let j = 0; j < asientosFila.length; j++) {
            const butaca = asientosFila[j];

            // Está libre si no tiene clase "reservada"
            const libre = !butaca.classList.contains("reservada");

            if (libre) {
                consecutivos++;
            } else {
                consecutivos = 0;
                inicio = j + 1;
            }

            if (consecutivos === n) {
                // Marcamos esas n butacas como "sugerida"
                for (let k = inicio; k < inicio + n; k++) {
                    asientosFila[k].classList.add("sugerida");
                }
                found = true;
                break;
            }
        }
    }
}


function reservarSugeridos() {
    const sugeridas = document.querySelectorAll(".butaca.sugerida");
    sugeridas.forEach((b) => {
        b.classList.remove("sugerida");
        b.classList.add("reservada");
    });

    // Poner el input a 0 o vacío
    document.getElementById("asientos").value = "";
}
