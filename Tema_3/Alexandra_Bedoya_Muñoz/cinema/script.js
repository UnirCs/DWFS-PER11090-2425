//Como estaba en el repositorio se tuvo en cuenta el ejercicio para
//una matriz de 10x10
const N = 10; 
let butacas = [];
function setup() {
    let idContador = 1;
    const filas = document.querySelectorAll("#sillas-cine tr");
    filas.forEach((fila, i) => {
        let filaButacas = [];
        const asientos = fila.querySelectorAll(".silla");
        asientos.forEach((asiento, j) => {
            filaButacas.push({
                id: idContador++,
                estado: asiento.classList.contains("ocupada")
            });
        });
        butacas.push(filaButacas);
    });
    
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
                        butacas[i].slice(inicio, inicio + asientosSolicitados).map(asiento => asiento.id)
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

//funcion al momento de dar clic en el boton CONFIRMAR RESERVA
function sillaReservada() {
    const seatCount = parseInt(document.getElementById("contador_silla").value);
    if (isNaN(seatCount) || seatCount < 1) {
        document.getElementById("output").textContent = "Por favor, ingresa un número válido.";
        return;
    }
    updateButacas();
    const suggestion = suggest(seatCount);
    if (suggestion.size === 0) {
        document.getElementById("output").textContent = "No hay suficientes asientos disponibles juntos.";
        return;
    }
    document.querySelectorAll(".silla").forEach((silla, index) => {
        const fila = Math.floor(index / N);
        const columna = index % N;
        const id = butacas[fila][columna].id;
        if (suggestion.has(id)) {
            silla.classList.add("ocupada");
        }
    });
    document.getElementById("output").textContent = `Reserva OK para los asientos: ${Array.from(suggestion).join(", ")}`;
    updateButacas();
    document.getElementById("contador_silla").value=0;
}

//metodo añadido para mostrar de manera dinamica a medida que va cambiando la cantidad
//cantidad de asientos en el input
function cantReservas(value) {
    const seatCount = parseInt(value);
    if (isNaN(seatCount) || seatCount < 1) {
        console.log("Ingrese un número válido.");
        return;
    }else{
        updateButacas(); 
        const suggestion = suggest(seatCount);
        if (suggestion.size === 0) {
            console.log("No hay suficientes asientos disponibles juntos.");
            return;
        }
        console.log(`Asientos sugeridos: [${Array.from(suggestion).join(", ")}]`);
        document.getElementById("output").textContent = `Da clic en el boton CONFIRMAR RESERVA para apartar los asientos: [${Array.from(suggestion).join(", ")}]`;
    }

}
document.addEventListener("DOMContentLoaded", () => {
    setup();
});