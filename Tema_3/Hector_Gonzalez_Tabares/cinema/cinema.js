// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < N; j++) {
            // Nuevo asiento
            fila.push({
                id: idContador++,
                estado: false // Estado inicial libre
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

// Función para sugerir asientos
function suggest(numeroAsientos) {
    const resultado = new Set(); // Conjunto para almacenar los IDs de los asientos preseleccionados
    let butacas = setup();
	let found = true
    if (numeroAsientos > N) {
        // Si el número de asientos solicitados excede el tamaño máximo de la fila
       console.log(selected_seats)
    }

    // Comenzar a buscar desde la última fila (la más lejana a la pantalla)
    for (let i = N - 1; i >= 0; i--) {
        let consecutivos = 0; // Contador para asientos consecutivos libres
		let available_seats = [];
        
        for (let j = 0; j < N; j++) {
            if (!butacas[i][j].estado) {
                // Si el asiento está libre
                consecutivos++;
				available_seats.push(butacas[i][j].id);
                if (consecutivos === numeroAsientos && found===true) {
	                selected_seats = new Set(available_seats);
                    found = false
				}
            } else {
                // Reiniciar la búsqueda en caso de encontrar un asiento ocupado
                consecutivos = 0;
                available_seats = [];
            }
        }
    }
    //return selected_seats;
	console.log(selected_seats)
}
