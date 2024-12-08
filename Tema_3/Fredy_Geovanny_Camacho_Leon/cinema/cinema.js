// Configuración inicial de asientos
const N = 10; // Número de filas y columnas de butacas  
// Generar y renderizar las butacas dinámicamente
const contenedorButacas = document.getElementById("butacas-container"); // Contenedor de las butacas    
var butacas = []; // Arreglo de butacas
function generarButacas() {
    let id = 0;
    for (let i = 0; i < N; i++) {
        const fila = [];
        let wrapper = document.createElement("div"); // Crear un contenedor para cada fila
        wrapper.className = "d-flex justify-content-center mb-1"; // Añadir clases de Bootstrap
        contenedorButacas.appendChild(wrapper); // Añadir el contenedor al contenedor principal
        let titleRow = document.createElement("h6"); // Crear un elemento <h6> para mostrar el número de fila      
        titleRow.className = "badge text-bg-secondary"; // Añadir clases de Bootstrap
        titleRow.textContent = "◘";
        wrapper.appendChild(titleRow);
        for (let j = 0; j < N; j++) {
            id++; // Número de asiento
            const estado = false; // Asiento libre  
            // const estado = Math.random() < 0.3; // 30% de probabilidad de que el asiento esté ocupado
            fila.push({ id, estado }); // Añadir el asiento al arreglo de la fila   
            let butaca = document.createElement("div"); // Crear el asiento como un elemento <div>
            butaca.id = id; // Añadir un id único al asiento
            butaca.className = `butaca ${estado ? "butaca-ocupada" : "butaca-disponible"}`; // Añadir clases de Bootstrap    
            butaca.textContent = id; // Mostrar el número de asiento
            wrapper.appendChild(butaca); // Añadir el asiento al contenedor de la fila
        }
        butacas.push(fila); // Añadir la fila al arreglo de butacas
    }
}

// Llamar a la función para generar las butacas al cargar la página
window.onload = generarButacas();

// Función para sugerir asientos
function suggest(butacas, asientosReserva) {
    if (asientosReserva > butacas[0].length) {
        return new Set(); // No hay suficientes asientos
    }
    let reservaAsientos = new Set(); // Conjunto de asientos sugeridos
    let encontrado = false; // Indicador de si se han encontrado los asientos
    for (let i = butacas.length - 1; i >= 0 && !encontrado; i--) {
        let fila = butacas[i]; // Fila de butacas
        let asientosConsecutivos = 0; // Número de asientos consecutivos
        for (let j = fila.length - 1; j >= 0 && !encontrado; j--) {
            if (!fila[j].estado) { // Asiento libre
                asientosConsecutivos++; // Incrementar el contador de asientos consecutivos
                reservaAsientos.add(fila[j].id); // Añadir el asiento al conjunto de asientos sugeridos
                if (asientosConsecutivos === asientosReserva) { // Se han encontrado los asientos
                    encontrado = true;
                }
            } else { // Asiento ocupado
                reservaAsientos.clear(); // Limpiar conjunto de asientos sugeridos
                asientosConsecutivos = 0;
            }
        }
    }
    return reservaAsientos; // Devolver conjunto de asientos sugeridos
}

// Función para manejar el evento oninput del cuadro de texto
function handleInputChange() {
    const cantidadAsientos = parseInt(document.getElementById("cantidadAsientos").value, 10); // Obtener la cantidad de asientos ingresados por el usuario
    // Limpiar selección previa
    document.querySelectorAll(".butaca-seleccionada").forEach(butaca => {
        butaca.classList.remove("butaca-seleccionada");
    });
    if (!isNaN(cantidadAsientos) && cantidadAsientos > 0) { // Cantidad de asientos válida
        const reserva = suggest(butacas, cantidadAsientos); // Sugerir asientos
        // Destacar asientos sugeridos en el HTML
        reserva.forEach(id => {
            const butaca = document.getElementById(id); // Obtener el asiento por su id
            if (butaca) {
                butaca.classList.add("butaca-seleccionada"); // Añadir clase de Bootstrap
            }
        });
        // imprimir mensaje tipo log de asientos sugeridos
        let butacasReservadas = Array.from(reserva).join(", "); // Convertir conjunto a arreglo y luego a cadena
        document.getElementById("infoReserva").textContent = `Los asientos sugeridos son: ${butacasReservadas}`; // Mostrar mensaje en el HTML
    }
}
