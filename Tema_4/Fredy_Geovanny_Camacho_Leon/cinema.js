// Configuración inicial de asientos
const N = 10; // Número de filas y columnas de butacas  
const contenedorButacas = document.getElementById("butacas-container"); // Contenedor de las butacas    
let butacas = []; // Arreglo de butacas
// Generar una fila de asientos
function generarFila(filaIndex) {
    const fila = [];
    const wrapper = document.createElement("div");
    wrapper.className = "d-flex justify-content-center mb-1";
    contenedorButacas.appendChild(wrapper);
    const titleRow = document.createElement("h6");
    titleRow.className = "badge text-bg-secondary";
    titleRow.textContent = "◘";
    wrapper.appendChild(titleRow);
    for (let j = 0; j < N; j++) {
        const id = filaIndex * N + j + 1; // Cálculo único del ID
        const estado = Math.random() < 0.1; // 10% de probabilidad de ocupado
        fila.push({ id, estado });
        const butaca = document.createElement("div");
        butaca.id = id;
        butaca.className = `butaca ${estado ? "butaca-ocupada" : "butaca-disponible"}`;
        butaca.textContent = id;
        wrapper.appendChild(butaca);
    }
    return fila;
}
// Generar y renderizar las butacas dinámicamente
function generarButacas() {
    for (let i = 0; i < N; i++) {
        butacas.push(generarFila(i));
    }
}
// Función para sugerir asientos
function suggest(butacas, asientosReserva) {
    if (asientosReserva > butacas[0].length) {
        return new Set(); // No hay suficientes asientos
    }
    let reservaAsientos = new Set(); // Conjunto de asientos sugeridos
    let encontrado = false; // Indicador de si se han encontrado los asientos
    let asientosConsecutivos = 0; // Número de asientos consecutivos
    for (let i = butacas.length - 1; i >= 0 && !encontrado; i--) { // Recorrer las filas de butacas
        let fila = butacas[i]; // Fila de butacas
        asientosConsecutivos = 0; // Número de asientos consecutivos
        reservaAsientos.clear(); // Limpiar conjunto de asientos sugeridos  
        for (let j = fila.length - 1; j >= 0 && !encontrado; j--) { // Recorrer los asientos de la fila
            if (!fila[j].estado) { // Asiento libre
                asientosConsecutivos++; // Incrementar el contador de asientos consecutivos
                reservaAsientos.add(fila[j].id); // Añadir el asiento al conjunto de asientos sugeridos
                if (asientosConsecutivos === asientosReserva) { // Se han encontrado los asientos
                    encontrado = true;
                }
            }
            else {
                reservaAsientos.clear(); // Limpiar conjunto de asientos sugeridos
                asientosConsecutivos = 0; // Reiniciar el contador de asientos consecutivos 
            }
        }
    }
    return (asientosConsecutivos === asientosReserva) ? reservaAsientos : new Set(); // Devolver conjunto de asientos sugeridos
}
// Función para manejar el evento oninput del cuadro de texto
function handleInputChange() {
    const cantidadAsientos = parseInt(document.getElementById("cantidadAsientos").value, 10);
    const infoReserva = document.getElementById("infoReserva");
    // Limpiar selección previa
    document.querySelectorAll(".butaca-seleccionada").forEach(butaca => {
        butaca.classList.remove("butaca-seleccionada");
    });
    if (isNaN(cantidadAsientos) || cantidadAsientos <= 0) {
        infoReserva.textContent = "Por favor, ingresa una cantidad válida de asientos.";
        return;
    }
    const reserva = suggest(butacas, cantidadAsientos);
    if (reserva.size > 0) {
        reserva.forEach(id => {
            const butaca = document.getElementById(id);
            if (butaca) butaca.classList.add("butaca-seleccionada");
        });
        infoReserva.textContent = `Los asientos sugeridos son: ${Array.from(reserva).join(", ")}`;
    } else {
        infoReserva.textContent = "No se encontraron suficientes asientos consecutivos.";
    }
}
// Inicialización
window.onload = generarButacas;
document.getElementById("cantidadAsientos").addEventListener("input", handleInputChange);
document.getElementById("closeSession").addEventListener("click", () => {
    window.location.replace("login/login.html");
});